import React, { useState } from "react";

const Useritem = (props) => {
    const [isBackground, setBackground] = useState(false);
    function changeColor() {
        setBackground(!isBackground);
    }

    return (
        <div
            className="user"
            style={{
                backgroundColor: isBackground
                    ? "rgb(194, 194, 194)"
                    : "rgb(228, 228, 228)",
            }}
        >
            <div className="user__btns">
                <input type="checkbox" onChange={changeColor} />
            </div>
            <div className="user__content">
                <div className="user-name">
                    {props.user.firstName} {props.user.lastName}
                </div>
                <img alt="" src={props.user.image} />
                <div>{props.user.university}</div>
                <div>{props.user.phone}</div>
            </div>
        </div>
    );
};

export default Useritem;
