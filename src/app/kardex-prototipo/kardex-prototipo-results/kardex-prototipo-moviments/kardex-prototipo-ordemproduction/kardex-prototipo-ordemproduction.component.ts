import { Component, OnInit } from '@angular/core';
import { PoSlideItem, PoTableColumn } from '@po-ui/ng-components';
import { MockCostFilterProductionOrder } from './mock-ordemproduction';

@Component({
  selector: 'app-kardex-prototipo-ordemproduction',
  templateUrl: './kardex-prototipo-ordemproduction.component.html',
  styleUrls: ['./kardex-prototipo-ordemproduction.component.css']
})
export class KardexPrototipoOrdemproductionComponent implements OnInit {
  public informationProductionOrder = [{ name: 'Detalhes' , code: '', dateClose:'', finalValue: ''}];
  public columDetailsOdemProduction = this.GetColummProductionOrdem()
  public page = 1;
  public pageSize = 10;
  public totalRecords = 0;
  public productionOrderItemTable:any
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
  constructor() { }

  ngOnInit() {
    this.productionOrderItemTable= new MockCostFilterProductionOrder().mockCostFilterProductionOrderItems.items
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
  public landscapes: Array<PoSlideItem> = [
    { action: undefined, alt: undefined, image: 'undefined', link: undefined },
    { action: undefined, alt: undefined, image: 'undefined', link: undefined },
    { action: undefined, alt: undefined, image: 'undefined', link: undefined }
  ];

}
