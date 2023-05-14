import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const UserFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={(e) =>
                    setFilter({ ...filter, query: e.target.value })
                }
                placeholder="Поиск..."
            />
            <MySelect
                value={filter.sort}
                onChange={(selectedSort) =>
                    setFilter({ ...filter, sort: selectedSort })
                }
                defaultValue="Сортировка"
                options={[
                    { value: "firstName", name: "По имени" },
                    { value: "username", name: "По учетной записи" },
                    { value: "email", name: "По почте" },
                    { value: "university", name: "По группе" },
                    { value: "phone", name: "По телефону" },
                ]}
            />
        </div>
    );
};

export default UserFilter;
