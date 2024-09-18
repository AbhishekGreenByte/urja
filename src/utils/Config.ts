import Contact from "../pages/Contact";
import About from "../pages/About";
import Home from "../pages/Home";
import Events from "../pages/Events";
import {IImageJson, IPage, IPaymentDetails} from "./models";
import Donate from "../pages/Donate";
import {FaHome, FaCalendarAlt, FaInfoCircle, FaEnvelope, FaBars, FaDonate} from 'react-icons/fa';
import {IconType} from "react-icons/lib/iconBase";
import imageData from '../resources/images.json';
import paymentDetails from '../resources/upiDetails.json';

class Config {
    private static _instance: Config;

    private constructor() {
        // private constructor to prevent instantiation
        this.imageJson = new Map<string, IImageJson>();
        this.loadImageJson();
        this.paymentDetails = paymentDetails;
    }

    private companyName = "URJA";
    private paymentDetails: IPaymentDetails;

    private defaultRoute = "/";
    private routerPrefix = "/urja";
    private donate ="Donate";
    private imageJson:Map<string,IImageJson>;

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
        return this.routerPrefix + (this.components.get(name)?.router || this.defaultRoute);
    }

    public getAllPages():string[] {
        return Array.from(this.components.keys());
    }

    public getCompanyName(): string {
        return this.companyName;
    }

    public getDefaultRoute(): string {
        return this.routerPrefix + this.defaultRoute;
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
        console.log("dssd",imageData)
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

}

export const config = Config.getInstance();