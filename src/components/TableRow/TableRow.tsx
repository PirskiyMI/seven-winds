import { ChangeEvent, KeyboardEvent, useState } from 'react';

import FileIcon from 'src/assets/icons/file.svg';
import TrashIcon from 'src/assets/icons/trash.svg';
import { MyField } from 'src/components/controllers/MyField';
import { NEW_ROW } from 'src/constants/newRow';

import style from './TableRow.style.module.scss';
import { TableRowProps, Row } from './TableRow.types';
import { fetchChangeRow, fetchCreateRow, fetchDeleteRow } from './TableRow.service';

export function TableRow({ parentId, level, element, createRow, deleteRow }: TableRowProps) {
   const paddingLeft = level * 20;

   const [isEdited, setIsEdited] = useState(!element.rowName);
   const openEditor = () => {
      setIsEdited(true);
   };
   const closeEditor = async (e: KeyboardEvent<HTMLTableRowElement>) => {
      if (e.key === 'Enter') {
         if (row.id !== 1) {
            await fetchChangeRow(row);
         } else {
            const { current } = await fetchCreateRow(row, parentId);

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
   const createChild = (newRow: Row, temporaryId: number) => {
      setRow((prev) => ({
         ...prev,
         child: [...prev.child.map((row) => (row.id !== temporaryId ? row : newRow))],
      }));
   };
   const deleteChild = (id: number) => async () => {
      await fetchDeleteRow(id);
      setRow((prev) => ({ ...prev, child: [...prev.child.filter((child) => child.id !== id)] }));
   };

   const { rowName, salary, equipmentCosts, overheads, estimatedProfit } = row;

   const childRows = (
      <>
         {!!row.child.length &&
            row.child.map((child) => (
               <TableRow
                  key={child.id}
                  parentId={row.id}
                  level={level + 1}
                  element={child}
                  createRow={createChild}
                  deleteRow={deleteChild(child.id)}
               />
            ))}
      </>
   );

   return (
      <>
         <tr onDoubleClick={openEditor} onKeyDown={closeEditor} className={style.row}>
            <td
               style={
                  paddingLeft ? { paddingLeft: 12 + paddingLeft + 'px' } : { paddingLeft: '12px' }
               }
               className={`${style.row__ceil} ${style.row__ceil_small}`}>
               <div className={style.row__actions}>
                  <button
                     onClick={addRow}
                     disabled={isEdited}
                     className={`${style.row__action} ${style.row__action_file}`}>
                     <FileIcon className={style.row__icon} />
                  </button>
                  <button
                     onClick={deleteRow}
                     disabled={isEdited}
                     className={`${style.row__action} ${style.row__action_trash}`}>
                     <TrashIcon className={style.row__icon} />
                  </button>
               </div>
            </td>
            <td className={`${style.row__ceil} ${style.row__ceil_large}`}>
               {isEdited ? (
                  <MyField autoFocus value={rowName} onChange={changeRow('rowName')} />
               ) : (
                  rowName
               )}
            </td>
            <td className={`${style.row__ceil} ${style.row__ceil_normal}`}>
               {isEdited ? (
                  <MyField type="number" value={salary} onChange={changeRow('salary')} />
               ) : (
                  new Intl.NumberFormat('ru-RU').format(salary)
               )}
            </td>
            <td className={`${style.row__ceil} ${style.row__ceil_normal}`}>
               {isEdited ? (
                  <MyField
                     type="number"
                     value={equipmentCosts}
                     onChange={changeRow('equipmentCosts')}
                  />
               ) : (
                  new Intl.NumberFormat('ru-RU').format(equipmentCosts)
               )}
            </td>
            <td className={`${style.row__ceil} ${style.row__ceil_normal}`}>
               {isEdited ? (
                  <MyField type="number" value={overheads} onChange={changeRow('overheads')} />
               ) : (
                  new Intl.NumberFormat('ru-RU').format(overheads)
               )}
            </td>
            <td className={`${style.row__ceil} ${style.row__ceil_normal}`}>
               {isEdited ? (
                  <MyField
                     type="number"
                     value={estimatedProfit}
                     onChange={changeRow('estimatedProfit')}
                  />
               ) : (
                  new Intl.NumberFormat('ru-RU').format(estimatedProfit)
               )}
            </td>
         </tr>
         {childRows}
      </>
   );
}
