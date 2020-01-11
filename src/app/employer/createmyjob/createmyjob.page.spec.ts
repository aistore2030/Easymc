import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatemyjobPage } from './createmyjob.page';

describe('CreatemyjobPage', () => {
  let component: CreatemyjobPage;
  let fixture: ComponentFixture<CreatemyjobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatemyjobPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatemyjobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
