import { BASE_URL, E_ID } from 'src/constants/apiConstants';

export const fetchDeleteRow = async (id: number) => {
   try {
      const res = await fetch(`${BASE_URL}/v1/outlay-rows/entity/${E_ID}/row/${id}/delete`, {
         method: 'DELETE',
      });
      return res.json();
   } catch (error) {
      throw error;
   }
};
