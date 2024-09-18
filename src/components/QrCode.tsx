import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {QRCodeGeneratorProps} from "../utils/models";


const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = (props) => {
    return (
        <QRCodeSVG value={props.link} size={256} className="w-48 h-48 rounded-lg shadow-md"/>
    );
};

export default QRCodeGenerator;
