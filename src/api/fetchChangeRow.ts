import { BASE_URL, E_ID } from 'src/constants/apiConstants';

interface Body {
   equipmentCosts: number;
   estimatedProfit: number;
   machineOperatorSalary: number;
   mainCosts: number;
   materials: number;
   mimExploitation: number;
   overheads: number;
   salary: number;
   supportCosts: number;
   rowName: string;
}

export const fetchChangeRow = async (id: number, body: Body) => {
   try {
      const res = await fetch(`${BASE_URL}//v1/outlay-rows/entity/${E_ID}/row/${id}/update`, {
         method: 'POST',
         headers: {
            'Content-type': 'application/json',
         },
         body: JSON.stringify(body),
      });
      return res.json();
   } catch (error) {
      throw error;
   }
};
