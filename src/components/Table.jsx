import React, {useState} from "react";
import Tableitem from "./TableItem";

const Table = ({ users, title }) => {
    const [selectedUsers, setSelectedUsers] = useState([]);
    
    function toggleAll() {
        selectedUsers.length ? setSelectedUsers([]) : setSelectedUsers(users.map((user, index) => user.id))
    }

    function toggleUser(id){
        console.log(id, selectedUsers.includes(id));
        selectedUsers.includes(id) ? setSelectedUsers(prev=>prev.filter(user=>user !== id)) : setSelectedUsers(prev=>[...prev, id])
    }

    if (!users.length) {
        return (
            <h1 style={{ textAlign: "center" }}>
                Пользователей по такому запросу в таблице нет!
            </h1>
        );
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{title}</h1>
            <table>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" onChange={toggleAll} />
                        </th>
                        <th>Полное имя</th>
                        <th>Учетная запись</th>
                        <th>Электронная почта</th>
                        <th>Группа</th>
                        <th>Номер телефона</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <Tableitem toggleUser={toggleUser} selected={selectedUsers.includes(user.id)} user={user} key={user.id} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
