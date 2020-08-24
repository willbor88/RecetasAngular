import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasEdicionComponent } from './compras-edicion.component';

describe('ComprasEdicionComponent', () => {
  let component: ComprasEdicionComponent;
  let fixture: ComponentFixture<ComprasEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
