import '../estilos/Botones.css'

// recibimos los estados de activo, iniciarPausar y reiniciar
// y los mandamos al Cronometro.jsx
export const Botones = ({ activo, iniciarPausar, reiniciar }) => { 
    return (
        <div className="botones">
            {/* //si el estado es activo, mandamos la clase pausar, sino mandamos la clase play */}
            <button onClick={iniciarPausar} className={activo ? 'pausar' : 'play'}></button>
            {/* //recibimos y ejecutamos reiniciar que viene de Cronometro.jsx */}
            <button onClick={reiniciar} className='reiniciar'></button>
        </div>

    )
}