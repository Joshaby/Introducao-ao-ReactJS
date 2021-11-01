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
                {this.state.label === 'Label2' ? (
                    <p>1</p>
                ) : (
                    <p>2</p>
                )}
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

const customer = [
    {
        id: 1,
        name: 'José Henrique',
        skills: ['Spring Boot', 'Hibernate', 'React']
    },
    {
        id: 2,
        name: 'Henrique',
        skills: ['Spring Boot', 'Hibernate', 'React']
    },
    {
        id: 3,
        name: 'Azevedo',
        skills: ['Spring Boot', 'Hibernate', 'React']
    }
    ,
    {
        id: 4,
        name: 'Geovana',
        skills: ['Spring Boot', 'Hibernate', 'React']
    }
]

const App = () => {

    const deleteCliente = (e, id) => {
        console.log(e);
        console.log("Deletando cliente com id " + id);
    }

    const renderCustomers = (customer, index) => {
        return (
            <li key={index}>
                <p>Id: {customer.id}</p>
                <p>Nome: {customer.name}<button onClick={e => deleteCliente(e, customer.id)}>Deletar</button></p>
                <p>Skills:</p>
                <ul>
                    {customer.skills.map((skill, index) => {
                        return (
                            <li key={index}>{skill}</li>
                        );
                    })}
                </ul>
            </li>
        );
    }

    return (
        <div>
            <h1>Clientes</h1>
            <ul>
                {customer.map(renderCustomers)}
            </ul>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);