import { BASE_URL, E_ID } from 'src/constants/apiConstants';
import { Row } from 'src/components/TableRow';

export async function fetchRowList(): Promise<Row[]> {
   try {
      const res = await fetch(`${BASE_URL}/v1/outlay-rows/entity/${E_ID}/row/list`, {
         method: 'GET',
      });
      return await res.json();
   } catch (error) {
      throw error;
   }
}
