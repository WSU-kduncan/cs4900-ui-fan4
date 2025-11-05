import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchedMovieListComponent } from './watched-movie-list.component';

describe('WatchedMovieListComponent', () => {
  let component: WatchedMovieListComponent;
  let fixture: ComponentFixture<WatchedMovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchedMovieListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchedMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
