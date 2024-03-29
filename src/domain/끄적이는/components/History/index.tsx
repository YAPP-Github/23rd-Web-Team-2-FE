import { useState } from 'react';
import dayjs from 'dayjs';

import 'dayjs/locale/ko';

import { type Folder } from '@api/memoFolder/types';
import DayMessage from '@components/DayMessage';
import Responsive from '@components/Responsive';

import { type TemporalMemoHistory } from '../../types';
import WriteHistoryCard from '../Card/History';
import * as styles from './index.css';

interface TemporalMemoHistoryTableProps {
  data: TemporalMemoHistory[];
  memoFolders: Folder[];
}

const TemporalMemoHistoryTable = ({
  data,
  memoFolders,
}: TemporalMemoHistoryTableProps) => {
  const [editModeCardId, setEditModeCardId] = useState<number | null>(null);

  return (
    <>
      {!!data.length && (
        <article className={styles.container}>
          {data.map(({ createdAt, temporalMemos }, i) => (
            <section key={`${createdAt}-${i}`}>
              <DayMessage icon="clock">
                {dayjs(createdAt).locale('ko').format('YYYY.MM.DD (dd)')}
              </DayMessage>
              <Responsive>
                {temporalMemos.map((temporalMemo) => (
                  <WriteHistoryCard
                    key={temporalMemo.id}
                    {...temporalMemo}
                    memoFolders={memoFolders}
                    isEditMode={editModeCardId === temporalMemo.id}
                    onEditClick={() => setEditModeCardId(temporalMemo.id)}
                    onEditCompleteClick={() => setEditModeCardId(null)}
                  />
                ))}
              </Responsive>
            </section>
          ))}
        </article>
      )}
    </>
  );
};

export default TemporalMemoHistoryTable;
