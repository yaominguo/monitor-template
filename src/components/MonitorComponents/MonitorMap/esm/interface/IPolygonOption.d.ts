import LngLat from '../common/LngLat';
import IOverlayerOptions from './IOverlayerOptions';
export default interface IPolygonOption extends IOverlayerOptions {
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
}
