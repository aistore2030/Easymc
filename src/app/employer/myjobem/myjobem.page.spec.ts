import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyjobemPage } from './myjobem.page';

describe('MyjobemPage', () => {
  let component: MyjobemPage;
  let fixture: ComponentFixture<MyjobemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyjobemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyjobemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
