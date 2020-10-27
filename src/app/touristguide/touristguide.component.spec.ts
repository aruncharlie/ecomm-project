import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouristguideComponent } from './touristguide.component';

describe('TouristguideComponent', () => {
  let component: TouristguideComponent;
  let fixture: ComponentFixture<TouristguideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TouristguideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TouristguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
