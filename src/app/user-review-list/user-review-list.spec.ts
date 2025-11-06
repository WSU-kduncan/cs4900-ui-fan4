import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReviewList } from './user-review-list';

describe('UserReviewList', () => {
  let component: UserReviewList;
  let fixture: ComponentFixture<UserReviewList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserReviewList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReviewList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
