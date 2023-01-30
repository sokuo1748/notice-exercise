import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeReviseComponent } from './notice-revise.component';

describe('NoticeReviseComponent', () => {
  let component: NoticeReviseComponent;
  let fixture: ComponentFixture<NoticeReviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeReviseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeReviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
