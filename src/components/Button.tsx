import {IButtonProps} from "../utils/models";

const Button:React.FC<IButtonProps> = (props) => {
    switch (props.type){
        case 'blue':
            return (
                <button className={`py-2 rounded-lg bg-primary text-white p-4 hover:bg-lightPrimary cursor-pointer`} onClick = {props.onClick}>{props.text}</button>
            )
        case 'white':
        default:
            return (
                <button className={`py-2 p-4 border border-primary text-primary rounded-lg bg-white hover:bg-successLight cursor-pointer`} onClick = {props.onClick}>{props.text}</button>
            )

    }
}

export default Button;