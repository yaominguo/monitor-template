import Bounds from './Bounds';
import LngLat from './common/LngLat';
import BasemapToggle from './control/BasemapToggle';
import BMapGallery from './control/BMapGallery';
import Compass from './control/Compass';
import Fullscreen from './control/Fullscreen';
import Home from './control/Home';
import LayerListControl from './control/LayerListControl';
import MeasureArea from './control/MeasureArea';
import MeasureLine from './control/MeasureLine';
import UndergroundSwitch from './control/UndergroundSwitch';
import Zoom from './control/Zoom';
import Map from './Map';
import FeatureReduction from './Overlays/FeatureReduction';
import Icon from './Overlays/Icon';
import Label from './Overlays/Label';
import Marker from './Overlays/Marker';
import OverlayGroup from './Overlays/OverlayGroup';
import Polygon from './Overlays/Polygon';
import Polyline from './Overlays/Polyline';
import Size from './Overlays/Size';
// import {
//   load
// } from './modules';
import MapEvent from './utils/MapEvent';
export default {
    // load,
    Bounds: Bounds,
    LayerListControl: LayerListControl,
    Zoom: Zoom,
    Home: Home,
    Compass: Compass,
    Fullscreen: Fullscreen,
    MeasureArea: MeasureArea,
    MeasureLine: MeasureLine,
    BasemapToggle: BasemapToggle,
    BMapGallery: BMapGallery,
    UndergroundSwitch: UndergroundSwitch,
    Marker: Marker,
    Icon: Icon,
    Size: Size,
    Label: Label,
    FeatureReduction: FeatureReduction,
    OverlayGroup: OverlayGroup,
    LngLat: LngLat,
    Polyline: Polyline,
    Polygon: Polygon,
    MapEvent: MapEvent,
    Map: Map
};
