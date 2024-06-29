const mazo = [
        { valor: 1, imagen: 'imagenes/carta_1.jpg' },
        { valor: 2, imagen: 'imagenes/carta_2.jpg' },
        { valor: 3, imagen: 'imagenes/carta_3.jpg' },
        { valor: 4, imagen: 'imagenes/carta_4.jpg' },
        { valor: 5, imagen: 'imagenes/carta_5.jpg' },
        { valor: 6, imagen: 'imagenes/carta_6.jpg' },
        { valor: 7, imagen: 'imagenes/carta_7.jpg' },
        { valor: 8, imagen: 'imagenes/carta_8.jpg' },
        { valor: 9, imagen: 'imagenes/carta_9.jpg' },
        { valor: 10, imagen: 'imagenes/carta_10.jpg' },
        { valor: 11, imagen: 'imagenes/carta_11.jpg' },
        { valor: 12, imagen: 'imagenes/carta_12.jpg' },
        { valor: 13, imagen: 'imagenes/carta_13.jpg' },
        { valor: 1, imagen: 'imagenes/carta_c1.jpg' },
        { valor: 2, imagen: 'imagenes/carta_c2.jpg' },
        { valor: 3, imagen: 'imagenes/carta_c3.jpg' },
        { valor: 4, imagen: 'imagenes/carta_c4.jpg' },
        { valor: 5, imagen: 'imagenes/carta_c5.jpg' },
        { valor: 6, imagen: 'imagenes/carta_c6.jpg' },
        { valor: 7, imagen: 'imagenes/carta_c7.jpg' },
        { valor: 8, imagen: 'imagenes/carta_c8.jpg' },
        { valor: 9, imagen: 'imagenes/carta_c9.jpg' },
        { valor: 10, imagen: 'imagenes/carta_c10.jpg' },
        { valor: 11, imagen: 'imagenes/carta_c11.jpg' },
        { valor: 12, imagen: 'imagenes/carta_c12.jpg' },
        { valor: 13, imagen: 'imagenes/carta_c13.jpg' },
        { valor: 1, imagen: 'imagenes/carta_d1.jpg' },
        { valor: 2, imagen: 'imagenes/carta_d2.jpg' },
        { valor: 3, imagen: 'imagenes/carta_d3.jpg' },
        { valor: 4, imagen: 'imagenes/carta_d4.jpg' },
        { valor: 5, imagen: 'imagenes/carta_d5.jpg' },
        { valor: 6, imagen: 'imagenes/carta_d6.jpg' },
        { valor: 7, imagen: 'imagenes/carta_d7.jpg' },
        { valor: 8, imagen: 'imagenes/carta_d8.jpg' },
        { valor: 9, imagen: 'imagenes/carta_d9.jpg' },
        { valor: 10, imagen: 'imagenes/carta_d10.jpg' },
        { valor: 11, imagen: 'imagenes/carta_d11.jpg' },
        { valor: 12, imagen: 'imagenes/carta_d12.jpg' },
        { valor: 13, imagen: 'imagenes/carta_d13.jpg' },
        { valor: 1, imagen: 'imagenes/carta_e1.jpg' },
        { valor: 2, imagen: 'imagenes/carta_e2.jpg' },
        { valor: 3, imagen: 'imagenes/carta_e3.jpg' },
        { valor: 4, imagen: 'imagenes/carta_e4.jpg' },
        { valor: 5, imagen: 'imagenes/carta_e5.jpg' },
        { valor: 6, imagen: 'imagenes/carta_e6.jpg' },
        { valor: 7, imagen: 'imagenes/carta_e7.jpg' },
        { valor: 8, imagen: 'imagenes/carta_e8.jpg' },
        { valor: 9, imagen: 'imagenes/carta_e9.jpg' },
        { valor: 10, imagen: 'imagenes/carta_e10.jpg' },
        { valor: 11, imagen: 'imagenes/carta_e11.jpg' },
        { valor: 12, imagen: 'imagenes/carta_e12.jpg' },
        { valor: 13, imagen: 'imagenes/carta_e13.jpg' }
        
    ];
  
    let jugador1 = { nombre: '', victorias: 0, derrotas: 0, fichas: 0 };
    let jugador2 = { nombre: '', victorias: 0, derrotas: 0, fichas: 0 };

function obtenerCartaAleatoria() {
    const indice = Math.floor(Math.random() * mazo.length);
    return mazo[indice];
}

function mostrarCarta(jugador, carta) {
    const cartaDiv = document.getElementById(`carta${jugador}`);
    cartaDiv.innerHTML = `<img src="${carta.imagen}" alt="Carta">`;
}

function actualizarEstadisticas() {
    document.getElementById('estv').innerText = `Victorias: ${jugador1.victorias}`;
    document.getElementById('estd').innerText = `Derrotas: ${jugador1.derrotas}`;
    document.getElementById('estf').innerText = `Fichas Ganadas: ${jugador1.fichas}`;
    document.getElementById('estv2').innerText = `Victorias: ${jugador2.victorias}`;
    document.getElementById('estd2').innerText = `Derrotas: ${jugador2.derrotas}`;
    document.getElementById('estf2').innerText = `Fichas Ganadas: ${jugador2.fichas}`;
}

function determinarGanador(apuesta1, carta1, apuesta2, carta2) {
    if (carta1.valor > carta2.valor) {
        jugador1.victorias++;
        jugador2.derrotas++;
        jugador1.fichas += apuesta1 + apuesta2;
        jugador2.fichas -= apuesta2;

        return { ganador: jugador1.nombre, ganancia: apuesta1 + apuesta2 };
    } else if (carta1.valor < carta2.valor) {
        jugador2.victorias++;
        jugador1.derrotas++;
        jugador2.fichas += apuesta1 + apuesta2;
        jugador1.fichas -= apuesta1;

        return { ganador: jugador2.nombre, ganancia: apuesta1 + apuesta2 };
    } else {
        return { ganador: 'Ninguno', ganancia: 0 };
    }
}

document.getElementById('jugar').addEventListener('click', () => {
    jugador1.nombre = document.getElementById('nombreJugador1').value;
    const apuestaJugador1 = parseInt(document.getElementById('apuestaJugador1').value);
    jugador2.nombre = document.getElementById('nombreJugador2').value;
    const apuestaJugador2 = parseInt(document.getElementById('apuestaJugador2').value);

    if (!jugador1.nombre || !apuestaJugador1 || !jugador2.nombre || !apuestaJugador2) {
        alert('Ingrese todos los datos para empezar la apuesta');
        return;
    }

    if (apuestaJugador1 <= 0 || apuestaJugador2 <= 0) {
        alert('No se admiten apuestas menores a 0');
        return;
    }

    const cartaJugador1 = obtenerCartaAleatoria();
    const cartaJugador2 = obtenerCartaAleatoria();

    mostrarCarta('Jugador1', cartaJugador1);
    mostrarCarta('Jugador2', cartaJugador2);

    const resultado = determinarGanador(apuestaJugador1, cartaJugador1, apuestaJugador2, cartaJugador2);
    document.getElementById('resultado').innerHTML = `¡Ganador: ${resultado.ganador}, Ganancia: ${resultado.ganancia} fichas!`;
    actualizarEstadisticas();
});

document.getElementById('reiniciar').addEventListener('click', () => {
    jugador1 = { nombre: '', victorias: 0, derrotas: 0, fichas: 0 };
    jugador2 = { nombre: '', victorias: 0, derrotas: 0, fichas: 0 };
    document.getElementById('formJugador1').reset();
    document.getElementById('formJugador2').reset();
    document.getElementById('cartaJugador1').innerHTML = '';
    document.getElementById('cartaJugador2').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    actualizarEstadisticas();
});