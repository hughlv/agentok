'use client';
import { useTranslations } from 'next-intl';
import { BsInboxes } from 'react-icons/bs';
import { useChats, useProjects } from '@/hooks';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Markdown from '@/components/Markdown';
import { RiShare2Line, RiEdit2Line, RiWechat2Line } from 'react-icons/ri';
import ProjectPublish from './ProjectPublish';
import { useState } from 'react';

export const ProjectLoading = () => {
  return (
    <div className="flex w-full flex-wrap justify-center gap-4">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="card w-80 h-48 flex flex-col overflow-hidden gap-2 bg-base-content/10 border border-base-content/10"
        >
          <div className="card-body p-4 gap-2">
            <div className="skeleton h-8 w-full" />
            <div className="flex flex-col gap-2 h-full">
              <div className="skeleton h-4 w-1/2" />
              <div className="skeleton h-3 w-full" />
              <div className="skeleton h-4 w-1/2" />
            </div>
            <div className="flex items-center justify-end gap-1 text-xs text-base-content/60">
              <div className="skeleton h-5 w-20 p-2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const ProjectBlock = ({ project, className }: any) => {
  const t = useTranslations('component.ProjectList');
  const { createChat, isCreating } = useChats();
  const [showPublishDialog, setShowPublishDialog] = useState(false);
  const router = useRouter();

  const onChat = async (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    await createChat(project.id, 'project')
      .then((chat) => {
        if (chat) {
          router.push(`/chat?id=${chat.id}`);
        }
      })
      .catch((e) => {
        console.log(e);
        toast.error(`Failed to create chat: ${e}`);
      });
  };
  return (
    <div
      className={clsx(
        'group card w-80 bg-base-content/10 border border-base-content/10',
        className,
        'hover:shadow-box hover:border-primary/40'
      )}
    >
      <div className="card-body p-4 gap-2 font-normal">
        <h2 className="card-title  group-hover:text-primary line-clamp-1">
          {project.name}
        </h2>
        <div className="text-xs text-base-content/40">
          {new Date(project.created_at).toLocaleString()}
        </div>
        <Markdown className="text-left text-sm h-20 break-word word-wrap line-clamp-4">
          {project.description}
        </Markdown>
        <div className="relative card-actions flex justify-between gap-1 text-xs text-base-content/60">
          <button
            className="btn btn-xs rounded btn-ghost group-hover:bg-primary group-hover:text-primary-content gap-1 group-hover:animate-pulse"
            onClick={onChat}
            data-tooltip-id="default-tooltip"
            data-tooltip-content={t('start-chat-tooltip')}
          >
            <RiWechat2Line
              className={clsx('w-4 h-4', {
                'animate-spin': isCreating,
              })}
            />
            {t('start-chat')}
          </button>
          <div className="flex items-center gap-2">
            <button
              className="btn btn-xs rounded btn-ghost gap-1"
              onClick={() => setShowPublishDialog((v) => !v)}
              data-tooltip-id="default-tooltip"
              data-tooltip-content={t('publish-project-tooltip')}
            >
              <RiShare2Line className={clsx('w-4 h-4')} />
              {t('publish-project')}
            </button>
            <Link
              href={`/projects/${project.id}/flow`}
              className="btn btn-xs rounded btn-ghost gap-1"
              data-tooltip-id="default-tooltip"
              data-tooltip-content={t('edit-project-tooltip')}
            >
              <RiEdit2Line className="w-4 h-4" />
              {t('edit-project')}
            </Link>
          </div>
        </div>
      </div>
      {showPublishDialog && (
        <ProjectPublish
          show={showPublishDialog}
          projectId={project.id}
          onClose={() => setShowPublishDialog(false)}
        />
      )}
    </div>
  );
};

const ProjectList = ({ maxCount }: any) => {
  const { projects, isLoading, isError } = useProjects();
  const t = useTranslations('component.TemplateList');

  if (isError) {
    console.warn('Failed to load template');
  }
  if (isLoading) return <ProjectLoading />;
  if (!projects || projects.length === 0) return null;

  return (
    <div className="flex flex-wrap justify-center gap-4 p-2">
      {projects.map((project: any, index: number) => (
        <ProjectBlock key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectList;
