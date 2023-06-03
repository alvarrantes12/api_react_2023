import React, { useState } from 'react';
import { putFetch } from '../../commons/ApiMethods';

function Edit({ setRefresh }) {
    const [nameEdit, setNameEdit] = useState('')
    const [idEdit, setIdEdit] = useState('')
    const [messageEdit, setMessageEdit] = useState('')

    const handleEdit = async (event) => {
        event.preventDefault();
        try {
            putFetch(`pets/${idEdit}`, { name: nameEdit })
                .then(() => {
                    setNameEdit('');
                    setIdEdit('');
                    setMessageEdit('Editado correctamente');
                    setRefresh(true);
                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form onSubmit={handleEdit}>
                <div>
                    <input
                        type='text'
                        value={idEdit}
                        placeholder='Numero id'
                        onChange={(e) => { setIdEdit(e.target.value); }} />
                </div>
                <div>
                    <input
                        type='text'
                        value={nameEdit}
                        placeholder='Nuevo nombre de la mascota'
                        onChange={(e) => { setNameEdit(e.target.value); }} />
                </div>
                <div>
                    <div>{messageEdit ? <p>{messageEdit}</p> : <br></br>}</div>
                    <button type='submit'>Editar</button>
                </div>
            </form>
        </>
    )
}

export default Edit;