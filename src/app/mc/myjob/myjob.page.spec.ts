import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyjobPage } from './myjob.page';

describe('MyjobPage', () => {
  let component: MyjobPage;
  let fixture: ComponentFixture<MyjobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyjobPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyjobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
