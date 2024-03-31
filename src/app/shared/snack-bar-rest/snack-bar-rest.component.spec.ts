import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarRestComponent } from './snack-bar-rest.component';

describe('SnackBarRestComponent', () => {
  let component: SnackBarRestComponent;
  let fixture: ComponentFixture<SnackBarRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnackBarRestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnackBarRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
