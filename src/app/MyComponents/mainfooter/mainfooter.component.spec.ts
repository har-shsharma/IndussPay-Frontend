import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainfooterComponent } from './mainfooter.component';

describe('MainfooterComponent', () => {
  let component: MainfooterComponent;
  let fixture: ComponentFixture<MainfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainfooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
