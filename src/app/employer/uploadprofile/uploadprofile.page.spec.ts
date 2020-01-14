import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadprofilePage } from './uploadprofile.page';

describe('UploadprofilePage', () => {
  let component: UploadprofilePage;
  let fixture: ComponentFixture<UploadprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadprofilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
