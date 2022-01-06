import React, { FC, useReducer, useState } from "react";
import ReactModal from "react-modal";
// import "./Registration.css";
// import ModalPr


const userReducer = (state: any, action: any) => {
    switch (action.type) {
        case "userName":
            return { ...state, userName: action.payload };
        case "password":
            return { ...state, password: action.payload };
        case "passwordConfirm":
            return { ...state, passwordConfirm: action.payload };
        case "email":
            return { ...state, email: action.payload };
        case "resultMsg":
            return { ...state, resultMsg: action.payload };
        default:
            return { ...state, resultMsg: "A failure has occurred." };
    }
};

export interface RegistrationProps {
    isOpen: boolean;
    onClickToggle: (
        e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
    ) => void;
}

const Registration: FC<RegistrationProps> = ({ isOpen, onClickToggle }) => {
    const [isRegisterDisabled, setRegisterDiesabled] = useState(true);
    const [
        { userName, password, email, passwordConfirm, resultMsg },
        dispatch,
    ] = useReducer(userReducer, {
        userName: "davec",
        password: "",
        email: "admin@dzhaven.com",
        passwordConfirm: "",
        resultMsg: "",
    });

    const allowRegister = (msg: string, setDisabled: boolean) => {
        setRegisterDiesabled(setDisabled);
        dispatch({ payload: msg, type: "resultMsg" });
    };

    const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ payload: e.target.value, type: "userName"});
        if (!e.target.value) 
            allowRegister("Username cannot be empty", true);
        else 
            allowRegister("", false);
    };

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ payload: e.target.value, type: "email" });
        if (!e.target.value) allowRegister("Email cannot be empty", true);
        else allowRegister("", false);
    };
}

export default Registration;