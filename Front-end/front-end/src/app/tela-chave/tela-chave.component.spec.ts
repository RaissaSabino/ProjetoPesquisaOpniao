import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaChaveComponent } from './tela-chave.component';

describe('TelaChaveComponent', () => {
  let component: TelaChaveComponent;
  let fixture: ComponentFixture<TelaChaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaChaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaChaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
