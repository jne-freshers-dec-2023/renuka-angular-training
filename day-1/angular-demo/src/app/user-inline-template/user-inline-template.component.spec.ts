import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInlineTemplateComponent } from './user-inline-template.component';

describe('UserInlineTemplateComponent', () => {
  let component: UserInlineTemplateComponent;
  let fixture: ComponentFixture<UserInlineTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserInlineTemplateComponent]
    });
    fixture = TestBed.createComponent(UserInlineTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
