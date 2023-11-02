import React from 'react';

function About() {
    // Datos ficticios para el componente "Acerca de"
    const aboutData = {
        nombre: 'Juan Pérez',
        edad: 30,
        profesion: 'Desarrollador Web',
        descripcion: 'Soy un apasionado desarrollador web con experiencia en tecnologías como React, Node.js y Bootstrap. Me encanta crear aplicaciones web creativas y funcionales para mis clientes. Fuera del trabajo, disfruto de la música, la lectura y el senderismo en la naturaleza.',
    };

    return (
        <div className="container">
            <h2>Acerca de Mí</h2>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{aboutData.nombre}</h3>
                    <p className="card-text">Edad: {aboutData.edad} años</p>
                    <p className="card-text">Profesión: {aboutData.profesion}</p>
                    <p className="card-text">{aboutData.descripcion}</p>
                </div>
            </div>
        </div>
    );
}

export default About;
