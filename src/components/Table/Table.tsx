import { useEffect, useState } from 'react';

import { Row } from 'src/types/row';
import { fetchDeleteRow, fetchRowList } from 'src/api';

import style from './Table.style.module.scss';
import { TableRow } from './TableRow';

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
            const newRow: Row = {
               id: 1,
               child: [],
               equipmentCosts: 0,
               estimatedProfit: 0,
               machineOperatorSalary: 0,
               mainCosts: 0,
               materials: 0,
               mimExploitation: 0,
               overheads: 0,
               rowName: '',
               salary: 0,
               supportCosts: 0,
               total: 0,
            };

            row.child.push(newRow);
            return row;
         }),
      ]);
   };

   return (
      <>
         {rowList && (
            <table className={style.table}>
               <thead className={style.table__header}>
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
