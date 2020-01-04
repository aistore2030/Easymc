import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditprofileemployerPage } from './editprofileemployer.page';

describe('EditprofileemployerPage', () => {
  let component: EditprofileemployerPage;
  let fixture: ComponentFixture<EditprofileemployerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditprofileemployerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditprofileemployerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
