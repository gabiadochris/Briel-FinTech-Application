import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturetwoComponent } from './featuretwo.component';

describe('FeaturetwoComponent', () => {
  let component: FeaturetwoComponent;
  let fixture: ComponentFixture<FeaturetwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturetwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
