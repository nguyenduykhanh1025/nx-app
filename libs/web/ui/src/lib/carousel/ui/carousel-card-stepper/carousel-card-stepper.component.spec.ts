import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselCardStepperComponent } from './carousel-card-stepper.component';

describe('CarouselCardStepperComponent', () => {
  let component: CarouselCardStepperComponent;
  let fixture: ComponentFixture<CarouselCardStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselCardStepperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarouselCardStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
