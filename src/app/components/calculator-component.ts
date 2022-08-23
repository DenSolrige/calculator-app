import { Component } from "@angular/core";


@Component({
    template:`

        <h3>Enter input and choose an operation</h3>
        <p>{{currentOperation}}</p>
        <input type="text" name="" id="" [(ngModel)]="input">
        <ul>
            <li *ngFor="let operation of operations">
                <button (click)="operate(operation.op)">{{operation.name}}</button>
            </li>
        </ul>
        <ul class="results">
            <li *ngFor="let result of results" class="result">{{result}}</li>
        </ul>
    `,
    selector:"calculator",
    styleUrls:["calculator-style.css"]
})
export class CalculatorComponent{
    currentOperation:string = "";
    input:string = "";
    operations:Array<{op:string,name:string}> = [
                                {op:"+",name:"Add"},
                                {op:"-",name:"Subtract"},
                                {op:"*",name:"Multiply"},
                                {op:"/",name:"Divide"},
                                {op:"=",name:"Equals"},
                                {op:"c",name:"Clear"},
                                {op:"ch",name:"Clear History"}
                            ];
    results:Array<string> = [];

    operate(operation:string){
        switch(operation){
            case "ch":
                this.results = [];
                break;
            case "c":
                this.currentOperation = "";
                break;
            case "=":
                if(!isNaN(Number(this.input))){
                    let lastOp:string = this.currentOperation.slice(-1);
                    let result:string = Number(eval(this.currentOperation+this.input)).toString();
                    this.results.unshift(result);
                    this.currentOperation = result+lastOp;
                }
                break;
            default:
                if(isNaN(Number(this.input))){
                    break;
                }
                this.currentOperation += this.input + operation;
                break;
        }
    }
}