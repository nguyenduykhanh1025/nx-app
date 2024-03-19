import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeCardStepperComponent } from './home-card-stepper.component';

describe('HomeCardStepperComponent', () => {
  let component: HomeCardStepperComponent;
  let fixture: ComponentFixture<HomeCardStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCardStepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCardStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
