import { PoBreadcrumb, PoLookupColumn } from '@po-ui/ng-components';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kardex-prototipo',
  templateUrl: './kardex-prototipo.component.html',
})
export class KardexPrototipoComponent implements OnInit {
  public confirmLabelWidget: string = 'Confirmar';
  public nextLabelWidget: string = 'Avançar';
  public previousLabelWidget: string = 'Voltar';
  public productType : any;
  public vertical: string= 'Vertical'
  constructor() { }

  ngOnInit() {
  }

    canActiveNextStep():boolean {
    return true;
  }
  getColumnsProduct(): Array<PoLookupColumn> {
  return [
    {label: 'Filial', property: 'filial'},
    {label: 'Descrição', property: 'descri'},
    {label: 'Código', property: 'codigo'}
  ];
}
public optionsCost = [
    { value: 1, label: "Medio" },
    { value: 2, label: "Reposição" }
  ]
  public optionsCurrency = [
    { value: 1, label: "1º Moeda" },
    { value: 2, label: "2º Moeda" },
    { value: 3, label: "3º Moeda" },
    { value: 4, label: "4º Moeda" },
    { value: 5, label: "5º Moeda" }
  ]
  public optionsSequeCalc = [
    { value: 1, label: "Sequência de digitação" },
    { value: 2, label: "Cálculo" }
  ]
  public breadcrumb: PoBreadcrumb = {
    items: [
      { label: "Acompanhamento de custo", link: '' }]
  };

}
