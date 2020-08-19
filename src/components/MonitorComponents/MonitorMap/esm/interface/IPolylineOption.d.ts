import LngLat from '../common/LngLat';
import IOverlayerOptions from './IOverlayerOptions';
export default interface IPolylineOption extends IOverlayerOptions {
    path: LngLat[];
    cap: string;
    strokeColor: string;
    style: string;
    lineJoin: string;
    width: number;
}
