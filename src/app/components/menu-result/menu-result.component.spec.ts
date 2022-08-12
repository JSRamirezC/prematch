import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuResultComponent } from './menu-result.component';

describe('MenuResultComponent', () => {
  let component: MenuResultComponent;
  let fixture: ComponentFixture<MenuResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
