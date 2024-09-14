import {IMenuBar} from "../utils/models";
import { Link } from "react-router-dom";
import {config} from "../utils/Config";

const MenuBar:React.FC<IMenuBar> = (props) => {
    return (
        <div className="flex items-center md:gap-16 p-2">
            {
                config.getMenuItems().map((item, index) => {
                    return (
                        <div key={index} className={`cursor-pointer text-primary hover:text-secondary hover:text-lg ${props.active && props.active === item ? 'text-error':'' }`}>
                            <Link to={config.getMenuItemRoute(item)}>{item}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default MenuBar;