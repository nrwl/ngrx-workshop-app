import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { MatDialog } from '@angular/material/dialog';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, TopBarComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [
        provideMockStore({ initialState: {} }),
        { provide: MatDialog, useValue: { open: () => {} } }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
