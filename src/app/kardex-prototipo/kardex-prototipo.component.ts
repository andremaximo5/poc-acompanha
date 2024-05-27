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
    { value: 'dmg01', label: 'D MG 01 - Filial BELO HOR' },
    { value: 'dmg02', label: 'D MG 02 - Filial UBERABA' },
    { value: 'drj01', label: 'D RJ 01 - Filial RIO DE J' },
    { value: 'drj02', label: 'D RJ 02 - Filial NITEROI' }
  ];
  public products: Array<PoMultiselectOption> = [
    { value: 'COM00000000000000000000000011', label: 'COM00000000000000000000000011 - PRODUTO PADRAO' },
    { value: 'COM000000000006', label: 'COM000000000006 - REQUEIJAO CREMOSO LIGHT 175 G' },
    { value: 'COM0000MAT103CT030', label: 'COM0000MAT103CT030 - PROD COM0000MAT103CT030' },
    { value: 'FAT00000000000000000000000090', label: 'FAT00000000000000000000000090 - PRODUTO FATURAM - LOTE / END' },
    { value: 'GCTCNTA300CT211BLQ', label: 'GCTCNTA300CT211BLQ - PRODUTO PADRAO' },
    { value: '000000000000000000000000000010', label: '000000000000000000000000000010 - PRODUTO WMS' },
    { value: '000000000000000000000000000061', label: '000000000000000000000000000061 - PRODUTO KIT TEC' },
    { value: '000000000000000000000000001LOC', label: '000000000000000000000000001LOC - SIGALOC' },
    { value: '000000000000000000000000001PMS', label: '000000000000000000000000001PMS - PRODUTO PMS 001' },
    { value: '000000000000000000000000002KIT', label: '000000000000000000000000002KIT - KIT 99 ITENS SIGATEC' },
    { value: '000000000000000000000000002LOC', label: '000000000000000000000000002LOC - SIGALOC 2' },
  ];
  public productGroup: Array<PoMultiselectOption> = [
    { value: '0001', label: '0001 - Plastico' },
    { value: '0002', label: '0002 - Borracha' },
    { value: '0003', label: '0003 - Aluminio' },
    { value: '0004', label: '0004 - Eletronicos' },
    { value: '0005', label: '0005 - Pneumaticos' },
    { value: '0006', label: '0006 - Produtos Quimicos' },
    { value: '0007', label: '0007 - Produto de Venda' },
    { value: '0008', label: '0008 - SIGATUR' },
    { value: '0009', label: '0009 - GRUPOSIGALOC' },
    { value: '0010', label: '0010 - GRUPO TESTE SQA' }
  ];
  public warehouses: Array<PoMultiselectOption> = [
    { value: '01', label: '01 - Armazém 01' },
    { value: '02', label: '02 - Armazém 02' },
    { value: '03', label: '03 - Armazém 03' },
    { value: '04', label: '04 - Armazém 04' },
    { value: '05', label: '05 - Armazém 05' },
    { value: '06', label: '06 - Armazém 06' },
    { value: '07', label: '07 - Armazém 07' },
    { value: '08', label: '08 - Armazém 08' },
    { value: '09', label: '09 - Armazém 09' },
    { value: '10', label: '10 - Armazém 10' }
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
