import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeIndexComponent } from './notice-index.component';

describe('NoticeIndexComponent', () => {
  let component: NoticeIndexComponent;
  let fixture: ComponentFixture<NoticeIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticeIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
