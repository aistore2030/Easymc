import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailmcPage } from './detailmc.page';

describe('DetailmcPage', () => {
  let component: DetailmcPage;
  let fixture: ComponentFixture<DetailmcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailmcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailmcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
