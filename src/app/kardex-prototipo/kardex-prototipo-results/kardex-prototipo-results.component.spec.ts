/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KardexPrototipoResultsComponent } from './kardex-prototipo-results.component';

describe('KardexPrototipoResultsComponent', () => {
  let component: KardexPrototipoResultsComponent;
  let fixture: ComponentFixture<KardexPrototipoResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KardexPrototipoResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KardexPrototipoResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
