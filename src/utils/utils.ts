import {config} from "./Config";
import {useNavigate} from "react-router-dom";
import {UpiApps} from "./models";

export const useNavigateToDonation = () => {
    const navigate = useNavigate();
    return () => navigate(config.getMenuItemRoute('Donation'));
}