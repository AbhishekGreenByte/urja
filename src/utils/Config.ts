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

    private companyName = "My Company";
    private defaultRoute = "/";
    private pageComponent = [

    ]
    private components: Map<string, IPage> = new Map([
        ['Home', {label: 'Home', router: '/', showMenu: true, component: Home}],
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
        return this.components.get(name)?.router || this.defaultRoute;
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

}

export const config = Config.getInstance();