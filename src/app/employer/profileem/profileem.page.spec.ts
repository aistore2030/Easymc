import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileemPage } from './profileem.page';

describe('ProfileemPage', () => {
  let component: ProfileemPage;
  let fixture: ComponentFixture<ProfileemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
