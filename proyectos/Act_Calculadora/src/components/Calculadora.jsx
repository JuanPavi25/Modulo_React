import React, { useState } from 'react';

function Calculadora() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [operacion, setOperacion] = useState(null);
    const [resultado, setResultado] = useState('0');

    const manejarOperacion = (op) => {
        setOperacion(op);
    };

    const calcular = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        let res = '';

        if (isNaN(n1) || isNaN(n2)) {
            res = 'Ingrese ambos números';
        } else {
            switch (operacion) {
                case '+': res = n1 + n2; break;
                case '-': res = n1 - n2; break;
                case '*': res = n1 * n2; break;
                case '/': res = n2 !== 0 ? n1 / n2 : 'Error: división por cero'; break;
                default: res = 'Seleccione una operación';
            }
        }

        setResultado(res);
    };

    return (
        <div className="container mt-5" style={{ minWidth: '500px' }}>
            <h1 className='text-center '>Calculadora</h1>
            <div className="card shadow-lg">
                <div className="card-header bg-light text-center">
                    <h4>{resultado}</h4>
                </div>

                <div className="card-body">
                    <input
                        type="number"
                        className="form-control mb-2"
                        placeholder="Número 1"
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                    />
                    <input
                        type="number"
                        className="form-control mb-3"
                        placeholder="Número 2"
                        value={num2}
                        onChange={(e) => setNum2(e.target.value)}
                    />

                    <div className="d-flex justify-content-evenly mb-3">
                        <button className="btn btn-primary fs-4" onClick={() => manejarOperacion('+')}>+</button>
                        <button className="btn btn-primary fs-4" onClick={() => manejarOperacion('-')}>−</button>
                        <button className="btn btn-primary fs-4" onClick={() => manejarOperacion('*')}>×</button>
                        <button className="btn btn-primary fs-4" onClick={() => manejarOperacion('/')}>÷</button>
                        <button className="btn btn-success fs-4" onClick={calcular}>=</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculadora;