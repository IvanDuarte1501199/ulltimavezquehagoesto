import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsFormAddComponent } from './items-form-add.component';

describe('ItemsFormAddComponent', () => {
  let component: ItemsFormAddComponent;
  let fixture: ComponentFixture<ItemsFormAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsFormAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
