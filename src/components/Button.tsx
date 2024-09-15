import {IButtonProps} from "../utils/models";

const Button:React.FC<IButtonProps> = (props) => {
    let textSize = 'text-normal';
    if (props.textSize){
        textSize = props.textSize;
    }
    switch (props.type){
        case 'blue':
            return (
                <button className={`py-2 rounded-lg bg-primary text-white p-4 hover:bg-lightPrimary cursor-pointer ${textSize}`} onClick = {props.onClick}>{props.text}</button>
            )
        case 'white':
            return (
                <button className={`py-2 p-4 border border-primary text-primary rounded-lg bg-white hover:bg-successLight cursor-pointer ${textSize}`} onClick = {props.onClick}>{props.text}</button>
            )
        case 'borderless':
        default:
            return (
                <button className={`py-2 p-4 text-primary rounded-lg bg-white cursor-pointer ${textSize}`} onClick = {props.onClick}>{props.text}</button>
            )
    }
}

export default Button;