import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationSvgComponent } from './notification-svg.component';

describe('NotificationSvgComponent', () => {
  let component: NotificationSvgComponent;
  let fixture: ComponentFixture<NotificationSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
