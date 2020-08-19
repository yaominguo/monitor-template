import IMarkOptions from '../interface/IMarkOptions';
import Icon from '../Overlays/Icon';
import Overlayerbase from './Overlayerbase';
export default class Marker extends Overlayerbase {
    icon: Icon;
    position: [number, number, number?];
    constructor(markeroption: IMarkOptions);
}
