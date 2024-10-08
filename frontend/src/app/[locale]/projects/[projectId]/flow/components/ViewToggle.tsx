import { useTranslations } from 'next-intl';
import {
  RiArrowGoBackLine,
  RiBracesLine,
  RiCodeSSlashLine,
} from 'react-icons/ri';

type modeType = 'main' | 'flow' | 'json' | 'python';

const ViewToggle = ({
  mode,
  flat,
  setMode,
}: {
  mode: modeType;
  flat?: boolean; // show as flat button for controls in reactflow
  setMode: (mode: modeType) => void;
}) => {
  const t = useTranslations('component.ViewToggle');
  const ModeIcon =
    mode === 'flow'
      ? RiArrowGoBackLine
      : mode === 'json'
        ? RiBracesLine
        : RiCodeSSlashLine;
  const tip =
    mode === 'flow'
      ? t('back-to-editor')
      : mode === 'json'
        ? 'Show in Json'
        : 'Generate Python Code';
  const className = flat
    ? 'flex items-center justify-center w-5 h-5 rounded-sm cursor-pointer'
    : 'btn btn-circle btn-ghost btn-sm';

  return (
    <div
      className={className}
      onClick={() => setMode(mode)}
      data-tooltip-id="default-tooltip"
      data-tooltip-content={tip}
    >
      <ModeIcon className="shrink-0 w-4 h-4" />
    </div>
  );
};

export default ViewToggle;
