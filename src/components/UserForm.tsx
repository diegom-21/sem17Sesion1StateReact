import { useState } from 'react';

interface UserFormProps {
    onCreateUser: (nameUser: string, lastNameUser: string) => void;
}

const UserForm = ({ onCreateUser }: UserFormProps ) => {
    const [nameUser, setNameUser] = useState('');
    const [lastNameUser, setLastNameUser] = useState('');

    const handleSubmit = () => {
        onCreateUser(nameUser, lastNameUser);
        setNameUser(''); //Para reiniciar input
        setLastNameUser(''); //Para reiniciar input
    };

    return (
        <section>
            <div>
                <label>Ingrese nombre </label>
                <input
                    onChange={(e) => setNameUser(e.target.value)}
                    value={nameUser}
                    type="text"
                    placeholder='Nombre'
                />
            </div>
            <div>
                <label>Ingrese apellido </label>
                <input
                    onChange={(e) => setLastNameUser(e.target.value)}
                    value={lastNameUser}
                    type="text"
                    placeholder='Apellido'
                />
            </div><br />
            <button onClick={handleSubmit} type='button'>
                Agregar
            </button>
        </section>
    );
};

export default UserForm;
