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
        "quantity": 200,
        "secondaryquantity": 0,
        "project": "          ",
        "op": "pcpBCG01001   ",
        "cc": "         ",
        "supplier": "      ",
        "store": "  ",
        "nftype": " ",
        "cost": 4400,
        "trt": "   ",
        "batch": "          ",
        "numberrecno": 2698,
        "locwarehouse": "01",
        "averagecost": 22,
        "totalquantity": 200,
        "totalcost": 4400,
        "archiveLabel": "productionOrder",
        "plastico":0,
        "aluminio":0,
        "outraspartes":0,
        "embalagem":0,
        "mo": 0
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
  archiveLabel: string;
  plastico:number;
  aluminio: number;
  outraspartes:number;
  embalagem:number;
  mo:number


}

