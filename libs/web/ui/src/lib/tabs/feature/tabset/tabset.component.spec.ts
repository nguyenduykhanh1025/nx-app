import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsetComponent } from './tabset.component';

describe('TabsetComponent', () => {
  let component: TabsetComponent;
  let fixture: ComponentFixture<TabsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
