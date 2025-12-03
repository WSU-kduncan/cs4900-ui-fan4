import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReviewDetail } from './user-review-detail';

describe('UserReviewDetail', () => {
  let component: UserReviewDetail;
  let fixture: ComponentFixture<UserReviewDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserReviewDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReviewDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
