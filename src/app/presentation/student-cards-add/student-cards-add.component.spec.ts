import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCardsAddComponent } from './student-cards-add.component';

describe('StudentCardsAddComponent', () => {
  let component: StudentCardsAddComponent;
  let fixture: ComponentFixture<StudentCardsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCardsAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentCardsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
