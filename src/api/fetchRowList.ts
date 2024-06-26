import { Row } from 'src/types/row';
import { BASE_URL, E_ID } from 'src/constants/apiConstants';

export const fetchRowList = async (): Promise<Row[]> => {
   try {
      const res = await fetch(`${BASE_URL}/v1/outlay-rows/entity/${E_ID}/row/list`, {
         method: 'GET',
      });
      return await res.json();
   } catch (error) {
      throw error;
   }
};
