import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { PoAccordionItemComponent, PoBreadcrumb, PoChartSerie, PoChartType, PoDialogService, PoSlideItem, PoTabComponent, PoTableColumn } from '@po-ui/ng-components';
import { MockCostFilterProductionOrder } from './mock-ordemproduction';
import { MockCostFilterProductionOrderParts } from './mock-odemprodutction-parts';

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
        value: 510,
        labelCost: '/Custo da Requisição',
        valueCost: 4.400
      },
      {
        property: 'qtdprod',
        label: 'Por Produção',
        value: 200,
        labelCost: "/Custo da Produção",
        valueCost: 4.400
      },
      {
        property: 'qtdelvol',
        label: 'Por devolução',
        value: 0.00,
        labelCost: "/Custo da devolução",
        valueCost: 0.00
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
    { label: 'Plastico', data: 9.6, tooltip: 'Plastico' },
    { label: 'Aluminio', data: 7.2, tooltip: 'Aluminio' },
    { label: 'Outras MPs', data: 6.7, tooltip: 'Outras MPs' },
    { label: 'Embalagem', data: 6.1, tooltip: 'Embalagem' },
    { label: 'Mao de Obra', data: 6.1, tooltip: 'Mao de Obra' },
  ];
  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Resultados', link: '/kardexResults' },
      { label: 'Movimentos', link:'/kardexMoviments' },{
        label: 'Ordem de Produção',
      }]
  };
  public coffeConsumingChartType: PoChartType = PoChartType.Donut;
  @ViewChild(PoAccordionItemComponent, { static: true }) questionOne: PoAccordionItemComponent;
  @ViewChild(PoTabComponent, { static: true }) poTabs: PoTabComponent;

  ngAfterContentInit() {
    this.questionOne.expand();
  }
  constructor(private poAlert: PoDialogService){ }

  ngOnInit() {
    this.productionOrderItemTable= new MockCostFilterProductionOrder().mockCostFilterProductionOrderItems.items
    this.productionOrderItemTablePart = new MockCostFilterProductionOrderParts().mockCostFilterProductionOrderItems.items
    this.poTabs.active =true
  }

  GetColummProductionOrdem(): Array<PoTableColumn>{
    const columnsMoviment: Array<PoTableColumn> = [];

    columnsMoviment.push(
      { property: 'cf', label: 'Tipo de movimentação', width: '15%', type: 'columnTemplate' },
      { property: 'code', label: 'Código do produto', type: 'string', width: '25%' },
      { property: 'description', label: 'Descrição', type: 'string', visible: true },
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
      { property: 'code', label: 'Código do produto', type: 'string', width: '18%' },
      { property: 'description', label: 'Descrição', type: 'string', visible: true },
      { property: 'unitymesure', label: 'Unidade de Medida', type: 'string', visible: false },
      { property: 'rawquant', label: 'Quantidade', type: 'number' },
      { property: 'rawcost', label: 'Custo', type: 'number'},
      { property: 'plastico', label: 'Plastico', type: 'number'},
      { property: 'aluminio', label: 'Aluminio', type: 'number' },
      { property: 'outrasmps', label: 'Outras MPs', type: 'number' },
      { property: 'embalagem', label: 'Embalagem', type: 'number' },
      { property: 'mo', label: 'Mão de Obra', type: 'number' },
      { property: 'standardcosttotal', label: 'Part06', type: 'number',  visible: false},
      { property: 'standardcosttotal2', label: 'Outros', type: 'number',   visible: false })
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
      message: `${event.label} consuming ${event.data}`,
      ok: () => {}
    });
  }

}
