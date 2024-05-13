import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListingsPageComponent } from './my-listings-page.component';

describe('MyListingsPageComponent', () => {
  let component: MyListingsPageComponent;
  let fixture: ComponentFixture<MyListingsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [MyListingsPageComponent]
});
    fixture = TestBed.createComponent(MyListingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
