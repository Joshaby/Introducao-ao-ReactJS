import React from 'react';
import ReactDOM from 'react-dom';

function showName() {
    return (
        <div>
            Nome do criador: José Henrique
        </div>
    );
}

const App = () => {

    return (
        <div>
            Hello Word
            {showName()}
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);