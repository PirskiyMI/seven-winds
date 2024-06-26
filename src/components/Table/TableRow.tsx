import { ChangeEvent, ClassAttributes, Fragment, KeyboardEvent, useRef, useState } from 'react';

import FileIcon from 'src/assets/icons/file.svg';
import TrashIcon from 'src/assets/icons/trash.svg';
import { fetchChangeRow, fetchCreateRow, fetchDeleteRow } from 'src/api';
import { MyField } from 'src/components/controllers/MyField';
import { NEW_ROW } from 'src/constants/newRow';
import { Row } from 'src/types/row';

import style from './Table.style.module.scss';

interface TableRowProps {
   parentId: number | null;
   level: number;
   element: Row;
   deleteRow: () => void;
   createRow?: (newRow: Row, rowId: number) => void;
}

export function TableRow({ parentId, level, element, createRow, deleteRow }: TableRowProps) {
   const paddingLeft = level * 20;

   const [isEdited, setIsEdited] = useState(!element.rowName);
   const openEditor = () => {
      setIsEdited(true);
   };
   const closeEditor = async (e: KeyboardEvent<HTMLTableRowElement>) => {
      if (e.key === 'Enter') {
         if (row.id !== 1) {
            const { child, id } = row;
            await fetchChangeRow(row.id, row);
         } else {
            const { child, id } = row;
            const newRow = {
               parentId,
               ...row,
            };
            const { current } = await fetchCreateRow(newRow);

            if (createRow) createRow({ ...current, child: [] }, row.id);
         }
         setIsEdited(false);
      }
   };

   const [row, setRow] = useState<Row>(element);
   const changeRow = (key: keyof Row) => (e: ChangeEvent<HTMLInputElement>) => {
      setRow((prev) => ({ ...prev, [key]: e.target.value }));
   };
   const addRow = () => {
      setRow((prev) => ({ ...prev, child: [...prev.child, NEW_ROW] }));
   };
   const createChild = (newRow: Row, rowId: number) => {
      setRow((prev) => ({
         ...prev,
         child: [
            ...prev.child.map((row) => {
               if (row.id !== rowId) return row;

               return newRow;
            }),
         ],
      }));
   };
   const deleteChild = (id: number) => async () => {
      await fetchDeleteRow(id);
      setRow((prev) => ({ ...prev, child: [...prev.child.filter((subRow) => subRow.id !== id)] }));
   };

   const { rowName, salary, equipmentCosts, overheads, estimatedProfit } = row;

   const childRows = (
      <>
         {row.child.length
            ? row.child.map((child) => (
                 <TableRow
                    key={child.id}
                    parentId={row.id}
                    level={level + 1}
                    element={child}
                    createRow={createChild}
                    deleteRow={deleteChild(child.id)}
                 />
              ))
            : null}
      </>
   );

   return (
      <>
         <tr onDoubleClick={openEditor} onKeyDown={closeEditor} className={style.table__row}>
            <td
               style={
                  paddingLeft ? { paddingLeft: 12 + paddingLeft + 'px' } : { paddingLeft: '12px' }
               }
               className={`${style.table__ceil} ${style.table__ceil_small}`}>
               <div className={style.table__actions}>
                  <button
                     onClick={addRow}
                     disabled={isEdited}
                     className={`${style.table__action} ${style.table__action_file}`}>
                     <FileIcon className={style.table__icon} />
                  </button>
                  <button
                     onClick={deleteRow}
                     disabled={isEdited}
                     className={`${style.table__action} ${style.table__action_trash}`}>
                     <TrashIcon className={style.table__icon} />
                  </button>
               </div>
            </td>
            <td className={`${style.table__ceil} ${style.table__ceil_large}`}>
               {isEdited ? (
                  <MyField autoFocus value={rowName} onChange={changeRow('rowName')} />
               ) : (
                  rowName
               )}
            </td>
            <td className={`${style.table__ceil} ${style.table__ceil_normal}`}>
               {isEdited ? (
                  <MyField type="number" value={salary} onChange={changeRow('salary')} />
               ) : (
                  salary
               )}
            </td>
            <td className={`${style.table__ceil} ${style.table__ceil_normal}`}>
               {isEdited ? (
                  <MyField
                     type="number"
                     value={equipmentCosts}
                     onChange={changeRow('equipmentCosts')}
                  />
               ) : (
                  equipmentCosts
               )}
            </td>
            <td className={`${style.table__ceil} ${style.table__ceil_normal}`}>
               {isEdited ? (
                  <MyField type="number" value={overheads} onChange={changeRow('overheads')} />
               ) : (
                  overheads
               )}
            </td>
            <td className={`${style.table__ceil} ${style.table__ceil_normal}`}>
               {isEdited ? (
                  <MyField
                     type="number"
                     value={estimatedProfit}
                     onChange={changeRow('estimatedProfit')}
                  />
               ) : (
                  estimatedProfit
               )}
            </td>
         </tr>
         {childRows}
      </>
   );
}
