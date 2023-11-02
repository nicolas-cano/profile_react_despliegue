import React from 'react';

function Hobbies() {
    // Datos ficticios de hobbies
    const hobbies = [
        {
            id: 1,
            nombre: 'Senderismo',
            descripcion: 'Explorar montañas y disfrutar de la naturaleza.',
        },
        {
            id: 2,
            nombre: 'Fotografía',
            descripcion: 'Capturar momentos especiales con mi cámara.',
        },
        {
            id: 3,
            nombre: 'Pintura al óleo',
            descripcion: 'Crear obras de arte en lienzo.',
        },
        {
            id: 4,
            nombre: 'Jardinería',
            descripcion: 'Cultivar plantas y flores en mi jardín.',
        },
    ];

    return (
        <div className="container">
            <h2>Mis Hobbies</h2>
            <ul className="list-group">
                {hobbies.map((hobby) => (
                    <li key={hobby.id} className="list-group-item">
                        <h3>{hobby.nombre}</h3>
                        <p>{hobby.descripcion}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Hobbies;

