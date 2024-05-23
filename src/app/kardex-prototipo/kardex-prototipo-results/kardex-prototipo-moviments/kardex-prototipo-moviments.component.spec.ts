/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KardexPrototipoMovimentsComponent } from './kardex-prototipo-moviments.component';

describe('KardexPrototipoMovimentsComponent', () => {
  let component: KardexPrototipoMovimentsComponent;
  let fixture: ComponentFixture<KardexPrototipoMovimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KardexPrototipoMovimentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexPrototipoMovimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
