import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PsPage } from './ps.page';

describe('PsPage', () => {
  let component: PsPage;
  let fixture: ComponentFixture<PsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
