import IOverLayerGroupOption from '../interface/IOverLayerGroupOption';
import Label from '../Overlays/Label';
import FeatureReduction from './FeatureReduction';
import Overlayerbase from './Overlayerbase';
export default class OverlayGroup {
    uuid: string;
    type: any;
    overlayers: Overlayerbase[];
    overlaytype: string;
    datafiled: any;
    style: any;
    label: Label;
    frreduction: FeatureReduction;
    constructor(olayers: Overlayerbase[], overLayerGroupOption: IOverLayerGroupOption);
}
