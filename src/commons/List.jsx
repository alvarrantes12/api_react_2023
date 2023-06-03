import React from "react";

const List = ({ contents }) => {
    
    if(!contents || contents.length === 0) return <p>No hay contenidos</p>

    return (
        <div>
            <h4>Estos son los datos disponibles</h4>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Raza</th>
                    <th>Pedigree</th>
                    <th>Dueño</th>
                </tr>

                {contents.map(({id, name, breed, pedigree, owner: {first_name}}) => (
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{breed}</td>
                        <td>{pedigree ? "Sí" : "No"}</td>
                        <td>{first_name}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
export default List;