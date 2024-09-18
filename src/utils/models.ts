import React from "react";
import {IconType} from "react-icons/lib/iconBase";

export interface IPage {
    label: string,
    router: string,
    showMenu: boolean,
    component: React.ComponentType
    icon?: IconType
}

export interface INavBarProps {
    active?: string
}