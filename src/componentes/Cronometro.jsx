import { useState, useEffect } from 'react';
import { Botones } from './Botones.jsx'
import '../estilos/Cronometro.css';

export const Cronometro = () => {
    const [horas, setHoras] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [segundos, setSegundos] = useState(0);
    const [activo, setActivo] = useState(false);

    useEffect(() => {
        let intervalo = null; //variable para guardar el intervalo
        if (activo) { //si el estado es activo
            intervalo = setInterval(() => { //iniciamos el intervalo
                setSegundos(segundosViejos => segundosViejos + 1); //sumamos 1 segundo
            }, 1000) //cada 1 segundo
        } else { //si el estado es no activo
            clearInterval(intervalo); //limpiamos el intervalo
        }
        return () => clearInterval(intervalo); //limpiamos el intervalo cuando el componente se desmonta
    }, [activo]);

    // cambiar de activo y pasivo y viceversa
    const iniciarPausar = () => {
        setActivo(!activo); //cambiamos el estado de activo y no Activo
    }

    // funcion reiniciar
    const reiniciar = () => {
        setActivo(false); //detenemos
        setSegundos(0); //volvemos a 0 el cronometro
        setMinutos(0); //volvemos a 0 los minutos
        setHoras(0); //volvemos a 0 las horas
    }

    // formatear los segundos a minutos y segundos
    const formatearTiempo = (tiempo) => { //recibimos el tiempo
        return tiempo < 10 ? '0' + tiempo : tiempo; //si el tiempo es menor a 10, le agregamos un 0
    }


    const cronometro = () => {
        if (segundos / 60 === 1) {
            setMinutos(minutosViejos => minutosViejos + 1); //sumamos 1 minuto
            setSegundos(0) //volvemos a 0 los segundos
            if (minutos / 60 === 1) {
                setHoras(horasViejos => horasViejos + 1); //sumamos 1 hora
                setMinutos(0)    //volvemos a 0 los minutos
            }
        }

        //retornamos el tiempo formateado
        return `${formatearTiempo(horas)}:${formatearTiempo(minutos)}:${formatearTiempo(segundos)}`
    }

    return (
        <div className="cronometro-principal">
            <div className="cronometro">{cronometro()}</div>
            <Botones
                activo={activo} //mandamos el estado de activo 
                iniciarPausar={iniciarPausar} //mandamos la funcion iniciarPausar y reiniciar al Botones.jsx
                reiniciar={reiniciar}
            />
        </div>



    )
}