import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImagesRecommendationComponent } from './images-recommendation.component';

describe('ImagesRecommendationComponent', () => {
  let component: ImagesRecommendationComponent;
  let fixture: ComponentFixture<ImagesRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagesRecommendationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ImagesRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
