import { BASE_URL, E_ID } from 'src/constants/apiConstants';

import { Row } from './TableRow.types';

interface CreateRowResponse {
   changed: Row[];
   current: Omit<Row, 'child'>;
}

export async function fetchCreateRow(
   row: Row,
   parentId: number | null,
): Promise<CreateRowResponse> {
   const { id, child, ...newRow } = row;

   try {
      const res = await fetch(`${BASE_URL}/v1/outlay-rows/entity/${E_ID}/row/create`, {
         method: 'POST',
         headers: {
            'Content-type': 'application/json',
         },
         body: JSON.stringify({ ...newRow, parentId }),
      });
      return res.json();
   } catch (error) {
      throw error;
   }
}

export async function fetchChangeRow(row: Row) {
   const { id, child, ...newRow } = row;

   try {
      const res = await fetch(`${BASE_URL}//v1/outlay-rows/entity/${E_ID}/row/${id}/update`, {
         method: 'POST',
         headers: {
            'Content-type': 'application/json',
         },
         body: JSON.stringify(newRow),
      });
      return res.json();
   } catch (error) {
      throw error;
   }
}

export async function fetchDeleteRow(id: number) {
   try {
      const res = await fetch(`${BASE_URL}/v1/outlay-rows/entity/${E_ID}/row/${id}/delete`, {
         method: 'DELETE',
      });
      return res.json();
   } catch (error) {
      throw error;
   }
}
