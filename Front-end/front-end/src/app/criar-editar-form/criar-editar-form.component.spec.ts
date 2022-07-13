import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEditarFormComponent } from './criar-editar-form.component';

describe('CriarEditarFormComponent', () => {
  let component: CriarEditarFormComponent;
  let fixture: ComponentFixture<CriarEditarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarEditarFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarEditarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
