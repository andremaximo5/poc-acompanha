
export class MockCostFilterProductionOrder {
  mockCostFilterProductionOrderItems: CosfilterProductOrderList = {
    items: [
      {
        inverseorder: 7,
        order: 1,
        branch: 'D MG 01',
        id: 'AF087220F0D91004',
        configuration: 'AECBA8CCF0D91004',
        costcenter: '',
        productionorder: 'pcpB0001001',
        cf: 'RE0',
        code: 'PRODMPCUSTO',
        description: 'PRODMPCUSTO',
        rawquant: 500,
        quant: 500,
        unitymesure: 'UN',
        averagecost: 0,
        rawcost: 0.31,
        cost: 0.31,
        document: 'pcpB00012',
        date: '2023-7-19',
        standardcost: 0,
        standardcosttotal: 0,
        ismod: 'N'
      },
      {
        inverseorder: 6,
        order: 2,
        branch: 'D MG 01',
        id: 'AF087220F0D91004',
        configuration: 'AECBA8CCF0D91004',
        costcenter: '',
        productionorder: 'pcpB0001001',
        cf: 'RE0',
        code: 'PRODMPCUSTO',
        description: 'PRODMPCUSTO',
        rawquant: 200,
        quant: 200,
        unitymesure: 'UN',
        averagecost: 0,
        rawcost: 0.13,
        cost: 0.13,
        document: 'pcpB00013',
        date: '2023-10-24',
        standardcost: 0,
        standardcosttotal: 0,
        ismod: 'N'
      }
    ],
    hasNext: false,
    remainingRecords: 0
}
}

export interface CosfilterProductOrderList {
  items: CosfilterProductOrder[];
  hasNext: boolean;
  remainingRecords: number;
}

export interface CosfilterProductOrder{

  inverseorder: number,
  order: number,
  branch: string,
  id: string,
  configuration: string,
  costcenter:string,
  productionorder:string,
  cf: string,
  code: string,
  description:string,
  rawquant: number,
  quant: number
  unitymesure:string,
  averagecost:number
  rawcost:number
  cost:number
  document:string,
  date:string,
  standardcost:number,
  standardcosttotal: number,
  ismod:string,
}
