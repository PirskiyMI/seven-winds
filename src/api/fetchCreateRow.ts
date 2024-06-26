import { BASE_URL, E_ID } from 'src/constants/apiConstants';
import { Row } from 'src/types/row';

export interface NewRow {
   equipmentCosts: number;
   estimatedProfit: number;
   machineOperatorSalary: number;
   mainCosts: number;
   materials: number;
   mimExploitation: number;
   overheads: number;
   parentId: number | null;
   rowName: string;
   salary: number;
   supportCosts: number;
}

interface Response {
   changed: Row[];
   current: Omit<Row, 'child'>;
}

export const fetchCreateRow = async (newRow: NewRow): Promise<Response> => {
   try {
      const res = await fetch(`${BASE_URL}/v1/outlay-rows/entity/${E_ID}/row/create`, {
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
};
