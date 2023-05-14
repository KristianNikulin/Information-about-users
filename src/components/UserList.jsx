import React from "react";
import Useritem from "./Useritem";

const UserList = ({ users, title, remove }) => {
    if (!users.length) {
        return (
            <h1 style={{ textAlign: "center" }}>
                Пользователей по такому запросу в списке нет!
            </h1>
        );
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{title}</h1>
            <div className="user-container">
                {users.map((user, index) => (
                    <Useritem
                        remove={remove}
                        number={index + 1}
                        user={user}
                        key={user.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default UserList;
