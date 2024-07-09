interface User {
    id: number;
    nameUser: string;
    lastNameUser: string;
}

interface UserListProps {
    users: User[];
}

const UserList = ({ users }: UserListProps) => {
    return (
        <section>
            {users.length > 0 ? (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.nameUser} {user.lastNameUser}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay elementos</p>
            )}
        </section>
    );
};

export default UserList;
