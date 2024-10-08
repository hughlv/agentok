'use client';
// NOTE:
// Putting this page into a group (chat-layout) is to avoid the remounting of layout page when switching between
// different /chats/[id], because remounting of layout will only cause the flickering of the list, but also lose the
// scroll position of the chat list.
// Refer to: https://github.com/vercel/next.js/issues/44793#issuecomment-1382458981
import { useChats, useMediaQuery } from '@/hooks';
import ChatListButton from '../components/chat/ChatListButton';
import { useTranslations } from 'next-intl';
import ChatList from '../components/chat/ChatList';
import clsx from 'clsx';
import { useEffect, PropsWithChildren, useState } from 'react';
import { RiCloseLargeLine, RiFilterLine } from 'react-icons/ri';

const ChatListPane = () => {
  const t = useTranslations('page.Chat');
  const [filter, setFilter] = useState('');

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-center w-80 justify-between p-2 gap-2">
        <span className="font-bold">{t('chat-sessions')}</span>
        <ChatListButton />
      </div>
      <div className="relative flex items-center w-full px-2 gap-1">
        <RiFilterLine className="w-5 h-5" />
        <input
          className="flex-1 input input-sm input-bordered rounded font-normal"
          placeholder={t('filter')}
          value={filter}
          autoFocus
          onChange={(e) => setFilter(e.target.value)}
        />
        {filter && (
          <button
            className="absolute right-3 btn btn-xs btn-square btn-ghost"
            onClick={() => setFilter('')}
          >
            <RiCloseLargeLine className="w-4 h-4" />
          </button>
        )}
      </div>
      <div className="flex flex-col w-full h-full p-1 overflow-y-auto overflow-x-hidden">
        <ChatList filter={filter} />
      </div>
    </div>
  );
};

const LayoutPage = ({ children }: PropsWithChildren) => {
  const { sidebarCollapsed, setSidebarCollapsed } = useChats();
  const t = useTranslations('page.Chat');
  const isMediumScreen = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (isMediumScreen) {
      setSidebarCollapsed(true); // When screen is medium, collapse the sidebar
    }
  }, [isMediumScreen, setSidebarCollapsed]);

  return (
    <div className="flex w-full h-full">
      <title>Chat | Agentok Studio</title>
      <div className="flex gap-1 text-sm w-full h-full p-1">
        <div
          className={clsx(
            'gap-1 text-sm rounded-xl bg-gray-700/80 text-base-content border border-gray-600',
            sidebarCollapsed ? 'hidden' : 'md:flex'
          )}
        >
          <ChatListPane />
        </div>
        <div className="flex flex-1">{children}</div>
      </div>
    </div>
  );
};

export default LayoutPage;
