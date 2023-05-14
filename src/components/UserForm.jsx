import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const UserForm = ({ create }) => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        university: "",
        phone: "",
    });

    const addNewUser = (e) => {
        e.preventDefault();

        const newUser = {
            ...user,
            id: Date.now(),
        };

        create(newUser);
        setUser({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            university: "",
            phone: "",
        });
    };

    return (
        <form>
            <MyInput
                value={user.firstName}
                onChange={(e) =>
                    setUser({ ...user, firstName: e.target.value })
                }
                type="text"
                placeholder="Имя пользователя"
            />
            <MyInput
                value={user.secondName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                type="text"
                placeholder="Фамилия пользователя"
            />
            <MyInput
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                type="text"
                placeholder="Учетная запись"
            />
            <MyInput
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="text"
                placeholder="Электронная почта"
            />

            <MyInput
                value={user.university}
                onChange={(e) =>
                    setUser({
                        ...user,
                        university: e.target.value ,
                    })
                }
                type="text"
                placeholder="Название группы"
            />
            <MyInput
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
                type="text"
                placeholder="Номер телефона"
            />
            <MyButton onClick={addNewUser}>Добавить пользователя</MyButton>
        </form>
    );
};

export default UserForm;
