import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button';
import Div from './components/Div';

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
ReactDOM.render(<App />, rootElement);