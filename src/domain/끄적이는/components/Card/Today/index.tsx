import { useState } from 'react';
import dayjs from 'dayjs';

import { type Folder } from '@api/memoFolder/types';
import { type SpellCheckResponse } from '@api/spell/types';
import Button from '@components/Button';
import TooltipButton from '@components/Button/components/TooltipButton';
import Card from '@components/Card';
import FolderDropdown from '@components/Dropdown/FolderDropdown';
import MenuDropdown from '@components/Dropdown/MenuDropdown';
import SkeletonContent from '@components/Loading/Skeleton/SkeletonContent';
import { TOAST_MESSAGE } from '@constants/toast';
import useDeleteArchive from '@domain/끄적이는/mutations/useDeleteArchive';
import useDeleteTemporalMemo from '@domain/끄적이는/mutations/useDeleteTemporalMemo';
import useEditTemporalMemo from '@domain/끄적이는/mutations/useEditTemporalMemo';
import useSaveTemporalMemo from '@domain/끄적이는/mutations/useSaveTemporalMemo';
import { type TemporalMemo } from '@domain/끄적이는/types';
import { useInput } from '@hooks/useInput';
import usePostSpellCheck from '@queries/usePostSpellCheck';
import { useToastStore } from '@stores/toast';

import EditInput from '../../EditInput';
import SpellCheckCard from '../../Today/components/SpellCheckCard';
import * as styles from './style.css';

interface WriteTodayCardProps {
  memo: TemporalMemo;
  memoFolders: Folder[];
  isEditMode: boolean;
  onEditClick: (id: number) => void;
  onEditCompleteClick: VoidFunction;
}

const WriteTodayCard = ({
  memo,
  memoFolders,
  isEditMode,
  onEditClick,
  onEditCompleteClick,
}: WriteTodayCardProps) => {
  const { showToast } = useToastStore();
  const { mutate: updateTemporalMemo } = useEditTemporalMemo();
  const { mutate: deleteTemporalMemo } = useDeleteTemporalMemo();
  const { mutate: saveTemporalMemo } = useSaveTemporalMemo();
  const { mutate: deleteArchive } = useDeleteArchive();

  const editInputProps = useInput({
    id: 'edit-today-input',
    defaultValue: memo.content,
  });

  const [spellCheckResult, setSpellCheckResult] =
    useState<SpellCheckResponse>();
  const { mutateAsync: spellCheck, isPending: isPendingSpellCheck } =
    usePostSpellCheck();

  const handleSpellCheck = async () => {
    const spellCheckResult = await spellCheck({
      sentence: memo.content,
    });

    setSpellCheckResult(spellCheckResult);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(memo.content);

    showToast({ message: TOAST_MESSAGE.CARD.COPY });
  };

  //TODO: 밸리데이션 추가
  const handleUpdate = () => {
    updateTemporalMemo({ id: memo.id, content: editInputProps.value });
    setTimeout(() => onEditCompleteClick(), 0);
  };

  const handleFolderClick = (memoFolderId: Folder['id']) => {
    saveTemporalMemo({ temporalMemoId: memo.id, memoFolderId });
  };

  const handleBookmark = () => {
    deleteArchive(memo.id);
  };

  if (isEditMode) {
    return (
      <Card color="blue" defaultIsVisibleMenu>
        <Card.Header>
          {dayjs(memo.createdAt).locale('ko').format('a h:mm')}
          <Button className={styles.editCompleteButton} onClick={handleUpdate}>
            완료
          </Button>
        </Card.Header>
        <Card.Body>
          <EditInput inputProps={editInputProps} />
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card color="blue" defaultIsVisibleMenu>
      {!spellCheckResult?.result.suggestions.length && (
        <Card.Menu>
          <TooltipButton
            icon="spelling"
            content="맞춤법 검사"
            onClick={handleSpellCheck}
            className={styles.tooltipButton}
          />
          <TooltipButton
            icon="copy"
            content="복사"
            onClick={handleCopyClick}
            className={styles.tooltipButton}
          />
          <FolderDropdown
            isArchived={memo.isArchived}
            memoFolders={memoFolders}
            onClickFolder={handleFolderClick}
            onClickBookmark={handleBookmark}
          />
          <MenuDropdown
            onEdit={() => onEditClick(memo.id)}
            onDelete={() => deleteTemporalMemo(memo.id)}
          />
        </Card.Menu>
      )}
      <Card.Header>
        {dayjs(memo.createdAt).locale('ko').format('a h:mm')}
      </Card.Header>
      <Card.Body>
        <p>{memo.content}</p>
        {isPendingSpellCheck && (
          <div className={styles.skeletonCard}>
            <SkeletonContent ratios={[16]} />
            <div className={styles.skeletonSuggestion}>
              <SkeletonContent />
            </div>
          </div>
        )}
        {spellCheckResult && (
          <SpellCheckCard
            spellCheckResult={spellCheckResult.result}
            isArchived={memo.isArchived}
            memoFolders={memoFolders}
            onClickFolder={handleFolderClick}
          />
        )}
      </Card.Body>
    </Card>
  );
};

export default WriteTodayCard;
