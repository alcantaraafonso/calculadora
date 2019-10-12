import React, { Component } from 'react';
import './Calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

export default class Calculator extends Component {
    //Criando um construtor para resolver o problema do estado da classe e poder chamar as funções com this
    constructor(props) {
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.addDigit = this.addDigit.bind(this);
        this.setOperation = this.setOperation.bind(this);

    }

    clearMemory() {
        console.log("limpar");
    }

    setOperation(operation) {
        console.log(operation);
    }

    addDigit(n) {
        console.log(n)
    }


    render() {
        return (
            <div className="calculator">
                <Display value={100} />
                <Button label="AC" triple click={this.clearMemory}/> {/* usa-se só a declaração da variavel, pois o teste na classe button é só saber se a variavel existe */}
                <Button label="/" operation click={this.setOperation}/>
                <Button label="7" click={this.addDigit}/>
                <Button label="8" click={this.addDigit}/>
                <Button label="9" click={this.addDigit}/>
                <Button label="*" operation click={this.setOperation}/>
                <Button label="4" click={this.addDigit}/>
                <Button label="5" click={this.addDigit}/>
                <Button label="6" click={this.addDigit}/>
                <Button label="-" operation click={this.setOperation}/>
                <Button label="1" click={this.addDigit}/>
                <Button label="2" click={this.addDigit}/>
                <Button label="3" click={this.addDigit}/>
                <Button label="+" operation click={this.setOperation}/>
                <Button label="0" double click={this.addDigit}/>
                <Button label="." click={this.addDigit}/>
                <Button label="=" operation click={this.setOperation}/>
                

            </div>
        )
    }
}