/* ════════════════════════════════════════════════════════════════════
   QATO prototype kit · proto.js
   Общий рантайм прототипа: scenbar-драйвер, переключение состояний,
   fixed-позиционирование меню (анти-обрезка), toast, init иконок.

   Под задачу определи массив SCEN и (опц.) перепиши applyScenario(id).
   Всё остальное работает само через делегирование кликов по data-action.
   ════════════════════════════════════════════════════════════════════ */

/* Плоский массив id сценариев для листания стрелками ‹ ›.
   Переопредели в инлайновом <script> прототипа ДО DOMContentLoaded. */
window.SCEN = window.SCEN || [];

function icons(){ try{ lucide.createIcons(); }catch(e){} }
function closeMenus(){ document.querySelectorAll('.menu.open').forEach(m=>m.classList.remove('open')); }
function closeModals(){ document.querySelectorAll('.overlay.open').forEach(m=>m.classList.remove('open')); }
function openModal(id){ const o=document.getElementById(id); if(o){ o.classList.add('open'); icons(); } }

/* Тост в правом верхнем углу. kind: 'violet'|'green'|'red'. */
function toast(title, sub, kind){
  let wrap=document.querySelector('.toast-wrap');
  if(!wrap){ wrap=document.createElement('div'); wrap.className='toast-wrap'; document.body.appendChild(wrap); }
  const ico = kind==='green'?'check':(kind==='red'?'alert-triangle':'square-stack');
  const t=document.createElement('div'); t.className='toast';
  t.innerHTML=`<span class="t-ico ${kind||'violet'}"><i data-lucide="${ico}" width="14" height="14"></i></span><div>${title}${sub?`<small>${sub}</small>`:''}</div>`;
  wrap.appendChild(t); icons();
  setTimeout(()=>{ t.style.opacity='0'; t.style.transform='translateX(16px)'; setTimeout(()=>t.remove(),200); }, 3200);
}

/* Открыть меню/дропдаун как position:fixed по rect кнопки — НЕ обрезается
   контейнером с overflow:hidden. m — элемент .menu, btn — кнопка-триггер.
   align: 'right' (по правому краю кнопки, по умолч.) | 'left'. */
function openMenu(m, btn, align){
  const open=m.classList.contains('open');
  closeMenus();
  if(open){ return; }
  const r=btn.getBoundingClientRect();
  m.style.position='fixed';
  m.style.top=(r.bottom+4)+'px';
  if(align==='left'){ m.style.left=r.left+'px'; m.style.right='auto'; }
  else { m.style.right=(window.innerWidth-r.right)+'px'; m.style.left='auto'; }
  m.classList.add('open');
}

/* Переключение состояния. Базовая реализация: показывает .screen с нужным id,
   синхронизирует <select> и закрывает оверлеи. Доопредели applyScenario(id)
   в прототипе для побочных эффектов (бейджи, тексты, фреймы и т.п.). */
function showScenario(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const el=document.getElementById(id);
  if(el) el.classList.add('active');
  const sel=document.getElementById('scen-select'); if(sel && sel.value!==id) sel.value=id;
  closeMenus(); closeModals();
  if(typeof window.applyScenario==='function'){ try{ window.applyScenario(id); }catch(e){} }
  icons();
}
function currentScenario(){ const a=document.querySelector('.screen.active'); return a?a.id:(window.SCEN[0]||null); }

/* Смоук: прогнать все состояния из SCEN, поймать ошибки и рассинхрон навигации.
   Обязателен перед каждым пушем прототипа (см. скилл build-prototype).
   Запуск: smoke() в консоли, или открыть страницу с #smoke в адресе. */
window.smoke=function(){
  const start=currentScenario(), bad=[];
  (window.SCEN||[]).forEach(id=>{
    try{ showScenario(id); if(currentScenario()!==id) bad.push(id+': активно '+currentScenario()); }
    catch(e){ bad.push(id+': ошибка '+(e&&e.message)); }
  });
  if(start) showScenario(start);
  console.log(bad.length ? '❌ смоук: '+bad.join('; ') : '✅ смоук: '+(window.SCEN||[]).length+' состояний, ошибок нет');
  return bad;
};

/* ── делегирование кликов ──────────────────────────────────────────── */
document.addEventListener('click',(e)=>{
  // навигация scenbar
  const nav=e.target.closest('[data-action]');
  if(nav){
    const a=nav.dataset.action;
    if(a==='prev-scen'){ const S=window.SCEN, i=S.indexOf(currentScenario()); if(S.length) showScenario(S[(i-1+S.length)%S.length]); return; }
    if(a==='next-scen'){ const S=window.SCEN, i=S.indexOf(currentScenario()); if(S.length) showScenario(S[(i+1)%S.length]); return; }
    if(a==='reset'){ showScenario(currentScenario()); return; }
    if(a==='goto'){ showScenario(nav.dataset.scen); return; }
    if(a==='kebab'){ const m=document.querySelector(nav.dataset.menu); if(m) openMenu(m, nav, nav.dataset.align); return; }
    if(a==='modal'){ openModal(nav.dataset.modal); return; }
    if(a==='close-modal'){ closeModals(); return; }
  }
  // клик вне меню — закрыть
  if(!e.target.closest('.menu')) closeMenus();
  // клик по подложке оверлея — закрыть
  if(e.target.classList.contains('overlay')) closeModals();
});

document.addEventListener('change',(e)=>{ if(e.target.id==='scen-select') showScenario(e.target.value); });
document.addEventListener('keydown',(e)=>{ if(e.key==='Escape'){ closeMenus(); closeModals(); } });
window.addEventListener('resize', closeMenus);
document.addEventListener('DOMContentLoaded',()=>{ icons(); if(window.SCEN.length) showScenario(window.SCEN[0]); if(location.hash==='#smoke') setTimeout(()=>window.smoke(),300); });
