import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItMapComponent } from './it-map.component';

describe('ItMapComponent', () => {
  let component: ItMapComponent;
  let fixture: ComponentFixture<ItMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
