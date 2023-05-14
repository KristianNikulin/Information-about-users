import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import MyButton from "./UI/button/MyButton";
import UserForm from "./UserForm";
import UserFilter from "./UserFilter";
import MyModal from "./UI/modal/MyModal";
import { useUsers } from "../hooks/useUsers";
import Table from "./Table";
import UserTableFilter from "./UserTableFilter";
import UserService from "./API/UserService";
import Loader from "./UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

const Project = () => {
    const [users, setUsers] = useState([]);

    const [filter, setFilter] = useState({ sort: "", query: "" });

    const [modal, setModal] = useState(false);

    const [selectedButton, setSelectedButton] = useState(1);

    const [fetchUsers, isUsersLoading] = useFetching(async () => {
        const users = await UserService.getAll();
        setUsers(users);
        console.log(users);
    });

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleButtonClick = (buttonIndex) => {
        setSelectedButton(buttonIndex);
    };

    const sortedAndSearchedUsers = useUsers(users, filter.sort, filter.query);

    const createUser = (newUser) => {
        setUsers([...users, newUser]);
        setModal(false);
    };

    const removeUser = (user) => {
        setUsers(users.filter((p) => p.id !== user.id));
    };

    return (
        <div className="App">
            <MyButton
                style={{ marginTop: 30, marginRight: 30 }}
                onClick={() => handleButtonClick(1)}
            >
                Общая таблица
            </MyButton>
            <MyButton
                style={{ marginTop: 30, marginRight: 30 }}
                onClick={() => handleButtonClick(2)}
            >
                Список карточек пользователей
            </MyButton>
            <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
                Добавить пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <UserForm create={createUser} />
            </MyModal>

            {selectedButton === 1 ? (
                <div>
                    <UserTableFilter filter={filter} setFilter={setFilter} />
                    <Table
                        users={sortedAndSearchedUsers}
                        title={"Общая таблица"}
                    />
                </div>
            ) : null}
            {selectedButton === 2 ? (
                <div>
                    <UserFilter filter={filter} setFilter={setFilter} />
                    <UserList
                        remove={removeUser}
                        users={sortedAndSearchedUsers}
                        title={"Список карточек пользователей"}
                    />
                </div>
            ) : null}

            {isUsersLoading ? (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: 50,
                    }}
                >
                    <Loader />
                </div>
            ) : null}
        </div>
    );
};

export default Project;
