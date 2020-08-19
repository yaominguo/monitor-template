import IOverlayerOptions from '../interface/IOverlayerOptions';
import Label from '../Overlays/Label';
export default class Overlayerbase {
    overlaytype: string;
    uuid: string;
    type: any;
    label: Label;
    attributes: any;
    constructor(overlayeroption: IOverlayerOptions);
}
