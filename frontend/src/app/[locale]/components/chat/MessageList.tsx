import { stripMatch } from '@/utils/re';
import { StatusMessage } from '@/utils/chat';
import {
  RiRobot2Line,
  RiRobot2Fill,
  RiUserVoiceLine,
  RiCheckLine,
  RiAlertLine,
  RiVoiceprintLine,
  RiRefreshLine,
  RiUserVoiceFill,
  RiCodeBlock,
} from 'react-icons/ri';
import Markdown from '@/components/Markdown';
import { useTranslations } from 'next-intl';
import { useChat, useUser } from '@/hooks';
import PopupDialog from '@/components/PopupDialog';
import { useState } from 'react';

const MessageBubble = ({ chat, message, onSend, onShowMessageData }: any) => {
  const t = useTranslations('component.ChatPane');
  const { chatSource } = useChat(chat.id);
  const { user } = useUser();
  const userNodeName =
    chatSource?.flow?.nodes?.find(
      (node: any) =>
        node.data.class === 'UserProxyAgent' ||
        node.data.class === 'RetrieveUserProxyAgent' ||
        node.data.name.includes('User')
    )?.data?.name ?? '';
  let waitForHumanInput = false;

  // End of thinking
  if (message.content.startsWith(StatusMessage.completed)) {
    const { found, text } = stripMatch(
      message.content,
      StatusMessage.completed
    );
    const success = found && text.startsWith('DONE');
    const ResultIcon = success ? RiCheckLine : RiAlertLine;
    const resultClass = success ? 'text-green-500' : 'text-red-500/50';

    return (
      <div
        className="divider my-2 text-sm"
        data-tooltip-id="chat-tooltip"
        data-tooltip-content={text}
        data-tooltip-place="top"
      >
        <div
          className={`flex items-center gap-1 cursor-pointer ${resultClass}`}
        >
          <ResultIcon className="w-4 h-4" />
          <span>{t('thinking-end')}</span>
        </div>
      </div>
    );
  } else if (message.content.startsWith(StatusMessage.running)) {
    return (
      <div
        className="divider my-2 text-sm text-base-content/30"
        data-tooltip-id="chat-tooltip"
        data-tooltip-content={t('thinking-begin')}
        data-tooltip-place="top"
      >
        <div className="flex items-center gap-1 cursor-pointer">
          <RiRobot2Line className="w-4 h-4" />
          <span>{t('thinking-begin')}</span>
        </div>
      </div>
    );
  } else if (message.content.startsWith(StatusMessage.receivedHumanInput)) {
    message.content = t('received-human-input');
  } else if (message.content.startsWith(StatusMessage.waitForHumanInput)) {
    const { text } = stripMatch(
      message.content,
      StatusMessage.waitForHumanInput
    );
    message.content = text ?? t('wait-for-human-input');
    waitForHumanInput = true;
  }

  const messageClass = waitForHumanInput
    ? 'bg-yellow-600/20 text-yellow-600'
    : message.type === 'assistant'
      ? 'bg-base-content/20 text-base-content'
      : 'bg-primary/80 text-white';

  let avatarIcon = <RiRobot2Fill className="w-5 h-5" />;
  if (message.type === 'user') {
    avatarIcon = user?.user_metadata.avatar_url ? (
      <img
        alt="avatar"
        src={user.user_metadata.avatar_url}
        className="w-full h-full object-cover rounded-full p-0.5"
      />
    ) : (
      <RiUserVoiceLine className="w-5 h-5" />
    );
  } else if (message.sender === userNodeName) {
    avatarIcon = <RiUserVoiceFill className="w-5 h-5" />;
  }

  let messageHeader = null;
  if (waitForHumanInput) {
    messageHeader = (
      <div className="flex items-center gap-2">{t('wait-for-human-input')}</div>
    );
  } else if (message.sender) {
    messageHeader = (
      <div className="chat-header w-full flex items-end gap-2 text-sm p-1 text-base-content/80">
        <div className="flex items-center gap-1">
          {message.sender}
          {message.receiver && (
            <>
              <RiVoiceprintLine className="w-4 h-4 inline-block mx-1" />
              <span className="">{message.receiver}</span>
            </>
          )}
        </div>
        <div className="text-base-content/20 text-xs">
          {new Date(message.created_at).toLocaleString()}
        </div>
        <button
          onClick={() => onShowMessageData(message.content)}
          data-tooltip-id="default-tooltip"
          data-tooltip-content={'Show raw message data'}
        >
          <RiCodeBlock className="w-4 h-4 text-gray-200/20 hover:text-gray-200/50" />
        </button>
      </div>
    );
  }

  return (
    <div className={`chat gap-x-1 chat-start`}>
      <div className="chat-image text-base-content/50">
        <div
          className={`w-8 h-8 rounded-full text-sm ${messageClass} flex items-center justify-center`}
        >
          {avatarIcon}
        </div>
      </div>
      {messageHeader}
      <div
        className={`relative group chat-bubble rounded-md p-2 ${messageClass} break-word word-wrap overflow-x-hidden`}
        style={{ maxWidth: '100%' }}
      >
        {message.content ? (
          <Markdown>{message.content}</Markdown>
        ) : (
          <span className="text-lime-600">Empty Message</span>
        )}
        {message.type === 'user' && (
          <div className="hidden group-hover:block absolute right-1 bottom-1">
            <button
              className="btn btn-xs btn-circle"
              data-tooltip-content={t('resend')}
              data-tooltip-id="chat-tooltip"
              onClick={() => onSend(message.content)}
            >
              <RiRefreshLine className="w-4 h-4 text-gray-200/20 group-hover:text-gray-200" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const MessageList = ({ chat, messages, onSend }: any) => {
  const t = useTranslations('component.ChatPane');
  const [messageData, setMessageData] = useState('');
  return (
    <>
      {messages.length === 0 && (
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex flex-col items-center gap-2 text-sm text-base-content/20">
            <RiRobot2Line className="w-12 h-12" />
            {t('message-empty')}
          </div>
        </div>
      )}
      {messages.map((message: any) => (
        <MessageBubble
          key={message.id}
          chat={chat}
          message={message}
          onSend={onSend}
          onShowMessageData={(data: string) => setMessageData(data)}
        />
      ))}
      <PopupDialog
        title="Raw Message Data"
        show={messageData !== ''}
        onClose={() => setMessageData('')}
        className="w-full max-w-3xl"
        classNameBody="max-h-screen overflow-y-auto"
      >
        <div className="p-4 text-sm text-base-content/50">
          <pre className="whitespace-pre-wrap">
            <code>{messageData}</code>
          </pre>
        </div>
      </PopupDialog>
    </>
  );
};

export default MessageList;
