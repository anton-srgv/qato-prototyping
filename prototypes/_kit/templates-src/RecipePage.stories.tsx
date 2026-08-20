// ВРЕМЕННАЯ story только для заморозки шаблона экрана (qato-design capture).
// Рецепт целиком: Header + FlowPanel (шаги) + PreviewPanel. Данные — сидом в zustand-стор
// рецепта (setRecipe), как в StepCard.stories. Создаётся, снимается и УДАЛЯЕТСЯ.
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useLayoutEffect } from 'react';
import { StepStatusEnum, StepSectionEnum } from 'api';
import type { RecipeDTO } from 'api';
import { Router } from 'wouter';
import { memoryLocation } from 'wouter/memory-location';
import { Layout, LayoutVariant } from '@/core/layout';
import { TooltipProvider } from '@/shared/components/ui/Tooltip';
import { ProjectProvider } from '@/shared/utils/hooks/useProject';
import { RecipeActionsProvider } from '@/pages/RecipePage/context';
import { useRecipeStore } from '@/pages/RecipePage/stores';
import { FlowPanel, RecipeHeader, RecipeBanner } from '@/pages/RecipePage/components';
import { PreviewPanelHeader } from '@/pages/RecipePage/components/PreviewPanel/components/PreviewPanelHeader/PreviewPanelHeader';
import * as previewStyles from '@/pages/RecipePage/components/PreviewPanel/PreviewPanel.styles';
import type { RecipeLocator, RecipeStep } from '@/pages/RecipePage/types';
import * as styles from '@/pages/RecipePage/RecipePage.styles';

// wouter на адресе рецепта: как в проде — прячет mail/logout в шапке, показывает «назад».
const { hook: routeHook } = memoryLocation({ path: '/recipes/r1' });
// Заглушка предпросмотра: VNC статично не рендерится, показываем реальный блок превью
// (заголовок + URL) и iframe-заглушку любого сайта.
const SUT_URL = 'https://example.com';

const loc = (o: Partial<RecipeLocator> & Pick<RecipeLocator, 'type' | 'value'>): RecipeLocator => ({
  priority: 1, description: null, stabilityScore: null, ...o,
});
const step = (o: Record<string, unknown>): RecipeStep => ({
  testStep: '', expectedResult: null, status: StepStatusEnum.Draft, error: null, isActive: false,
  actions: null, assertions: null, predictedVariables: null, updatedAt: null,
  section: StepSectionEnum.Body, ...o,
} as unknown as RecipeStep);

const steps: RecipeStep[] = [
  step({
    status: StepStatusEnum.Unverified, testStep: 'Ввести значение admin в поле «Логин»',
    expectedResult: 'Поле логина заполнено',
    actions: [{ target: [loc({ type: 'text', value: 'Логин' })], method: 'Input' as const, value: 'admin', nlTargetCaptionDict: null, error: null, updatedAt: null }],
  }),
  step({
    status: StepStatusEnum.Unverified, testStep: 'Ввести пароль в поле «Пароль»',
    expectedResult: 'Поле пароля заполнено',
    actions: [{ target: [loc({ type: 'text', value: 'Пароль' })], method: 'Input' as const, value: '••••••', nlTargetCaptionDict: null, error: null, updatedAt: null }],
  }),
  step({
    status: StepStatusEnum.Unverified, testStep: 'Нажать кнопку «Войти» и проверить переход',
    expectedResult: 'Открыт дашборд',
    actions: [{ target: [loc({ type: 'text', value: 'Войти' })], method: 'Click' as const, value: null, nlTargetCaptionDict: null, error: null, updatedAt: null }],
    assertions: [{ targetElementType: 'Page', targetElementDescription: 'Dashboard', property: 'visible', match: 'equals', expectedValue: 'true', assertionDescription: 'Дашборд виден', target: [loc({ type: 'text', value: 'Dashboard' })], attributeName: null, error: null, updatedAt: null }],
  }),
  step({ status: StepStatusEnum.Draft, testStep: 'Открыть раздел «Проекты»', expectedResult: null }),
];

const recipe = {
  id: 'r1', projectId: 'p1', title: 'Успешный вход администратора',
  displayStatus: 'NeedsWork', description: null, preconditions: null,
  expectedResults: [], steps, normalization: null, invalid: null,
  sectionPath: 'Авторизация', sourceId: null, tags: ['smoke', 'auth'],
  testTmsUrl: null, bulkRunId: null, busyBy: null,
  createdAt: '2026-08-18T10:00:00.000Z', updatedAt: '2026-08-18T10:00:00.000Z',
} as unknown as RecipeDTO;

function Seeder() {
  useLayoutEffect(() => { useRecipeStore.getState().actions.setRecipe(recipe); }, []);
  return null;
}

const noop = () => {};
const aNoop = () => Promise.resolve();

const meta: Meta = { title: 'Templates/RecipePage', parameters: { layout: 'fullscreen' } };
export default meta;
type Story = StoryObj<typeof meta>;

export const Full: Story = {
  render: () => (
    <Router hook={routeHook}>
      <ProjectProvider>
        <TooltipProvider>
          <Seeder />
          <Layout variant={LayoutVariant.MainContent} banner={<RecipeBanner onTryReserve={noop} />}>
            <RecipeActionsProvider
              onTryReserve={noop} openEditStep={noop} closeEditStep={noop} syncWritingOperation={noop}
              subscribeToRecipeEvents={() => () => {}} onPlaybackToStep={aNoop} onToggleRecord={aNoop}
              onCancelRecord={noop} onPredict={aNoop} onStopPrediction={aNoop} onPlayback={aNoop}
              onStopPlayback={aNoop} onNormalize={aNoop}
            >
              <RecipeHeader />
              <div className={styles.contentStyle}>
                <FlowPanel />
                <div className={previewStyles.previewPanelContainerStyle}>
                  <PreviewPanelHeader sutUrl={SUT_URL} />
                  <iframe
                    title="preview"
                    src={SUT_URL}
                    style={{ flex: 1, width: '100%', border: 0, borderRadius: 12, background: '#fff' }}
                  />
                </div>
              </div>
            </RecipeActionsProvider>
          </Layout>
        </TooltipProvider>
      </ProjectProvider>
    </Router>
  ),
};
