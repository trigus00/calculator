import {ComponentFixture, TestBed } from '@angular/core/testing';


import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
  // let num1!: number;
  // let num2!: number;
  // let arr: Array<number> = [];
  // let operation: string = '';
  // let count: number = 0;
  // let input:string = ''
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component=fixture.componentInstance;
  });

 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it(`should have a title called 'Calculator'`, () => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Calculator');
  });

  it("variables to be initailized",() =>{
    expect(component.count).toEqual(0)
    expect(component.num1).not.toBeDefined()
    expect(component.num2).not.toBeDefined()
    expect(component.arr).toBeDefined()
  })

 it('should be clear ',()=>{
    
    const fixture = TestBed.createComponent(CalculatorComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    expect(app.clear()).toBeUndefined()
    
    
  })

  it('should get values', () => {
    const fixture = TestBed.createComponent(CalculatorComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;
    let val = '1'
    let values = app.num(val)
    expect(values).toBeGreaterThan(0)
    expect(values).not.toBeUndefined()
    expect(values).not.toBeNaN()
    
   
    
    
  })

  it('should get the operator',() =>{
    const fixture = TestBed.createComponent(CalculatorComponent);
    fixture.detectChanges();
    let op = '/'
    expect(component.operator(op)).toBe(op)
    })

  it('calculate function', ()=>{
    const fixture = TestBed.createComponent(CalculatorComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance; 
    let result =app.calculate(1,2,'*')
    let result1 = app.calculate(100,1,'-')
    let result2 = app.calculate(1,0,'/')

    expect(result).toEqual(2)
    expect(result1).toEqual(99)
    expect(result2).toBe('It is undefinded')
    
    
  })
});
