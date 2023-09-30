import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroupEventComponent } from './create-group-event.component';

describe('CreateGroupEventComponent', () => {
  let component: CreateGroupEventComponent;
  let fixture: ComponentFixture<CreateGroupEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGroupEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGroupEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
