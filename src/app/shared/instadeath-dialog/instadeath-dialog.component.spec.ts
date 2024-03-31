import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstadeathDialogComponent } from './instadeath-dialog.component';

describe('InstadeathDialogComponent', () => {
  let component: InstadeathDialogComponent;
  let fixture: ComponentFixture<InstadeathDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstadeathDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstadeathDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
