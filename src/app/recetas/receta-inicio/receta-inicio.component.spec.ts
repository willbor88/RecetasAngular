import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaInicioComponent } from './receta-inicio.component';

describe('RecetaInicioComponent', () => {
  let component: RecetaInicioComponent;
  let fixture: ComponentFixture<RecetaInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
