import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { PoAccordionItemComponent, PoBreadcrumb, PoChartSerie, PoChartType, PoDialogService, PoModalComponent, PoTabComponent, PoTableAction, PoTableColumn, PoTabsComponent } from '@po-ui/ng-components';
import { MockKardexMoviment } from './mock-moviments';
import { Router } from '@angular/router';
import { MockCostFilterProductionOrder } from './kardex-prototipo-ordemproduction/mock-ordemproduction';
import { MockKardexMovimentParts } from './mock-moviments-parts';

@Component({
  selector: 'app-kardex-prototipo-moviments',
  templateUrl: './kardex-prototipo-moviments.component.html',
})
export class KardexPrototipoMovimentsComponent implements OnInit,  AfterContentInit {
  public getcodeProct = ''
  public getdescriptionProduct = ''
  public getdataInitial:any
  public initialCostFormated:any
  public initialQuantityFormated:any
  public initialAverageCostFormated:any
  public getdataFinal:any
  public finalCostFormated:any
  public finalQuantityFormated:any
  public finalAverageCostFormated:any
  public getyearFirst:any
  public getfinalYear:any
  public getpercentageOfVariation:any
  public inflowTotalQuantityFormated:any
  public inflowTotalBalanceFormated:any
  public outflowTotalQuantityFormated:any
  public outflowTotalBalanceFormated:any
  public quantityvariation:any
  public movimentTableItems:any
  public movimentTableItemsParts:any
  public totalRecordCount:any
  public columnsMoviment:any
  public columnsMovimentParts: any;
  public mockItens = new MockKardexMoviment()
  actions: Array<PoTableAction> = [
    { action: this.detailsListResults.bind(this),
      icon: 'po-icon-info',
      label: "Detalhes",
     }
  ];
  coffeeConsumption: Array<PoChartSerie> = [
    { label: 'Plastico', data: 9.6, tooltip: 'Plastico' },
    { label: 'Aluminio', data: 7.2, tooltip: 'Aluminio' },
    { label: 'Outras MPs', data: 6.7, tooltip: 'Outras MPs' },
    { label: 'Embalagem', data: 6.1, tooltip: 'Embalagem' },
    { label: 'Mao de Obra', data: 6.1, tooltip: 'Mao de Obra' },
    { label: 'Outros', data: 6.1, tooltip: 'Mao de Obra' },
  ];
  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Resultados', link: '/kardexResults' },
      { label: 'Movimentos' }]
  };

  public coffeConsumingChartType: PoChartType = PoChartType.Donut;
  @ViewChild(PoTabComponent, { static: true }) poTabs: PoTabComponent;
  @ViewChild(PoModalComponent,{static: true}) poModal: PoModalComponent;
  @ViewChild(PoAccordionItemComponent, { static: true }) questionOne: PoAccordionItemComponent;

  constructor(public router: Router,
              private poAlert: PoDialogService) { }

  ngOnInit() {
    this.columnsMoviment = this.getColumnMovements()
    this.columnsMovimentParts = this.getColumnMovementsParts()
    this.movimentTableItems = new MockKardexMoviment().items
    this.movimentTableItemsParts = new MockKardexMovimentParts().items
      this.poTabs.active =true ;
  }

  ngAfterContentInit() {
    this.questionOne.expand();
  }

  getTitle(): string {
    return this.getcodeProct + " - "  + this.getdescriptionProduct;
  }


  detailsListResults(select:any): void {
      this.router.navigate(['kardexOrdem'])
    }



  getColumnMovements(): Array<PoTableColumn> {
    this.columnsMoviment = [];

    this.columnsMoviment.push(
      {property: 'archiveLabel', label: 'Tipo de documento', visible: true, width: '18%', type: 'columnTemplate'},
      { property: 'cf', label: "Código Fiscal/ Movimentos internos", type: 'string',width: '8%', visible: true },
      { property: 'x5_desc', label: "Descrição do código fiscal", type: 'string', visible: true },
      { property: 'branchmovement', label: 'Filial', type: 'string', width: '10%', visible:true },
      { property: 'warehouse', label: 'Armazém', type: 'string', width: '6%', visible: true },
      { property: 'code', label: 'Código', type: 'string', width: '15%', visible: false },
      { property: 'description', label: 'Descrição', type: 'string', width: '18%', visible: false },
      { property: 'group', label: 'Grupo', type: 'string', visible: false },
      { property: 'quantity', label: 'Quantidade', type: 'number' },
      { property: 'cost', label: 'Custo', type: 'number' },
      { property: 'averagecost' , label: 'Custo medio do movimento', type: 'number' },
      { property: 'totalquantity', label: 'Quantidade total',type: 'number' },
      { property: 'totalcost', label: 'Custo total', type: 'number' },
      { property: 'typingdate', label: 'Data de digitação', type: 'date' },
      { property: 'op', label: 'Ordem de Produção', type: 'string' },
      { property: 'batch', label: 'Lote', type: 'string', visible: false },
      { property: 'locwarehouse', label: 'Loc. Arm', type: 'string' },
      { property: 'type', label: 'Tipo de produto', type: 'string' },
      { property: 'unitymesure', label: 'Unidade de Medida', type: 'string' },
      { property: 'posipi', label: 'Pos IPI', type: 'string', visible: false },
      { property: 'calculationsequence', label: 'Sequencia de cálculo', type: 'string' },
      { property: 'document', label: 'Documento', type: 'string' },
      { property: 'tes', label: 'Tipo Ent/Said', type: 'string' },
      { property: 'sequence', label: 'Sequencia', type: 'string' },
      { property: 'series', label: 'Serie', type: 'string', visible: false },
      { property: 'secondaryquantity', label: 'Quantidade 2ª', type: 'number',  visible: false },
      { property: 'project', label: 'Projeto', type: 'string'},
      { property: 'cc', label: 'centro de custo', type: 'string' },
      { property: 'supplier', label: 'Fornecedor', type: 'string' },
      { property: 'store', label: 'loja', type: 'string' },
      { property: 'nftype', label: 'Tipo de nota', type: 'string' },
      { property: 'trt', label: 'Sequencia de Estrutura', type: 'string' });

      return this.columnsMoviment;
  }


    getColumnMovementsParts(): Array<PoTableColumn> {
    this.columnsMovimentParts = [];

    this.columnsMovimentParts.push(
      {property: 'archiveLabel', label: 'Tipo de documento', visible: true, width: '18%', type: 'columnTemplate'},
      { property: 'cf', label: "Código Fiscal/ Movimentos internos", type: 'string',width: '8%', visible: false },
      { property: 'x5_desc', label: "Descrição do código fiscal", type: 'string', visible: false },
      { property: 'branchmovement', label: 'Filial', type: 'string', width: '10%', visible:false },
      { property: 'warehouse', label: 'Armazém', type: 'string', width: '6%', visible: true },
      { property: 'code', label: 'Código', type: 'string', width: '15%', visible: false },
      { property: 'description', label: 'Descrição', type: 'string', width: '18%', visible: false },
      { property: 'quantity', label: 'Quantidade', type: 'number' },
      { property: 'cost', label: 'Custo', type: 'number' },
      { property: 'plastico', label: 'Plastico', type: 'number' },
      { property: 'aluminio' , label: 'Aluminio', type: 'number' },
      { property: 'outrasPartes', label: 'Outras MPs',type: 'number' },
      { property: 'embalagem', label: 'Embalagem', type: 'number' },
      { property: 'mo', label: 'Mão de Obra', type: 'number' },
      { property: 'outras', label: 'Outras', type: 'number' },
      { property: 'batch', label: 'Outros', type: 'string', visible: false },);
      return this.columnsMovimentParts;
  }
  showMeTheDates(event: any) {
    this.poAlert.alert({
      title: 'Statistic',
      message: `${event.label} consuming ${event.data}kg per capita!`,
      ok: () => {}
    });
  }
  handleCarddChart():void{
    this.poModal.open()
  }
}
