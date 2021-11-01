import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import Div from './components/Div';

class App1 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            label: 'Label302'
        }
    }

    alterarLabel = () => {
        this.setState({
            label: 'Label1'
        });
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                label: 'Label2'
            });
        }, 3000);
    }

    render() {
        return (
            <Div label="Div 1">
                <p>{this.state.label}</p>
                <button onClick={() => this.alterarLabel()}>Clique aqui</button>
            </Div>
        );
    }
}

function showName() {
    return (
        <div>
            Nome do criador: José Henrique
        </div>
    );
}

const sum = (a, b) => alert(a + b);

const App = () => {

    return (
        <div>
            <Div label="Div 1">
                {showName()}
                <Button onClick={() => sum(10, 10)} name="Clique aqui!"/>
            </Div>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App1 />, rootElement);