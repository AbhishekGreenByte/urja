import Button from "./Button";
import {config} from "../utils/Config";
import {INavBar} from "../utils/models";
import MenuBar from "./MenuBar";

const NavBar:React.FC<INavBar> = (props) => {
    let active = props.active ? config.getMenuItems().indexOf(props.active): 0 ;
    return (
        <div className="w-full bg-bgLight col h-20 flex items-center flex-col">
            <div className="w-full max-w-screen-xl h-full">
                <div className="w-full h-full flex items-center justify-between ">
                    {/*Logo Section*/}
                    <div>
                        {config.getCompanyName()}
                    </div>
                    {/*Menu Section*/}
                    <div>
                        <MenuBar dataItems={config.getMenuItems()} activeIndex={active}/>
                    </div>
                    {/*Support Button*/}
                    <Button text={"Give Support >"} onClick={()=>{}} type="blue" ></Button>
                </div>
            </div>
        </div>
    )
}
export default NavBar;