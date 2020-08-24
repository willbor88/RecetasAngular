import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasDetallesComponent } from './recetas-detalles.component';

describe('RecetasDetallesComponent', () => {
  let component: RecetasDetallesComponent;
  let fixture: ComponentFixture<RecetasDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetasDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetasDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
