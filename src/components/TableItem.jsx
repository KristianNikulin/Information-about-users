import React from "react";

const Tableitem = ({user, selected, toggleUser}) => {
    return (
        <tr
            key={user.id}
            style={{
                backgroundColor: selected && "rgb(111, 162, 255)"
            }}
        >
            <td>
                <input type="checkbox" checked={selected} onChange={()=>toggleUser(user.id)} />
            </td>
            <td>
                {user.firstName} {user.lastName}
            </td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.university}</td>
            <td>{user.phone}</td>
        </tr>
    );
};

export default Tableitem;
