import Contact from "../pages/Contact";
import About from "../pages/About";
import Home from "../pages/Home";
import Services from "../pages/Services";
import {IPage} from "./models";

class Config {
    private static _instance: Config;

    private constructor() {
        // private constructor to prevent instantiation
    }

    private companyName = "URJA";
    private defaultRoute = "/";
    private routerPrefix = "/urja";
    private components: Map<string, IPage> = new Map([
        ['Default', {label: 'Default', router: '/', showMenu: false, component: Home}],
        ['Home', {label: 'Home', router: '/home', showMenu: true, component: Home}],
        ['About', {label: 'About', router: '/about', showMenu: true, component: About}],
        ['Contact', {label: 'Contact', router: '/contact', showMenu: true, component: Contact}],
        ['Services', {label: 'Services', router: '/services', showMenu: true, component: Services}],
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

}

export const config = Config.getInstance();