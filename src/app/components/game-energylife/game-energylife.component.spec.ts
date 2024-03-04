import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameEnergylifeComponent } from './game-energylife.component';

describe('GameEnergylifeComponent', () => {
  let component: GameEnergylifeComponent;
  let fixture: ComponentFixture<GameEnergylifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameEnergylifeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameEnergylifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
