import LngLat from '../common/LngLat';
import IPolylineOption from '../interface/IPolylineOption';
import Overlayerbase from './Overlayerbase';
export default class Polyline extends Overlayerbase {
    path: LngLat[];
    cap: string;
    strokeColor: string;
    style: string;
    lineJoin: string;
    width: number;
    constructor(ploption: IPolylineOption);
}
