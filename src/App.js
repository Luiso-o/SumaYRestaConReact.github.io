import logo from './logo.svg';
import './App.css';

function realizarSuma(e) {
  e.preventDefault();
  const v1 = parseInt(e.target.valor1.value);
  const v2 = parseInt(e.target.valor2.value);
  const suma = v1 + v2;
  const resta = v1 - v2;
  alert('La suma es : ' + suma);
  alert('La resta es : ' + resta);
}

function App() {
  const estiloApp = {
    backgroundColor: 'lightblue', 
  };
  return (
    <div className = "contenedor-centrado" style={estiloApp}>
      <form onSubmit={realizarSuma}>
        <p className="texto-azul"> Ingrese el primer valor : 
        <input type="number" name="valor1" />
        </p>

        <p className="texto-rojo">Ingrese el segundo valor :
        <input type="number" name="valor2" />
        </p>

        <p>
          <input type="submit" name="sumar" className="boton-verde" />
        </p>
      </form>
    </div>
  );
}

export default App;
