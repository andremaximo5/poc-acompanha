import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { PoAccordionItemComponent, PoChartSerie, PoChartType, PoDialogService, PoSlideItem, PoTabComponent, PoTableColumn } from '@po-ui/ng-components';
import { MockCostFilterProductionOrder } from './mock-ordemproduction';

@Component({
  selector: 'app-kardex-prototipo-ordemproduction',
  templateUrl: './kardex-prototipo-ordemproduction.component.html',
  styleUrls: ['./kardex-prototipo-ordemproduction.component.css']
})
export class KardexPrototipoOrdemproductionComponent implements OnInit, AfterContentInit  {
  public informationProductionOrder = [{ name: 'Detalhes' , code: '', dateClose:'', finalValue: ''}];
  public columDetailsOdemProduction = this.GetColummProductionOrdem()
  public columnsMovimentPart = this.GetColummProductionOrdemPart()
  public page = 1;
  public pageSize = 10;
  public totalRecords = 0;
  public productionOrderItemTable:any
  public productionOrderItemTablePart:any
  public itensForSlide = [
    [
      {
        property: 'qtdREq',
        label: 'Por Requisição',
        value: 0,
        labelCost: '/Custo da Requisição',
        valueCost: 0.00
      },
      {
        property: 'qtdprod',
        label: 'Por Produção',
        value: 0.01,
        labelCost: "/Custo da Produção",
        valueCost: 0.10
      },
      {
        property: 'qtdelvol',
        label: 'Por devolução',
        value: 1.00,
        labelCost: "/Custo da devolução",
        valueCost: 0.10
      }
    ],
    [
      {
        property: 'qdtreqp3',
        label: "Requisição poder de terceiro",
        value: 0,
        labelCost: "/Custo requisição poder de terceiro",
        valueCost: 0.00
      },

      {
        property: 'qtddevp3',
        label: "Devolução poder de terceiros",
        value: 0,
        labelCost: "Devolução poder de terceiros",
        valueCost: 0.00
      },

      {
        property: 'qtdtotremo',
        label: "Total mão de obra",
        value:0,
        labelCost: "/Custo requisição de mão de obra",
        valueCost: 0.00
      }
    ],
    [{
      property: 'custotdvmo',
      label: "Devolução de mão de obra",
      value: 0,
      labelCost: "/Custo devolução de mão de obra",
      valueCost: 0.00
    }]
  ]
  coffeeConsumption: Array<PoChartSerie> = [
    { label: 'Finland', data: 9.6, tooltip: 'Finland (Europe)' },
    { label: 'Norway', data: 7.2, tooltip: 'Norway (Europe)' },
    { label: 'Netherlands', data: 6.7, tooltip: 'Netherlands (Europe)' },
    { label: 'Slovenia', data: 6.1, tooltip: 'Slovenia (Europe)' },
    { label: 'Austria', data: 5.5, tooltip: 'Austria (Europe)' }
  ];
  public coffeConsumingChartType: PoChartType = PoChartType.Donut;
  @ViewChild(PoAccordionItemComponent, { static: true }) questionOne: PoAccordionItemComponent;
  @ViewChild(PoTabComponent, { static: true }) poTabs: PoTabComponent;

  ngAfterContentInit() {
    this.questionOne.expand();
  }
  constructor(private poAlert: PoDialogService){ }

  ngOnInit() {
    this.productionOrderItemTable= new MockCostFilterProductionOrder().mockCostFilterProductionOrderItems.items
    this.productionOrderItemTablePart = new MockCostFilterProductionOrder().mockCostFilterProductionOrderItems.items
    this.poTabs.active =true
  }

  GetColummProductionOrdem(): Array<PoTableColumn>{
    const columnsMoviment: Array<PoTableColumn> = [];

    columnsMoviment.push(
      { property: 'cf', label: 'Tipo de movimentação', width: '15%', type: 'columnTemplate' },
      { property: 'code', label: 'Código do produto', type: 'string', width: '25%' },
      { property: 'description', label: 'Descrição', type: 'string', visible: false },
      { property: 'unitymesure', label: 'Unidade de Medida', type: 'string', visible: false },
      { property: 'rawquant', label: 'Quantidade', type: 'number' },
      { property: 'rawcost', label: 'Custo', type: 'number'},
      { property: 'averagecost', label: 'Custo unitário', type: 'number' },
      { property: 'date', label: 'Data de emissão', type: 'date', visible: false },
      { property: 'document', label: 'Documento', type: 'string' },
      { property: 'standardcost', label: 'Custo standard', type: 'number', visible: false },
      { property: 'standardcosttotal', label: 'Custo standard unitário', type: 'number', visible: false })
    return columnsMoviment;
  }

    GetColummProductionOrdemPart(): Array<PoTableColumn>{
    const columnsMovimentPart: Array<PoTableColumn> = [];

    columnsMovimentPart.push(
      { property: 'cf', label: 'Tipo de movimentação', width: '15%', type: 'columnTemplate' },
      { property: 'code', label: 'Código do produto', type: 'string', width: '25%' },
      { property: 'description', label: 'Descrição', type: 'string', visible: false },
      { property: 'unitymesure', label: 'Unidade de Medida', type: 'string', visible: false },
      { property: 'rawquant', label: 'Quantidade', type: 'number' },
      { property: 'rawcost', label: 'Part01', type: 'number'},
      { property: 'averagecost', label: 'Part02', type: 'number' },
      { property: 'date', label: 'Part03', type: 'date' },
      { property: 'document', label: 'Part04', type: 'string' },
      { property: 'standardcost', label: 'Part05', type: 'number' },
      { property: 'standardcosttotal', label: 'Part06', type: 'number' },
      { property: 'standardcosttotal2', label: 'Outros', type: 'number' })
    return columnsMovimentPart;
  }
  public landscapes: Array<PoSlideItem> = [
    { action: undefined, alt: undefined, image: 'undefined', link: undefined },
    { action: undefined, alt: undefined, image: 'undefined', link: undefined },
    { action: undefined, alt: undefined, image: 'undefined', link: undefined }
  ];
   showMeTheDates(event: any) {
    this.poAlert.alert({
      title: 'Statistic',
      message: `${event.label} consuming ${event.data}kg per capita!`,
      ok: () => {}
    });
  }

}
