import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiceFooterComponent } from './nice-footer.component';

describe('NiceFooterComponent', () => {
  let component: NiceFooterComponent;
  let fixture: ComponentFixture<NiceFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiceFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiceFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
