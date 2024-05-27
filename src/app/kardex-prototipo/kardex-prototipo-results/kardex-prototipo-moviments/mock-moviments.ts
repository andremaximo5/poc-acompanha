export class MockKardexMoviment {
  items: Array<CostFilterMoviments>;
  hasNext: boolean;
  remainingRecords: number;

  constructor() {
    this.items = [
      {
        inverseorder: 12,
        order: "FIN089",
        id900b: "A8A650A0F1D31004                    ",
        id900c: "                                    ",
        configuration: "998C90FCF1D31004                    ",
        branch: "D MG 01 ",
        branchmovement: "D MG 01 ",
        warehouse: "01",
        code: " COM00000000000000000000000011",
        description: "PRODUTO PADRAO                ",
        archive: "SD2",
        type: "PA",
        unitymesure: "UN",
        group: "0001",
        posipi: "          ",
        calculationsequence: "              ",
        typingdate: "2022-3-14",
        tes: "511",
        cf: "6107 ",
        x5_desc: "VENDA PRODUCAO ESTABELECIMENTO DEST. A NAO CONTRIBUINTE",
        x5_descspa: "VENTA PROD. ESTABLECIMIENTO DEST. A NO CONTRIBUYENTE   ",
        x5_desceng: "SALE OF ESTABLIS. PRODUC. DESIGNED TO NON-TAX PAYER    ",
        sequence: "107455",
        document: "FIN000012",
        series: "004",
        quantity: 10,
        secondaryquantity: 0,
        project: "          ",
        op: "              ",
        cc: "         ",
        supplier: "000001",
        store: "01",
        nftype: "N",
        cost: 56.32,
        trt: "   ",
        batch: "          ",
        numberrecno: 16,
        locwarehouse: "01",
        averagecost: 5.632,
        totalquantity: -10,
        totalcost: -56.32,
        archiveLabel: "exitDocument"
      },
      {
        inverseorder: 13,
        order: "      ",
        id900b: "A8A650A0F1D31004                    ",
        id900c: "                                    ",
        configuration: "998C90FCF1D31004                    ",
        branch: "D MG 01 ",
        branchmovement: "D MG 01 ",
        warehouse: "01",
        code: " COM00000000000000000000000011",
        description: "PRODUTO PADRAO                ",
        archive: "SD3",
        type: "PA",
        unitymesure: "UN",
        group: "0001",
        posipi: "          ",
        calculationsequence: "              ",
        typingdate: "2021-10-12",
        tes: "999",
        cf: "RE0  ",
        x5_desc: "MANUAL DE MATERIAL DE APROPRIAÇÃO DIRETA",
        x5_descspa: "                                                       ",
        x5_desceng: "                                                       ",
        sequence: "106487",
        document: "pcpAC1014",
        series: "   ",
        quantity: 40,
        secondaryquantity: 0,
        project: "          ",
        op: "              ",
        cc: "         ",
        supplier: "      ",
        store: "  ",
        nftype: " ",
        cost: 225.26,
        trt: "   ",
        batch: "          ",
        numberrecno: 1740,
        locwarehouse: "01",
        averagecost: 5.6315,
        totalquantity: -50,
        totalcost: -281.58,
        archiveLabel: "internalMovements"
      },
      {
        inverseorder: 14,
        order: "      ",
        id900b: "A8A650A0F1D31004                    ",
        id900c: "                                    ",
        configuration: "998C90FCF1D31004                    ",
        branch: "D MG 01 ",
        branchmovement: "D MG 01 ",
        warehouse: "01",
        code: " COM00000000000000000000000011",
        description: "PRODUTO PADRAO                ",
        archive: "SD3",
        type: "PA",
        unitymesure: "UN",
        group: "0001",
        posipi: "          ",
        calculationsequence: "              ",
        typingdate: "2021-10-13",
        tes: "999",
        cf: "RE0  ",
        x5_desc: "MANUAL DE MATERIAL DE APROPRIAÇÃO DIRETA",
        x5_descspa: "                                                       ",
        x5_desceng: "                                                       ",
        sequence: "106492",
        document: "pcpAC1015",
        series: "   ",
        quantity: 40,
        secondaryquantity: 0,
        project: "          ",
        op: "              ",
        cc: "         ",
        supplier: "      ",
        store: "  ",
        nftype: " ",
        cost: 225.26,
        trt: "   ",
        batch: "          ",
        numberrecno: 1741,
        locwarehouse: "01",
        averagecost: 5.6315,
        totalquantity: -90,
        totalcost: -506.84,
        archiveLabel: "internalMovements"
      },
      {
        inverseorder: 15,
        order: "      ",
        id900b: "A8A650A0F1D31004                    ",
        id900c: "                                    ",
        configuration: "998C90FCF1D31004                    ",
        branch: "D MG 01 ",
        branchmovement: "D MG 01 ",
        warehouse: "01",
        code: " COM00000000000000000000000011",
        description: "PRODUTO PADRAO                ",
        archive: "SD3",
        type: "PA",
        unitymesure: "UN",
        group: "0001",
        posipi: "          ",
        calculationsequence: "              ",
        typingdate: "2021-11-11",
        tes: "999",
        cf: "RE0  ",
        x5_desc: "MANUAL DE MATERIAL DE APROPRIAÇÃO DIRETA",
        x5_descspa: "                                                       ",
        x5_desceng: "                                                       ",
        sequence: "106543",
        document: "pcpAC5014",
        series: "   ",
        quantity: 10,
        secondaryquantity: 0,
        project: "          ",
        op: "000129OS001   ",
        cc: "11       ",
        supplier: "      ",
        store: "  ",
        nftype: " ",
        cost: 56.32,
        trt: "   ",
        batch: "          ",
        numberrecno: 1757,
        locwarehouse: "01",
        averagecost: 5.632,
        totalquantity: -100,
        totalcost: -563.16,
        archiveLabel: "productionOrder"
      },

    ];
    this.hasNext =  true;
    this.remainingRecords =  17;
  }
}

export class CostFilterMovimentsList{
  items:CostFilterMoviments[]
  hasNext:boolean;
  remainingRecords: number;
}

export interface CostFilterMoviments{
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
}
