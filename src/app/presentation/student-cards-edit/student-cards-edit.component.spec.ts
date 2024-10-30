import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCardsEditComponent } from './student-cards-edit.component';

describe('StudentCardsEditComponent', () => {
  let component: StudentCardsEditComponent;
  let fixture: ComponentFixture<StudentCardsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCardsEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentCardsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
