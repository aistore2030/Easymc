import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationemPage } from './notificationem.page';

describe('NotificationemPage', () => {
  let component: NotificationemPage;
  let fixture: ComponentFixture<NotificationemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
