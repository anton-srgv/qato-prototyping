// ВРЕМЕННАЯ story только для заморозки шаблона экрана (qato-design capture).
// Композит реальной страницы «Список рецептов» на мок-данных.
// Создаётся движком capture-storybook, снимается и УДАЛЯЕТСЯ — репо остаётся чистым.
import type { Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpc } from '@/core/request/trpc';
import { Layout, LayoutVariant } from '@/core/layout';
import { ProjectProvider } from '@/shared/utils/hooks/useProject';
import { RecipesListPageAside } from '@/pages/RecipesListPage/components/RecipesListPageAside';
import {
  RecipesStatusTabs,
  RecipesFilters,
} from '@/pages/RecipesListPage/components';
import { RecipesSection } from '@/pages/RecipesListPage/components/RecipesList/components/RecipesSection';
import { RecipesListActionsContext } from '@/pages/RecipesListPage/components/RecipesList/context';

const noopActions = { openDelete: () => {}, openGenerate: () => {}, openInfo: () => {} };
const ORG = 'storybook-org';

// Посев: проект (чтобы включились запросы) + счётчики статусов + дерево секций (рейл).
const seededClient = () => {
  const qc = new QueryClient({
    defaultOptions: { queries: { retry: false, staleTime: Infinity }, mutations: { retry: false } },
  });
  qc.setQueryData(trpc.project.list.queryKey({ organizationId: ORG }), [
    { id: 'p1', name: 'Demo Project', organizationId: ORG, description: null,
      createdAt: '2026-08-18T10:00:00.000Z', updatedAt: '2026-08-18T10:00:00.000Z',
      sutUrl: null, envData: { items: [] } },
  ]);
  qc.setQueryData(trpc.recipe.displayStatusCounts.queryKey({ projectId: 'p1' }), {
    All: 24, New: 5, InQueue: 2, InProgress: 1, NeedsWork: 8, Ready: 8,
  });
  // Дерево секций в рейле показывается только при hasTmsIntegration && hasRecipes.
  qc.setQueryData(trpc.tmsIntegration.list.queryKey({ organizationId: ORG }), {
    tmsIntegrations: [{ id: 'ti1', name: 'Test IT', tmsConnections: [{ id: 'c1' }] }],
  });
  qc.setQueryData(trpc.recipe.list.queryKey({ projectId: 'p1', params: { skip: 0, take: 1 } }), {
    items: [], total: 24,
  });
  qc.setQueryData(trpc.recipe.sections.queryKey({ projectId: 'p1' }), [
    { label: 'Авторизация', path: 'Авторизация', children: [] },
    { label: 'Профиль', path: 'Профиль', children: [
      { label: 'Настройки профиля', path: 'Профиль/Настройки профиля', children: [] },
    ] },
    { label: 'Платежи', path: 'Платежи', children: [] },
    { label: 'Уведомления', path: 'Уведомления', children: [] },
  ]);
  return qc;
};

const ISO = '2026-08-18T10:00:00.000Z';
const mk = (over: Record<string, unknown>) => ({
  id: 'r-' + Math.random().toString(36).slice(2, 8),
  title: 'Рецепт',
  displayStatus: 'Ready',
  passedSteps: 8,
  totalSteps: 8,
  bulkRunId: null,
  busyBy: null,
  createdAt: ISO,
  updatedAt: ISO,
  firstNotGeneratedStepIndex: 0,
  hasGeneratedContent: true,
  invalid: null,
  sectionPath: null,
  sourceId: null,
  tags: [],
  testTmsUrl: null,
  ...over,
});

const section = {
  id: 'root',
  name: 'Авторизация',
  items: [
    mk({ title: 'Успешный вход администратора', displayStatus: 'Ready', passedSteps: 8, totalSteps: 8, tags: ['smoke', 'auth'] }),
    mk({ title: 'Вход с неверным паролем', displayStatus: 'NeedsWork', passedSteps: 4, totalSteps: 9 }),
    mk({ title: 'Восстановление пароля по email', displayStatus: 'New', passedSteps: 0, totalSteps: 6 }),
    mk({ title: 'Блокировка после трёх попыток', displayStatus: 'InProgress', passedSteps: 3, totalSteps: 7 }),
    mk({ title: 'Выход из системы', displayStatus: 'InQueue', passedSteps: 0, totalSteps: 5 }),
  ],
};

const meta: Meta = {
  title: 'Templates/RecipesListPage',
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Full: Story = {
  render: () => (
    <QueryClientProvider client={seededClient()}>
    <ProjectProvider>
      <RecipesListActionsContext.Provider value={noopActions}>
        <Layout variant={LayoutVariant.Sidebar} aside={<RecipesListPageAside />} mainClassName="overflow-hidden">
          <div className="flex h-full w-full flex-grow flex-col">
            <div className="flex flex-1 min-h-0 flex-col gap-4 px-4 pt-4">
              <RecipesStatusTabs />
              <RecipesFilters />
              <RecipesSection section={section as never} lastSection={null} />
            </div>
          </div>
        </Layout>
      </RecipesListActionsContext.Provider>
    </ProjectProvider>
    </QueryClientProvider>
  ),
};
