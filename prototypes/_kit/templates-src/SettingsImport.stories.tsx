// ВРЕМЕННАЯ story только для заморозки шаблонов экранов (qato-design capture).
// Настройки (4 раздела) + импорт. Создаётся, снимается и УДАЛЯЕТСЯ.
import type { Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpc } from '@/core/request/trpc';
import { ProjectProvider } from '@/shared/utils/hooks/useProject';
import EnvironmentPage from '@/pages/Settings/EnvironmentPage';
import IntegrationsPage from '@/pages/Settings/IntegrationsPage';
import MembersPage from '@/pages/Settings/MembersPage';
import ProjectContextPage from '@/pages/Settings/ProjectContextPage';
import ImportPage from '@/pages/ImportPage/ImportPage';

const ISO = '2026-08-18T10:00:00.000Z';
const ORG = 'storybook-org';

const project = {
  id: 'p1',
  name: 'Demo Project',
  organizationId: ORG,
  description: null,
  createdAt: ISO,
  updatedAt: ISO,
  sutUrl: 'https://demo.testai.software',
  envData: {
    items: [
      { key: 'ADMIN_LOGIN', value: 'admin@example.com', type: 'login', isSecret: false },
      { key: 'ADMIN_PASSWORD', value: 'super-secret', type: 'password', isSecret: true },
      { key: 'API_KEY', value: 'sk-1234567890', type: 'api_key', isSecret: true },
      { key: 'BASE_TIMEOUT', value: '30', type: 'other', isSecret: false },
    ],
  },
};

// Клиент с посеянными данными: снимаем спиннеры, показываем populated-состояние.
const seededClient = () => {
  const qc = new QueryClient({
    defaultOptions: { queries: { retry: false, staleTime: Infinity }, mutations: { retry: false } },
  });
  qc.setQueryData(trpc.project.list.queryKey({ organizationId: ORG }), [project]);
  qc.setQueryData(trpc.project.get.queryKey({ id: 'p1' }), project);
  qc.setQueryData(trpc.project.getEnvDataTypes.queryKey(), [
    { type: 'login', label: 'Логин' },
    { type: 'password', label: 'Пароль' },
    { type: 'api_key', label: 'API-ключ' },
    { type: 'other', label: 'Другое' },
  ]);
  // Интеграции: Test IT (подключён) + git-репозиторий не подключён.
  qc.setQueryData(trpc.tmsIntegration.list.queryKey({ organizationId: ORG }), {
    tmsIntegrations: [{ id: 'ti1', name: 'Test IT', tmsConnections: [{ id: 'c1' }] }],
  });
  qc.setQueryData(trpc.organizationGitRepo.get.queryKey({ projectId: 'p1' }), null);
  // Участники: владелец + пара участников + приглашение в ожидании.
  qc.setQueryData(trpc.organization.listMembersAndInvitations.queryKey({ organizationId: ORG }), {
    items: [
      { id: 'm1', email: 'anna.petrova@example.com', role: 'OWNER', type: 'member' },
      { id: 'm2', email: 'ivan.smirnov@example.com', role: 'MEMBER', type: 'member' },
      { id: 'm3', email: 'olga.k@example.com', role: 'MEMBER', type: 'member' },
      { id: 'i1', email: 'new.tester@example.com', role: 'MEMBER', type: 'invitation', status: 'PENDING' },
    ],
  });
  // Контекст проекта: несколько md-файлов.
  qc.setQueryData(trpc.projectContext.list.queryKey({ projectId: 'p1' }), [
    { id: 'f1', name: 'glossary.md', sizeBytes: 4096, createdAt: new Date('2026-08-10T09:00:00Z') },
    { id: 'f2', name: 'user-scenarios.md', sizeBytes: 15360, createdAt: new Date('2026-08-12T14:30:00Z') },
    { id: 'f3', name: 'api-overview.md', sizeBytes: 8704, createdAt: new Date('2026-08-14T11:15:00Z') },
  ]);
  // Импорт: как будто подгружен. ProjectSelector авто-выберет первый проект → таблица
  // тест-кейсов запросит infinite-запросом; посев под его точный ключ.
  qc.setQueryData(trpc.tmsConnection.listProjects.queryKey({ tmsConnectionId: 'c1' }), {
    projects: [{ id: 'tp1', name: 'QA Web', globalId: 1 }],
  });
  // Дерево секций импорта (custom-ключ SectionTree): единый корень + под-секции.
  qc.setQueryData(['tmsConnection.listProjectSections', 'c1', 'tp1', 'p1'], {
    sections: [{ id: 's0', name: 'QA Web', children: [
      { id: 's1', name: 'Авторизация', children: [] },
      { id: 's2', name: 'Профиль', children: [{ id: 's3', name: 'Настройки профиля', children: [] }] },
      { id: 's4', name: 'Платежи', children: [] },
    ] }],
  });
  const tc = (id: string, name: string, sectionName: string, globalId: number, isImported = false, tags: string[] = []) =>
    ({ id, name, isImported, projectId: 'tp1', sectionName, tags, globalId });
  qc.setQueryData(
    ['tmsConnection.listTestCases', 'c1', 'tp1', 'p1', null, '', []],
    {
      pages: [{ testCases: [
        tc('tc1', 'Успешный вход администратора', 'Авторизация', 1201, false, ['smoke']),
        tc('tc2', 'Вход с неверным паролем', 'Авторизация', 1202),
        tc('tc3', 'Восстановление пароля по email', 'Авторизация', 1203),
        tc('tc4', 'Смена аватара профиля', 'Профиль', 1305, true, ['regression']),
        tc('tc5', 'Оплата картой', 'Платежи', 1410, false, ['smoke', 'payments']),
        tc('tc6', 'Возврат средств', 'Платежи', 1411),
      ] }],
      pageParams: [0],
    },
  );
  return qc;
};

const wrap = (node: React.ReactNode) => (
  <QueryClientProvider client={seededClient()}>
    <ProjectProvider>{node}</ProjectProvider>
  </QueryClientProvider>
);

const meta: Meta = {
  title: 'Templates/SettingsImport',
  parameters: { layout: 'fullscreen' },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Environment: Story = { render: () => wrap(<EnvironmentPage />) };
export const Integrations: Story = { render: () => wrap(<IntegrationsPage />) };
export const Members: Story = { render: () => wrap(<MembersPage />) };
export const ProjectContext: Story = { render: () => wrap(<ProjectContextPage />) };
export const Import: Story = { render: () => wrap(<ImportPage />) };
