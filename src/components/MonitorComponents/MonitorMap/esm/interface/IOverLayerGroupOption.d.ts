import FeatureReduction from '../Overlays/FeatureReduction';
import Label from '../Overlays/Label';
export default interface IOverLayerGroupOption {
    overlaytype?: string;
    datafiled?: any;
    style: any;
    label: Label;
    frreduction?: FeatureReduction;
}
