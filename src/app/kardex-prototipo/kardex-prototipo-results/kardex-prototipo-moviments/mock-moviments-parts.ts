export class MockKardexMovimentParts {
  items: Array<CostFilterMovimentsParts>;
  hasNext: boolean;
  remainingRecords: number;

  constructor() {
    this.items = [
      {
        "inverseorder": 10,
        "order": "      ",
        "id900b": "78EE1B5CF2981004                    ",
        "id900c": "                                    ",
        "configuration": "7439DBDCF2981004                    ",
        "branch": "D MG 01 ",
        "branchmovement": "D MG 01 ",
        "warehouse": "01",
        "code": "PA01                          ",
        "description": "PRODUTO PADRAO                ",
        "archive": "SD3",
        "type": "PA",
        "unitymesure": "UN",
        "group": "    ",
        "posipi": "          ",
        "calculationsequence": "19970102003444",
        "typingdate": "2024-5-28",
        "tes": "002",
        "cf": "PR0  ",
        "x5_desc": "PRODUÇÃO",
        "x5_descspa": "                                                       ",
        "x5_desceng": "                                                       ",
        "sequence": "110008",
        "document": "pcpBCG010",
        "series": "   ",
        "quantity": 2000,
        "secondaryquantity": 0,
        "project": "          ",
        "op": "pcpBCG01001   ",
        "cc": "         ",
        "supplier": "      ",
        "store": "  ",
        "nftype": " ",
        "cost": 74900,
        "trt": "   ",
        "batch": "          ",
        "numberrecno": 2698,
        "locwarehouse": "01",
        "averagecost": 37.45,
        "totalquantity": 2000,
        "totalcost": 74900,
        "leite":14460,
        "ingredientes":46820,
        "aditivos":11220,
        "embalagem":2400,
        "mod": 0, 
        "archiveLabel": "productionOrder",
      },

    ];
    this.hasNext =  true;
    this.remainingRecords =  17;
  }
}

export class CostFilterMovimentsList{
  items:CostFilterMovimentsParts[]
  hasNext:boolean;
  remainingRecords: number;
}

export interface CostFilterMovimentsParts{
  inverseorder: number;
  order: string;
  id900b: string;
  id900c: string;
  configuration: string;
  branch: string;
  branchmovement: string;
  warehouse: string;
  code: string;
  description: string;
  archive: string;
  type: string;
  unitymesure: string;
  group: string;
  posipi: string;
  calculationsequence: string;
  typingdate: string;
  tes: string;
  cf: string;
  x5_desc: string;
  x5_descspa: string;
  x5_desceng: string;
  sequence: string;
  document: string;
  series: string;
  quantity: number;
  secondaryquantity: number;
  project: string;
  op: string;
  cc: string;
  supplier: string;
  store: string;
  nftype: string;
  cost: number;
  trt: string;
  batch: string;
  numberrecno: number;
  locwarehouse: string;
  averagecost: number;
  totalquantity: number;
  totalcost: number;
  leite:number;
  ingredientes:number;
  aditivos: number;
  embalagem:number;
  mod :number
  archiveLabel: string;

}

