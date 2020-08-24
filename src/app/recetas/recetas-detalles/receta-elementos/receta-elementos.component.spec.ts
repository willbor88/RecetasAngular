import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaElementosComponent } from './receta-elementos.component';

describe('RecetaElementosComponent', () => {
  let component: RecetaElementosComponent;
  let fixture: ComponentFixture<RecetaElementosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaElementosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaElementosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
