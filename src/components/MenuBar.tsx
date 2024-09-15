import {IMenuBar} from "../utils/models";
import { Link } from "react-router-dom";
import {config} from "../utils/Config";

const MenuBar:React.FC<IMenuBar> = (props) => {
    switch (props.type) {
        case "column":
            return (
                <div className="flex items-center md:gap-16 p-2 text-primary">
                    {
                        config.getMenuItems().map((item, index) => {
                            return (
                                <div key={index}
                                     className={`cursor-pointer hover:text-secondary ${props.active && props.active === item ? 'text-error' : ''}`}>
                                    <Link to={config.getMenuItemRoute(item)}>{item}</Link>
                                </div>
                            )
                        })
                    }
                </div>
            );
        default:
            return (
                <div className="w-full z-1000">
                    <div className="flex  flex-col justify-center items-center gap-6 pt-6">
                        {
                            config.getMenuItems().map((item, index) => {
                                return (
                                    <div className="w-full text-white" key={index}>
                                        <Link to={config.getMenuItemRoute(item)}>
                                            <div className="flex items-center  justify-center w-full cursor-pointer border rounded-lg bg-lightPrimary">
                                                <div className={` p-2  ${props.active && props.active === item ? 'text-gray-200' : ''}`}>
                                                    {item}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>

            )
    }

}
export default MenuBar;