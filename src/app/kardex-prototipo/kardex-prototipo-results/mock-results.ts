export class MockKardexProduct {
  items: Array<CostFilterResults>;
  hasNext: boolean;
  remainingRecords: number;
  constructor(){

    this.items = [
      {
            "inverseorder": 6,
            "order": 1,
            "configuration": "7439DBDCF2981004                    ",
            "id900a": "743AE9C8F2981004                    ",
            "id900b": "                                    ",
            "branch": "D MG 01 ",
            "warehouse": "01",
            "code": "EM01                          ",
            "description": "PRODUTO PADRAO                ",
            "nothasmov": 0,
            "initialbalance": 0,
            "finalbalance": 800,
            "initialquantity": 0,
            "finalquantity": 800,
            "variation": 100,
            "initialaveragecost": 0,
            "finalaveragecost": 1,
            "inflowtotalquantity": 0,
            "inflowtotalbalance": 0,
            "outflowtotalquantity": 0,
            "outflowtotalbalance": 0,
            "quantityvariation": 100
        },
        {
            "inverseorder": 5,
            "order": 2,
            "configuration": "7439DBDCF2981004                    ",
            "id900a": "743AE9C8F2981004                    ",
            "id900b": "                                    ",
            "branch": "D MG 01 ",
            "warehouse": "01",
            "code": "MO01                          ",
            "description": "PRODUTO PADRAO                ",
            "nothasmov": 0,
            "initialbalance": 2000,
            "finalbalance": 1900,
            "initialquantity": 1000,
            "finalquantity": 950,
            "variation": 0,
            "initialaveragecost": 2,
            "finalaveragecost": 2,
            "inflowtotalquantity": 0,
            "inflowtotalbalance": 0,
            "outflowtotalquantity": 0,
            "outflowtotalbalance": 0,
            "quantityvariation": 5
        },
        {
            "inverseorder": 4,
            "order": 3,
            "configuration": "7439DBDCF2981004                    ",
            "id900a": "743AE9C8F2981004                    ",
            "id900b": "                                    ",
            "branch": "D MG 01 ",
            "warehouse": "01",
            "code": "MP01                          ",
            "description": "PRODUTO PADRAO                ",
            "nothasmov": 0,
            "initialbalance": 0,
            "finalbalance": 0,
            "initialquantity": 0,
            "finalquantity": 0,
            "variation": 0,
            "initialaveragecost": 0,
            "finalaveragecost": 0,
            "inflowtotalquantity": 0,
            "inflowtotalbalance": 0,
            "outflowtotalquantity": 0,
            "outflowtotalbalance": 0,
            "quantityvariation": 0
        },
        {
            "inverseorder": 3,
            "order": 4,
            "configuration": "7439DBDCF2981004                    ",
            "id900a": "743AE9C8F2981004                    ",
            "id900b": "                                    ",
            "branch": "D MG 01 ",
            "warehouse": "01",
            "code": "MP02                          ",
            "description": "PRODUTO PADRAO                ",
            "nothasmov": 0,
            "initialbalance": 0,
            "finalbalance": 1200,
            "initialquantity": 0,
            "finalquantity": 80,
            "variation": 100,
            "initialaveragecost": 0,
            "finalaveragecost": 15,
            "inflowtotalquantity": 0,
            "inflowtotalbalance": 0,
            "outflowtotalquantity": 0,
            "outflowtotalbalance": 0,
            "quantityvariation": 100
        },
        {
            "inverseorder": 2,
            "order": 5,
            "configuration": "7439DBDCF2981004                    ",
            "id900a": "743AE9C8F2981004                    ",
            "id900b": "                                    ",
            "branch": "D MG 01 ",
            "warehouse": "01",
            "code": "MP03                          ",
            "description": "PRODUTO PADRAO                ",
            "nothasmov": 0,
            "initialbalance": 0,
            "finalbalance": -800,
            "initialquantity": 0,
            "finalquantity": -40,
            "variation": 100,
            "initialaveragecost": 0,
            "finalaveragecost": 20,
            "inflowtotalquantity": 0,
            "inflowtotalbalance": 0,
            "outflowtotalquantity": 0,
            "outflowtotalbalance": 0,
            "quantityvariation": 100
        },
        {
            "inverseorder": 1,
            "order": 6,
            "configuration": "7439DBDCF2981004                    ",
            "id900a": "743AE9C8F2981004                    ",
            "id900b": "                                    ",
            "branch": "D MG 01 ",
            "warehouse": "01",
            "code": "PA01                          ",
            "description": "PRODUTO PADRAO                ",
            "nothasmov": 0,
            "initialbalance": 0,
            "finalbalance": 4400,
            "initialquantity": 0,
            "finalquantity": 200,
            "variation": 100,
            "initialaveragecost": 0,
            "finalaveragecost": 22,
            "inflowtotalquantity": 0,
            "inflowtotalbalance": 0,
            "outflowtotalquantity": 0,
            "outflowtotalbalance": 0,
            "quantityvariation": 100
        }

      ];
      this.hasNext = false;
      this.remainingRecords = 0;
    }
}

export interface CostfilterResultsList {
  items: CostFilterResults[];
  hasNext: boolean;
  remainingRecords:number;
}

export interface CostFilterResults {
   inverseorder: number;
   order: number;
   configuration: string;
   id900a:  string;
   id900b: string;
   branch:  string;
   warehouse:  string;
   code:  string;
   description:  string;
   nothasmov: number;
   initialbalance: number;
   finalbalance: number;
   initialquantity: number;
   inflowtotalquantity: number;
   inflowtotalbalance: number;
   outflowtotalquantity: number;
   outflowtotalbalance: number;
   finalquantity: number;
   variation: number;
   quantityvariation: number;
   initialaveragecost: number;
   finalaveragecost: number;
}
