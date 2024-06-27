import { useEffect, useState } from 'react';

import { TableRow, Row, fetchDeleteRow } from 'src/components/TableRow';
import { NEW_ROW } from 'src/constants/newRow';

import style from './Table.style.module.scss';
import { fetchRowList } from './Table.service';

export function Table() {
   const [rowList, setRowList] = useState<Row[]>([]);

   useEffect(() => {
      const fetchData = async () => {
         const res = await fetchRowList();
         setRowList(res);
      };
      fetchData();
   }, []);

   const deleteRow = (id: number) => async () => {
      await fetchDeleteRow(id);
      setRowList((prev) => [...prev.filter((row) => row.id !== id)]);
   };
   const createRow = (id: number) => () => {
      setRowList((prev) => [
         ...prev.map((row) => {
            if (row.id !== id) return row;
            row.child.push(NEW_ROW);
            return row;
         }),
      ]);
   };

   return (
      <>
         {rowList && (
            <table className={style.table}>
               <thead>
                  <tr>
                     <td className={`${style.table__ceil} ${style.table__ceil_small}`}>Уровень</td>
                     <td className={`${style.table__ceil} ${style.table__ceil_large}`}>
                        Наименование работы
                     </td>
                     <td className={`${style.table__ceil} ${style.table__ceil_normal}`}>
                        Основная з/п
                     </td>
                     <td className={`${style.table__ceil} ${style.table__ceil_normal}`}>
                        Оборудование
                     </td>
                     <td className={`${style.table__ceil} ${style.table__ceil_normal}`}>
                        Накладные расходы
                     </td>
                     <td className={`${style.table__ceil} ${style.table__ceil_normal}`}>
                        Сметная прибыль
                     </td>
                  </tr>
               </thead>
               <tbody className={style.table__body}>
                  {rowList.map((row) => (
                     <TableRow
                        key={row.id}
                        parentId={null}
                        level={0}
                        element={row}
                        createRow={createRow(row.id)}
                        deleteRow={deleteRow(row.id)}
                     />
                  ))}
               </tbody>
            </table>
         )}
      </>
   );
}
