import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasListadoComponent } from './recetas-listado.component';

describe('RecetasListadoComponent', () => {
  let component: RecetasListadoComponent;
  let fixture: ComponentFixture<RecetasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetasListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
