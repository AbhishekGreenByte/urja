import React from "react";

export interface IButtonProps {
    text: string,
    onClick: ()=>void,
    type?: string,
    textSize?: string
}

export interface IMenuBar {
    active?: string,
    type: 'row' | 'column',
}

export interface INavBar {
    active?: string
}

export interface IPage {
    label: string,
    router: string,
    showMenu: boolean,
    component: React.ComponentType
}