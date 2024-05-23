/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KardexPrototipoOrdemproductionComponent } from './kardex-prototipo-ordemproduction.component';

describe('KardexPrototipoOrdemproductionComponent', () => {
  let component: KardexPrototipoOrdemproductionComponent;
  let fixture: ComponentFixture<KardexPrototipoOrdemproductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KardexPrototipoOrdemproductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexPrototipoOrdemproductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
