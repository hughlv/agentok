import SidebarLayout from '@/components/SidebarLayout';
import { PropsWithChildren } from 'react';
import { settingList } from './settings';

const Layout = ({
  children,
  params,
}: PropsWithChildren<{ params: { projectId: string } }>) => {
  console.log('params', params);
  return <SidebarLayout sidebarItems={settingList}>{children}</SidebarLayout>;
};

export default Layout;
