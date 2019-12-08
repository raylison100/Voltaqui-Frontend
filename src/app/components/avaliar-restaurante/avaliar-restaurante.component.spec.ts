import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliarRestauranteComponent } from './avaliar-restaurante.component';

describe('AvaliarRestauranteComponent', () => {
  let component: AvaliarRestauranteComponent;
  let fixture: ComponentFixture<AvaliarRestauranteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliarRestauranteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliarRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
