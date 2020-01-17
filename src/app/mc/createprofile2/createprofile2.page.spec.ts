import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Createprofile2Page } from './createprofile2.page';

describe('Createprofile2Page', () => {
  let component: Createprofile2Page;
  let fixture: ComponentFixture<Createprofile2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Createprofile2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Createprofile2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
