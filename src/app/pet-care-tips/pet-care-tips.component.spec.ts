import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCareTipsComponent } from './pet-care-tips.component';

describe('PetCareTipsComponent', () => {
  let component: PetCareTipsComponent;
  let fixture: ComponentFixture<PetCareTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetCareTipsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetCareTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
