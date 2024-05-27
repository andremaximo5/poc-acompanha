/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KardexPrototipoComponent } from './kardex-prototipo.component';

describe('KardexPrototipoComponent', () => {
  let component: KardexPrototipoComponent;
  let fixture: ComponentFixture<KardexPrototipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KardexPrototipoComponent ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(KardexPrototipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
