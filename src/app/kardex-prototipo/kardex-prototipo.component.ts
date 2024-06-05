import { PoBreadcrumb, PoLookupColumn, PoLookupFilter, PoMultiselectOption } from '@po-ui/ng-components';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kardex-prototipo',
  templateUrl: './kardex-prototipo.component.html',
})
export class KardexPrototipoComponent implements OnInit {
  public confirmLabelWidget: string = 'Confirmar';
  public nextLabelWidget: string = 'Avançar';
  public previousLabelWidget: string = 'Voltar';
  public productType: Array<PoMultiselectOption> = [
    { value: 'AI', label: 'AI - ATIVO IMOBILIZADO'},
    { value: 'BN', label: 'BN - BENEFICIAMENTO'},
    { value: 'EM', label: 'EM - EMBALAGEM'},
    { value: 'GE', label: 'GE - GARANTIA ESTENDIDA'},
    { value: 'GG', label: 'GG - GASTOS GERAIS'},
    { value: 'GN', label: 'GN - GENERICO'},
    { value: 'IA', label: 'IA - INSUMO AGRICOLA'},
    { value: 'II', label: 'II - INSUMO INDUSTRIAIS'},
    { value: 'IN', label: 'IN - PRODUTOS INDUSTRIAIS'},
    { value: 'KT', label: 'KT - KIT'},
    { value: 'MC', label: 'MC - MATERIAL DE CONSUMO'},
    { value: 'ME', label: 'ME - MERCADORIA'},
    { value: 'MM', label: 'MM - MATERIAIS MANFRO'},
    { value: 'MO', label: 'MO - MAO DE OBRA'},
    { value: 'MP', label: 'MP - MATERIA PRIMA'},
    { value: 'OI', label: 'OI - OUTROS INSUMOS'},
    { value: 'PA', label: 'PA - PRODUTO ACABADO'},
    { value: 'PI', label: 'PI - PRODUTO INTERMEDIARIO'},
    { value: 'PP', label: 'PP - PRODUTO EM PROCESSO'},
    { value: 'PV', label: 'PV - PRODUTO VEICULO'},
    { value: 'SF', label: 'SF - SERVICOS FINANCEIROS'},
    { value: 'SL', label: 'SL - SELO DE CONTROLE'},
    { value: 'SM', label: 'SM - SEMENTES'},
    { value: 'SP', label: 'SP - SUBPRODUTO'},
    { value: 'SV', label: 'SV - SERVICO'},
  ];
  public vertical: string= 'Vertical'
  public branches: Array<PoMultiselectOption> = [
    { value: 'dmg01', label: 'D MG 01 - Filial BELO HOR' }
  ];
  public products: Array<PoMultiselectOption> = [
    { value: 'M0003', label: 'M0003 - PRATO 0,5 (ELAB)' },
    { value: '00139', label: '00139 - SORO L. RESFRIADO' },
    { value: '50002', label: '50002 - CORANTE URUCUM  ' },
    { value: '50005', label: '50005 - SAL REFINADO' },
    { value: '54157', label: '54157 - COAGULANTE' },
    { value: '54215', label: '54215 - FERM.DVS 736/742' },
    { value: '59749', label: '59749 - CLORETO DE CALCIO' },
    { value: 'L0003', label: 'L0003 - LEITE PAD PRA 0,5' },
    { value: '50802', label: '50802 - CHAPA.PAPELAO ONDU' }
  ];
  public productGroup: Array<PoMultiselectOption> = [
    { value: '0001', label: '0001 - Plastico' },
    { value: '0002', label: '0002 - Borracha' },
    { value: '0003', label: '0003 - Aluminio' },
    { value: '0004', label: '0004 - Eletronicos' },
    { value: '0005', label: '0005 - Pneumaticos' },
    { value: '0006', label: '0006 - Produtos Quimicos' }
  ];
  public warehouses: Array<PoMultiselectOption> = [
    { value: '01', label: '01 - Armazém 01' },
  ];


  constructor(
    public router: Router
  ) { }

  ngOnInit() { }

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

  onConfirmStep(stepper:any) {
      this.router.navigate(['kardexResults'])
  }

}
