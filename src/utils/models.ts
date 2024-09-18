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

export interface IImageJson{
    name:string,
    url:string
}

export interface IPaymentDetails{
    upi: string,
    name: string,
    bank: string,
    ifsc: string,
    accountNumber: string,
    mobile: string,
    contact: string,
    email: string,
    address: string
}

export enum UpiApps {
    PHONEPE = "PhonePe",
    GPAY = "Google Pay",
    PAYTM = "Paytm",
    WHATSAPP = "WhatsApp"
}