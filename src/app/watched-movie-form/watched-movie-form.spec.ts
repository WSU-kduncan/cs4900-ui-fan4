import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchedMovieForm } from './watched-movie-form';

describe('WatchedMovieForm', () => {
  let component: WatchedMovieForm;
  let fixture: ComponentFixture<WatchedMovieForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchedMovieForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchedMovieForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
