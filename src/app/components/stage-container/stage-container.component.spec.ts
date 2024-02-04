import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageContainerComponent } from './stage-container.component';

describe('StageContainerComponent', () => {
  let component: StageContainerComponent;
  let fixture: ComponentFixture<StageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StageContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
