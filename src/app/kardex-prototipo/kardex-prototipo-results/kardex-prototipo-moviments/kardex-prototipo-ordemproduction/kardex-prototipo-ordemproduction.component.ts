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
  public informationProductionOrder = [{ name: 'Detalhes' , code: 'pcpBCG010', dateClose:'31/05/2024', finalValue: 'R$ 74.900,00'}];
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
        value: 16000,
        labelCost: '/Custo da Requisição',
        valueCost: 74900
      },
      {
        property: 'qtdprod',
        label: 'Por Produção',
        value: 2000,
        labelCost: "/Custo da Produção",
        valueCost: 74900
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
    { label: 'Ingredientes', data: 21.54, tooltip: 'Ingredientes', color: 'color-12'},
    { label: 'Aditivos', data: 5.61, tooltip: 'Aditivos' },
    { label: 'Leite', data: 7.23, tooltip: 'Leite' },
    { label: 'Embalagens', data: 1.2, tooltip: 'Embalagens' },
    { label: 'Mao de Obra', data: 0, tooltip: 'Mao de Obra' },
    { label: 'Outros', data: 0, tooltip: 'Outros' },

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
      { property: 'leite', label: 'Leite', type: 'number'},
      { property: 'ingredientes', label: 'Ingredientes', type: 'number' },
      { property: 'aditivos', label: 'Aditivos', type: 'number' },
      { property: 'embalagem', label: 'Embalagem', type: 'number' },
      { property: 'mod', label: 'Mão de Obra', type: 'number' },
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
      message: `${event.label} consuming ${event.data}kg per capita!`,
      ok: () => {}
    });
  }

}
