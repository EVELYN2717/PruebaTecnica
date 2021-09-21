import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModdalEditComponent } from './moddal-edit.component';

describe('ModdalEditComponent', () => {
  let component: ModdalEditComponent;
  let fixture: ComponentFixture<ModdalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModdalEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModdalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
