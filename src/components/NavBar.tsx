import Button from "./Button";
import {config} from "../utils/Config";
import {INavBar} from "../utils/models";
import MenuBar from "./MenuBar";
import {useState} from "react";

const NavBar:React.FC<INavBar> = (props) => {
    let [buttonIcon,setButtonIcon] = useState("☰");

    const toggleMenu = () => {
        const menu = document.getElementById('menu-chart');
        if (menu){
            if (menu.classList.contains('block')){
                menu.classList.remove('block');
                menu.classList.add('hidden');
                setButtonIcon("☰");
            }else{
                menu.classList.remove('hidden');
                menu.classList.add('block');
                setButtonIcon("✖");
            }
        }
    }
    return (
        <div className="w-full bg-bgLight col flex items-center flex-col absolute top-0 z-10 bg-white shadow-lg">
            <div className="w-full max-w-screen-xl h-20 px-2">
                <div className="w-full h-full flex items-center justify-between ">
                    {/*Logo Section*/}
                    <div>
                        {config.getCompanyName()}
                    </div>
                    {/*Menu Section*/}
                    <div className="hidden md:block">
                        <MenuBar active={props.active} type='column'/>
                    </div>
                    {/*Support Button*/}
                    <div>
                        <div className="flex items-center">
                            <Button text={"Give Support >"} onClick={() => {
                            }} type="blue"></Button>
                            <span className="block md:hidden">
                                <Button  text={buttonIcon} onClick={toggleMenu} textSize="text-2xl"></Button>
                            </span>

                        </div>

                    </div>
                </div>
            </div>
            <div className="hidden md:hidden w-full max-w-screen-xl h-[300px] px-2 z-10 bg-gray-50" id='menu-chart'>
                <MenuBar active={props.active} type='row'/>
            </div>
        </div>
    )
}
export default NavBar;