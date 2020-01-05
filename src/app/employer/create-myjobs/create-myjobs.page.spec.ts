import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateMyjobsPage } from './create-myjobs.page';

describe('CreateMyjobsPage', () => {
  let component: CreateMyjobsPage;
  let fixture: ComponentFixture<CreateMyjobsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMyjobsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateMyjobsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
