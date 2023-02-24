import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSearchComponent } from './it-search.component';

describe('ItSearchComponent', () => {
  let component: ItSearchComponent;
  let fixture: ComponentFixture<ItSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
