import Contact from "../pages/Contact";
import About from "../pages/About";
import Home from "../pages/Home";
import Events from "../pages/Events";
import {IContact, IFormData, IImageJson, IPage, IPaymentDetails, ITeamMember} from "./models";
import Donate from "../pages/Donate";
import {FaHome, FaCalendarAlt, FaInfoCircle, FaEnvelope, FaBars, FaDonate} from 'react-icons/fa';
import {IconType} from "react-icons/lib/iconBase";
import imageData from '../resources/images.json';
import paymentDetails from '../resources/upiDetails.json';
import contactJson from '../resources/contact.json';
import teamJson from '../resources/team.json';

class Config {
    private static _instance: Config;

    private constructor() {
        // private constructor to prevent instantiation
        this.imageJson = new Map<string, IImageJson>();
        this.loadImageJson();
        this.paymentDetails = paymentDetails;
        this.contact = contactJson;
        this.teamJson = teamJson;
    }

    private companyName = "URJA";
    private paymentDetails: IPaymentDetails;
    private phonepeLink = 'phonepe://upi/pay?pa={PAYEE_UPI}&pn={PAYEE_NAME}&cu=INR';
    private upiLink = 'upi://pay?pa={PAYEE_UPI}&pn={PAYEE_NAME}&cu=INR'
    private gpayLink = 'tez://upi/pay?pa={PAYEE_UPI}&pn={PAYEE_NAME}&cu=INR';
    private paytmLink = 'paytm://upi/pay?pa={PAYEE_UPI}&pn={PAYEE_NAME}&cu=INR';


    private defaultRoute = "/";
    private routerPrefix = "/urja";
    private donate ="Donate";
    private imageJson:Map<string,IImageJson>;
    private contact:IContact;
    private teamJson: Array<ITeamMember>;
    private gformLink = "https://docs.google.com/forms/d/e/1FAIpQLScWk09-hN1a9iARyau6BBzBwMy913tlZa_sqUR8prvHmYTIGA/formResponse?usp=pp_url&entry.1148126186={NAME}&entry.1926984491={EMAIL}&entry.1008393767={PHONE}&entry.1460546303={MESSAGE}";

    private components: Map<string, IPage> = new Map([
        ['Default', {label: 'Default', router: '/', showMenu: false, component: Home}],
        ['Home', {label: 'Home', router: '/home', showMenu: true, component: Home, icon: FaHome}],
        ['Events', {label: 'Events', router: '/events', showMenu: true, component: Events, icon: FaCalendarAlt}],
        ['About', {label: 'About', router: '/about', showMenu: true, component: About, icon: FaInfoCircle}],
        ['Contact', {label: 'Contact', router: '/contact', showMenu: true, component: Contact, icon: FaEnvelope}],
        ['Donate', {label: 'Donate', router: '/donate', showMenu: false, component: Donate, icon: FaDonate}]
    ]);


    static getInstance(): Config {
        if (!Config._instance) {
            Config._instance = new Config();
        }
        return Config._instance;
    }

    public getMenuItems(): string[] {
        // allow only items that have showMenu set to true
        return Array.from(this.components.values()).filter(item => item.showMenu).map(item => item.label);
    }

    public getDonateString(): string {
        return this.donate;
    }

    public getMenuItemRoute(name:string): string {
        return this.components.get(name)?.router || this.defaultRoute;
    }

    public getAllPages():string[] {
        return Array.from(this.components.keys());
    }

    public getCompanyName(): string {
        return this.companyName;
    }

    public getDefaultRoute(): string {
        return this.defaultRoute;
    }

    public getComponent(name: string): React.ComponentType | undefined {
       // Return the component if it exists
        return this.components.get(name)?.component;
    }

    public getIcon(name: string): IconType | undefined {
        return this.components.get(name)?.icon;
    }

    public loadImageJson(){
        this.imageJson.clear();
        imageData.images.forEach((item: IImageJson) => {
            this.imageJson.set(item.name, item);
        });
    }

    public getImageUrl(name:string):string{
        return this.imageJson.get(name)?.url || "";
    }

    public getPaymentDetails(): IPaymentDetails {
        return this.paymentDetails;
    }

    public getPhonepeLink(): string {
        return this.phonepeLink
            .replace('{PAYEE_UPI}',this.paymentDetails.upi)
            .replace('{PAYEE_NAME}',this.paymentDetails.name);
    }

    public getUpiLink(): string {
        return this.upiLink
            .replace('{PAYEE_UPI}',this.paymentDetails.upi)
            .replace('{PAYEE_NAME}',this.paymentDetails.name);
    }

    public getGpayLink(): string {
        return this.gpayLink
            .replace('{PAYEE_UPI}',this.paymentDetails.upi)
            .replace('{PAYEE_NAME}',this.paymentDetails.name);
    }

    public getPtmLink(): string {
        return this.paytmLink
            .replace('{PAYEE_UPI}',this.paymentDetails.upi)
            .replace('{PAYEE_NAME}',this.paymentDetails.name);
    }

    public getContact():IContact{
        return this.contact;
    }

    public getTeamMembers():Array<ITeamMember>{
        return this.teamJson;
    }

    public getGFormLinkUrl(formData:IFormData):string{
        return this.gformLink
            .replace('{NAME}',formData.name)
            .replace('{EMAIL}',formData.email)
            .replace('{MOBILE}',formData.mobile)
            .replace('{MESSAGE}',formData.message);
    }

}

export const config = Config.getInstance();