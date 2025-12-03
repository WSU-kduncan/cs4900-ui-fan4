import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchedMovieDetail } from './watched-movie-detail';

describe('WatchedMovieDetail', () => {
  let component: WatchedMovieDetail;
  let fixture: ComponentFixture<WatchedMovieDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchedMovieDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchedMovieDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
