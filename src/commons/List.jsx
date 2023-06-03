import React from 'react';

const List = ({ contents }) => {

    if (!contents || contents.length === 0) return <p>No hay contenidos</p>

    return (
        <div>
            <h4>Estos son los datos disponibles</h4>
            <table>
                <tr>
                    <th style={{padding: "0 4em 0 4em"}}>Id</th>
                    <th style={{padding: "0 4em 0 4em"}}>Nombre</th>
                    <th style={{padding: "0 4em 0 4em"}}>Raza</th>
                    <th style={{padding: "0 4em 0 4em"}}>Pedigreee</th>
                    <th style={{padding: "0 4em 0 4em"}}>Dueño</th>
                </tr>

                {contents.map(({id, name, breed, pedigree, owner: {first_name}}) => (
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{breed}</td>
                        <td>{pedigree ? "Si" : "No"}</td>
                        <td>{first_name}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default List;