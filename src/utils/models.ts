import React from "react";

export interface IButtonProps {
    text: string,
    onClick: ()=>void,
    type?: 'blue' | 'white'
}

export interface IMenuBar {
    dataItems: string[],
    activeIndex: number,
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