import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PoPageAction, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { CostFilterResults, MockKardexProduct } from './mock-results';

@Component({
  selector: 'app-kardex-prototipo-results',
  templateUrl: './kardex-prototipo-results.component.html',
})
export class KardexPrototipoResultsComponent implements OnInit {
  public columnsMoviment :any
  public mockKardexProduct = new MockKardexProduct();
  public movementTableResultIems: Array<any> = []
  public totalRecords: number = 0
  public colums = this.getColumnMovement()
  public readonly actionsPoPageList: Array<PoPageAction> = [
    { label: "Novo filtro", type: "primary", disabled: true},
    { label: "Visualizar",  disabled: true},
    { label: "Editar",      disabled: true, type: "default", icon: 'po-icon-edit' },
    { label: "Exportar",    type: "default", disabled: true, icon: 'po-icon-export' }
  ];
  actions: Array<PoTableAction> = [
    { action: this.detailsListResults.bind(this),
      icon: 'po-icon-info',
      label: "Detalhes",
     }
  ];
  constructor(public router: Router) { }

  ngOnInit() {
    this.movementTableResultIems = this.mockKardexProduct.items
  }

    getColumnMovement(): Array<PoTableColumn> {
    this.columnsMoviment = [];
    this.columnsMoviment.push(
      { property: 'branch', label: "Filial", type: 'string', width: '10%', visible: false},
      { property: 'description', label: "Descrição", type: 'string', width: '20%', visible: true },
      { property: 'code', label: "Código", type: 'string', width: '30%' },
      { property: 'warehouse', label: "Armazém", type: 'string', width: '10%' },
      { property: 'initialbalance', label: "Custo Inicial", type: 'currency' },
      { property: 'finalbalance', label: "Custo Final", type: 'currency' },
      { property: 'initialquantity', label: "Quantidade inicial", type: 'number',  },
      { property: 'finalquantity', label: "Quantidade Final", type: 'number', },
      { property: 'initialaveragecost', label: "Custo médio inicial", type: 'currency',visible: true },
      { property: 'finalaveragecost', label: "Custo médio final", type: 'currency', visible: true },
      { property: 'variation', label: "Variação do custo(%)", type: 'number' })
    return this.columnsMoviment
  }

  detailsListResults(select:any): void {
      this.router.navigate(['kardexMoviments'])
    }
}
