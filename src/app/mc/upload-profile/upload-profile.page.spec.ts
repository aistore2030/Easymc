import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadProfilePage } from './upload-profile.page';

describe('UploadProfilePage', () => {
  let component: UploadProfilePage;
  let fixture: ComponentFixture<UploadProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadProfilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
