import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowProfilemcPage } from './show-profilemc.page';

describe('ShowProfilemcPage', () => {
  let component: ShowProfilemcPage;
  let fixture: ComponentFixture<ShowProfilemcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProfilemcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowProfilemcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
