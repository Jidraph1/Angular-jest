import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // exact equality
  it('two plus two is equal to 4', () => {
    expect(2 + 2).toBe(4);
  });

  // object testing
  it('object values', () => {
    const data = { name: 'Jidraph' };
    expect(data).toEqual({ name: 'Jidraph' });
  });

  // Testing matchers ........................

  it('is null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  it('is zero', () => {
    const isZero = 0;
    expect(isZero).toBeFalsy();
    expect(isZero).not.toBeTruthy();
    expect(isZero).toBeDefined();
  });

  // Strings .............................

  it('there is no D in her yet', () => {
    expect('Esther').not.toMatch(/D/);
  });

  it('he has the package', () => {
    expect('Jidraph').toMatch(/Jid/);
  });

  // arrays .................................

  it('should return truth is there is milk in the list', () => {
    const shoppingList = ['dipers', 'milk', 'oreo'];
    expect(shoppingList).toContain('milk');
  })


  // execptions 
  it('should return the error in the component',()=>{
    expect(() => component.compileAngularCode()).toThrow()
    expect(() => component.compileAngularCode()).toThrow(Error)

    expect(() => component.compileAngularCode()).toThrow('You are using old angular')
  })
});
