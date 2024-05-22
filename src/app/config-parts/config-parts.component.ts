import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoButtonGroupItem, PoInputComponent, PoModalAction, PoModalComponent, PoSelectComponent, PoStepperComponent, PoTableAction, PoTextareaComponent } from '@po-ui/ng-components';

@Component({
  selector: 'app-config-parts',
  templateUrl: './config-parts.component.html',
})


export class ConfigPartsComponent implements OnInit {

  @ViewChild('poModal', { static: true }) poModalComponent: PoModalComponent;
  @ViewChild('poLookup', { static: true }) poLookupComponent: PoSelectComponent;
  @ViewChild('poSelect', { static: true }) poSelectComponent: PoSelectComponent;
  @ViewChild('poInput', { static: true }) poInputComponent: PoInputComponent;
  @ViewChild('poTextArea', { static: true }) poTextAreaComponent: PoTextareaComponent;
  @ViewChild('poStepper', { static: true })poStepperComponent: PoStepperComponent;
  public form: FormGroup ;
  columns = [];
  close: PoModalAction = {
    action: () => {
      this.poModalComponent.close();
    },
    label: 'Fechar',
    danger: true,
  };

  confirm: PoModalAction = {
    action: () => {
      this.poModalComponent.close();
    },
    label: 'Confirmar',
  };
  actions: Array<PoTableAction> = [
    {
      action: this.doNothing.bind(this),
      label: 'Detalhes',
    },
  ];
  steps = this.getSteps();
  poModalTitle = '';
  conditions: Array<PoButtonGroupItem> = [
    { label: '(', action: this.addGrouperToTextArea.bind(this) },
    { label: ')', action: this.addGrouperToTextArea.bind(this) },
    { label: 'e', action: this.addGrouperToTextArea.bind(this) },
    { label: 'ou', action: this.addGrouperToTextArea.bind(this) },
  ];
  currentPart:any ;
  parts = [
    {
      id: 1,
      title: 'Tinta',
    },
    {
      id: 2,
      title: 'Vidro',
    },
    {
      id: 3,
      title: 'Plásticos',
    },
    {
      id: 4,
      title: 'Carroceria',
    },
    {
      id: 5,
      title: 'Motor',
    },
    {
      id: 6,
      title: 'Pneu',
    },
    {
      id: 7,
      title: 'Outros',
    },
  ];

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      field: ['', Validators.required],
      operator: ['', Validators.required],
      expression: ['', Validators.required],
      preview: ['', Validators.required],
    });
    this.poTextAreaComponent.writeValueModel('');
  }

  getLabel(part:any) {
    return part.id + ` - ` + part.title;
  }

  getSteps(): Array<any> {
    return [
      {
        value: 1,
        index: '1',
        name: 'Preparando o ambiente',
        status: 'waiting',
      },
      {
        value: 2,
        index: '2',
        name: 'Obtendo listagem de produtos',
        status: 'waiting',
      },
      {
        value: 3,
        index: '3',
        name: 'Atualizando os produtos',
        status: 'waiting',
      },
    ];
  }



  addSomething() {
    const oldValue = this.poTextAreaComponent.inputEl.nativeElement.value;
    const condition =
      "Campo '" +
      this.poLookupComponent.displayValue +
      "' " +
      this.poSelectComponent.displayValue +
      " expressão:  '" +
      this.poInputComponent.modelLastUpdate +
      "'";
    this.poTextAreaComponent.writeValueModel(oldValue + condition);
  }

  handleOpenModal(part:any) {
    this.currentPart = part;
    this.poModalTitle = "Configuração de '" + part.title + "'";
    this.poModalComponent.open();
  }

  addGrouperToTextArea(something:any) {
    const oldValue = this.poTextAreaComponent.inputEl.nativeElement.value;
    const newValue = oldValue + ' ' + something.label;
    this.poTextAreaComponent.writeValueModel(newValue);
  }

  doNothing() {}

  handleNextStep() {
    this.poStepperComponent.next();
  }

}
