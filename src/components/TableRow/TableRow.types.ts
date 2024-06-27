export interface TableRowProps {
   parentId: number | null;
   level: number;
   element: Row;
   deleteRow: () => void;
   createRow?: (newRow: Row, temporaryId: number) => void;
}

export interface Row {
   child: Row[];
   id: number;
   rowName: string;
   equipmentCosts: number;
   estimatedProfit: number;
   machineOperatorSalary: number;
   mainCosts: number;
   materials: number;
   mimExploitation: number;
   overheads: number;
   salary: number;
   supportCosts: number;
   total: number;
}
