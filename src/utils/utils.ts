import {config} from "./Config";
import {useNavigate} from "react-router-dom";
import {UpiApps} from "./models";

export const useNavigateToDonation = () => {
    const navigate = useNavigate();
    return () => navigate(config.getMenuItemRoute('Donation'));
}

export const getUpiAppLink = (appType: UpiApps) => {
    let url ="";
    switch (appType) {
        case UpiApps.PHONEPE:
            url = config.getPhonepeLink();
            break;
        case UpiApps.GPAY:
            url = config.getGpayLink();
            break;
        case UpiApps.PAYTM:
            url = config.getPtmLink();
            break;
        case UpiApps.UPI:
        default:
            url = config.getUpiLink();
    }
    return url;
}