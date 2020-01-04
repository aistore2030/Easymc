import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeemPage } from './homeem.page';

describe('HomeemPage', () => {
  let component: HomeemPage;
  let fixture: ComponentFixture<HomeemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
