import React from 'react';
import "./button.css";


export type ButtonSize = "bg" | "md" | "sm";
export type ButtonColor = "primary" | "secondary" | "success" | "danger" | "error";

export interface ButtonProps {
    size: ButtonSize;
    color: ButtonColor;
    onClick: (e:React.MouseEvent)=>void;
}

export default function Button(props: ButtonProps) {
    const {size,color,onClick} = props;

    return (
        <button className={`btn btn--${size} btn--${color}`} onClick={onClick}>Button</button>
    )
}

Button.defaultProps = {
    size: "md",
    color: "primary",
    onClick: ()=>{}
}