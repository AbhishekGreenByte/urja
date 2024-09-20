import React, {ReactNode} from "react";
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
    GPAY = "GPay",
    PAYTM = "Paytm",
    UPI = "UPI"
}

export interface QRCodeGeneratorProps {
    link: string;
}

export interface IFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface IFormErrors {
    email?: string;
    name?: string;
}

export interface IContact {
    address: string;
    phoneLabel: string;
    phone: number
    email: string;
    alternativePhoneLabel: string;
    alternativePhone: number;
}

export interface ITeamMember{
    id:string,
    name:string,
    role:string,
    responsibility:string,
    image:string,
    details:string
}

export interface IAccordian {
    title: string;
    children: ReactNode;
    defaultClose?:boolean;
}

export interface ITeamMemberCardProps {
    member: ITeamMember;
    onClick: (member: ITeamMember) => void;
}

export interface IDialogProps {
    member: ITeamMember;
    onClose: () => void;
}