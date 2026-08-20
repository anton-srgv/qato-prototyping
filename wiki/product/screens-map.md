# Screens map: экраны qautomator-ui

Карта реальных экранов фронтенда (`../qato/qautomator-ui/src/pages/`). Перед сборкой прототипа
сначала смотри готовые шаблоны в `prototypes/_kit/screens/` (замороженный прод); карту используй,
когда нужного экрана в шаблонах ещё нет. Только чтение, код не трогаем.

Сверено со структурой `pages/` на 2026-08-20.

| Страница (pages/) | Что это | Заметки |
|---|---|---|
| `WelcomePage` | Приветствие / онбординг | первый запуск |
| `Auth` | Авторизация | |
| `HomePage` | Главная после входа | |
| `RecipesListPage` | Список рецептов/тестов | шаблон `_kit/screens/recipes-list` |
| `RecipePage` | Редактор рецепта | ядро работы с [[glossary|recipe]]; шаблон `_kit/screens/recipe-page`; шапка редактора без нижнего бордера; шаги = белые карточки `StepCard`; primary-кнопки `btn-primary` |
| `ImportPage` | Импорт кейсов из TMS | вход потока из [[glossary|Test IT]]; шаблон `_kit/screens/settings-import` (import) |
| `Settings/EnvironmentPage` | Настройки: SUT URL и переменные окружения | шаблон `_kit/screens/settings-import` (environment) |
| `Settings/IntegrationsPage` | Настройки: интеграции (Test IT, git-репозиторий) | заменил бывший `TmsConnectionsPage` |
| `Settings/MembersPage` | Настройки: участники и роли | |
| `Settings/ProjectContextPage` | Настройки: md-файлы контекста проекта | |
| `Admin` | Админка | роль Admin |
| `ServiceUnavailablePage` | Сервис недоступен | служебная |
| `CorsTest`, `NotFoundPage` | служебные | не для прототипов |

<!-- StepCard во всех статусах: _kit/screens/recipe-stepcard/_gallery.html -->
