import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppartementsPage } from './appartements.page';

describe('AppartementsPage', () => {
  let component: AppartementsPage;
  let fixture: ComponentFixture<AppartementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppartementsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppartementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
