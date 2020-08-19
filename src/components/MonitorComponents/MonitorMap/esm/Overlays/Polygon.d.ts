import LngLat from '../common/LngLat';
import IPolygonOption from '../interface/IPolygonOption';
import Overlayerbase from './Overlayerbase';
export default class Polygon extends Overlayerbase {
    paths: LngLat[];
    symboltype: string;
    fillColor: string;
    strokeColor: string;
    style: string;
    strokeWeight: number;
    url: string;
    picwidth: number;
    picheight: number;
    strokestyle: string;
    constructor(ploption: IPolygonOption);
}
