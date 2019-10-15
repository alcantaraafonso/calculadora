import React, { Component } from 'react';
import './Calculator.css';
import Button from '../components/Button';
import Display from '../components/Display';

//As constantes são criadas obrigatóriamente fora das classes
const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    currentIndex: 0
}


export default class Calculator extends Component {

    // iniciando o estado
    state = {...initialState}

    //Criando um construtor para resolver o problema do estado da classe e poder chamar as funções com this
    constructor(props) {
        super(props);
        this.clearMemory = this.clearMemory.bind(this);
        this.addDigit = this.addDigit.bind(this);
        this.setOperation = this.setOperation.bind(this);

    }


    clearMemory() {
        this.setState({...initialState})
    }

    setOperation(operation) {
        if (this.state.currentIndex === 0) {
            this.setState({
                currentIndex: 1,
                clearDisplay: true,
                operation
            })
        } else {
            const equals = operation === '='
            // const currentOperation = 
            const values = [...this.state.values]
            try {
                values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
            } catch (e) {
                this.state.values[0] = values[0]
            }
            values[1] = 0;

            this.setState({
                displayValue: values[0],
                operation: equals ? null : this.state.operation,
                currentIndex: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
        console.log(operation)
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n;

        //Se vc criar a variavel com mesmo nome do objeto, ele fará a assossiação automaticamente,
        //caso contrário, deve-se fazer a atribuição passando chave: valor
        this.setState({displayValue, clearDisplay: false})

        if (n !== '.') {
            const i = this.state.currentIndex;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;

            this.setState({values})

            console.log(values)
        }

        
    }


    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue } />
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