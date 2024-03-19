import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecommendedFeaturesComponent } from './recommended-features.component';

describe('RecommendedFeaturesComponent', () => {
  let component: RecommendedFeaturesComponent;
  let fixture: ComponentFixture<RecommendedFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedFeaturesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecommendedFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
