import { Component, OnInit } from '@angular/core';
import { PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { MockKardexMoviment } from './mock-moviments';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kardex-prototipo-moviments',
  templateUrl: './kardex-prototipo-moviments.component.html',
})
export class KardexPrototipoMovimentsComponent implements OnInit {
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
  public movimentTableItems:Array<any> = []
  public totalRecordCount:any
  public columnsMoviment:any
  public mockItens = new MockKardexMoviment()
  actions: Array<PoTableAction> = [
    { action: this.detailsListResults.bind(this),
      icon: 'po-icon-info',
      label: "Detalhes",
     }
  ];
  constructor(public router: Router) { }

  ngOnInit() {
    this.columnsMoviment = this.getColumnMovements()
    this.movimentTableItems = this.mockItens.items

  }

  getTitle(): string {
    return this.getcodeProct + " - "  + this.getdescriptionProduct;
  }


  detailsListResults(select:any): void {
      this.router.navigate(['kardexMoviments'])
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
}
