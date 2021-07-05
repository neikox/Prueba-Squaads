import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaPlayersComponent } from './ficha-players.component';

describe('FichaPlayersComponent', () => {
  let component: FichaPlayersComponent;
  let fixture: ComponentFixture<FichaPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaPlayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
