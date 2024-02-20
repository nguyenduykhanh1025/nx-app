import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecommendedFeatureComponent } from './recommended-feature.component';

describe('RecommendedFeatureComponent', () => {
  let component: RecommendedFeatureComponent;
  let fixture: ComponentFixture<RecommendedFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedFeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecommendedFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
