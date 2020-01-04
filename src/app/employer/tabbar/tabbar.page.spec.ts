import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabbarPage } from './tabbar.page';

describe('TabbarPage', () => {
  let component: TabbarPage;
  let fixture: ComponentFixture<TabbarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabbarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
