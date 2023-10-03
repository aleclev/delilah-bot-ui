import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatEntryComponent } from './creat-entry.component';

describe('CreatEntryComponent', () => {
  let component: CreatEntryComponent;
  let fixture: ComponentFixture<CreatEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
