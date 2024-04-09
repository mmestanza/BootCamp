import { useState } from "react";
import '../assets/css/styles.css'

const Main = ({imagen, slogan}) => {
    
    // Este estado, retorna un arreglo
    const [contadorVisitas, setcontadorVisitas] = useState(0);
    
    console.log('Log contadorVisitas',contadorVisitas);
    console.log(imagen); 

    const actualizarVisitas = () => {
      setcontadorVisitas(contadorVisitas + 1 );
    }

    return (
          <div className="main">
            <h1>{imagen.titulo}</h1>
            <p>{slogan}</p>
            <img height='200px' src={imagen.url} />

            <button onClick={actualizarVisitas} className="btn-visitas">Actualizar Visitas</button>
            <p>El numero de visitas es: <b>{contadorVisitas}</b></p>
          </div>          
    )
}

export default Main;
