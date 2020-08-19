var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import Mapcofig from './config/Mapcofig';
import { load } from './modules';
import { init2DBaseMaplayers, init3DBaseMaplayers, initbuildingsLayers, initsmapbussinesslayers } from './utils/initlayers';
export function init3Dmap(containerv, gisService, proxyConifg, maptoken, mapoptions) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, Map, Basemap, Camera, Point, Extent, urlUtils, esriConfig, SceneLayer, SHCTiledMapServiceLayer, 
        // tslint:disable-next-line:variable-name
        IdentityManager, SpatialReference, LayerList, Fullscreen, MeasureMent3DTool, MeasureMent2DTool, 
        // tslint:disable-next-line:variable-name
        DistanceMeasureMentButton3D, AreaMeasureMentButton3D, 
        // tslint:disable-next-line:variable-name
        DistanceMeasureMentButton2D, AreaMeasureMentButton2D, BaseMapSwitchButton3D, BaseMapSwitchButton2D, 
        // tslint:disable-next-line:variable-name
        AddressLocationSearch, AboveBelowModeSwitch, 
        // tslint:disable-next-line:variable-name
        MapSceneViewSwitch3DDefault, MapSceneViewSwitch2DDefault, 
        // tslint:disable-next-line:variable-name
        Expand, Zoom, Compass, Home, watchUtils, SceneView, basemaplayers, bmap, mapv, buildingsLayers, viewMode, smapbussinesslayers, sceneView, cameraheading, flyanimation;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, load([
                        'esri/Map',
                        'esri/Basemap',
                        'esri/Camera',
                        'esri/geometry/Point',
                        'esri/geometry/Extent',
                        'esri/core/urlUtils',
                        'esri/config',
                        'esri/layers/SceneLayer',
                        'esri/layers/SHCTiledMapServiceLayer',
                        'esri/identity/IdentityManager',
                        'esri/geometry/SpatialReference',
                        'esri/widgets/LayerList',
                        'esri/widgets/Fullscreen',
                        'esri/widgets/MeasureMent3DTool',
                        'esri/widgets/MeasureMent2DTool',
                        'esri/widgets/DistanceMeasureMentButton3D',
                        'esri/widgets/AreaMeasureMentButton3D',
                        'esri/widgets/DistanceMeasureMentButton2D',
                        'esri/widgets/AreaMeasureMentButton2D',
                        'esri/widgets/BaseMapSwitchButton3D',
                        'esri/widgets/BaseMapSwitchButton2D',
                        'esri/widgets/AddressLocationSearch',
                        'esri/widgets/AboveBelowModeSwitch',
                        'esri/widgets/MapSceneViewSwitch3DDefault',
                        'esri/widgets/MapSceneViewSwitch2DDefault',
                        'esri/widgets/Expand',
                        'esri/widgets/Zoom',
                        'esri/widgets/Compass',
                        'esri/widgets/Home',
                        'esri/core/watchUtils',
                        'esri/views/SceneView'
                    ])];
                case 1:
                    _a = _b.sent(), Map = _a[0], Basemap = _a[1], Camera = _a[2], Point = _a[3], Extent = _a[4], urlUtils = _a[5], esriConfig = _a[6], SceneLayer = _a[7], SHCTiledMapServiceLayer = _a[8], IdentityManager = _a[9], SpatialReference = _a[10], LayerList = _a[11], Fullscreen = _a[12], MeasureMent3DTool = _a[13], MeasureMent2DTool = _a[14], DistanceMeasureMentButton3D = _a[15], AreaMeasureMentButton3D = _a[16], DistanceMeasureMentButton2D = _a[17], AreaMeasureMentButton2D = _a[18], BaseMapSwitchButton3D = _a[19], BaseMapSwitchButton2D = _a[20], AddressLocationSearch = _a[21], AboveBelowModeSwitch = _a[22], MapSceneViewSwitch3DDefault = _a[23], MapSceneViewSwitch2DDefault = _a[24], Expand = _a[25], Zoom = _a[26], Compass = _a[27], Home = _a[28], watchUtils = _a[29], SceneView = _a[30];
                    if (proxyConifg.useProxy) {
                        proxyConifg.httpsDomains.map(function (item) {
                            urlUtils.addProxyRule({
                                proxyUrl: item.proxyUrl,
                                urlPrefix: item.domainName
                            });
                        });
                    }
                    esriConfig.geometryServiceUrl = gisService.geometryServiceUrl;
                    if (maptoken !== '') {
                        IdentityManager.registerToken({
                            server: gisService.serverurl,
                            token: maptoken
                        });
                    }
                    IdentityManager.on('dialog-create', function () {
                        IdentityManager.dialog.open = true;
                    });
                    return [4 /*yield*/, init3DBaseMaplayers(gisService.baseMapServices.layers, maptoken)];
                case 2:
                    basemaplayers = _b.sent();
                    bmap = new Basemap({
                        baseLayers: basemaplayers,
                        title: '底图',
                        id: 'basemap_zw'
                    });
                    mapv = new Map({
                        basemap: bmap
                    });
                    return [4 /*yield*/, initbuildingsLayers(gisService.buildingsLayers, maptoken)];
                case 3:
                    buildingsLayers = _b.sent();
                    mapv.add(buildingsLayers);
                    if (mapoptions.mapStyle !== undefined) {
                        switch (mapoptions.mapStyle) {
                            case "smap://styles/normal":
                                mapv.basemap.id = 'basemap_zw';
                                break;
                            case "smap://styles/dark":
                                mapv.basemap.id = 'basemap_as';
                                break;
                            case "smap://styles/image":
                                mapv.basemap.id = 'basemap_air';
                                break;
                            default:
                                mapv.basemap.id = 'basemap_as';
                        }
                        mapv.basemap.baseLayers.items.forEach(function (layer) {
                            // tslint:disable-next-line:prefer-conditional-expression
                            if (layer.id === mapv.basemap.id) {
                                layer.visible = true;
                            }
                            else {
                                layer.visible = false;
                            }
                        });
                        // ['model_white_zw', 'model_air_real', 'model_white_as'].forEach((layname) => {
                        //   const buildingmodel = mapv.findLayerById(layname);
                        //   if (mapoptions.showBuildingBlock === false) {
                        //     buildingmodel.visible = false;
                        //   } else {
                        //   if (buildingmodel) {
                        //     // tslint:disable-next-line:prefer-conditional-expression
                        //     if (mapv.basemap.id === 'basemap_zw') {
                        //       // tslint:disable-next-line:prefer-conditional-expression
                        //       if (layname === 'model_white_zw') {
                        //         buildingmodel.visible = true;
                        //       } else {
                        //         buildingmodel.visible = false;
                        //       }
                        //     } else if (mapv.basemap.id === 'basemap_as') {
                        //       // tslint:disable-next-line:prefer-conditional-expression
                        //       if (layname === 'model_white_as') {
                        //         buildingmodel.visible = true;
                        //       } else {
                        //         buildingmodel.visible = false;
                        //       }
                        //     } else if (mapv.basemap.id === 'basemap_air') {
                        //       // tslint:disable-next-line:prefer-conditional-expression
                        //       if (layname === 'model_air_real') {
                        //         buildingmodel.visible = true;
                        //       } else {
                        //         buildingmodel.visible = false;
                        //       }
                        //     }
                        //   }
                        //   }
                        // });
                    }
                    viewMode = mapoptions.viewMode === undefined || mapoptions.viewMode === '2D' ? '2D' : '3D';
                    return [4 /*yield*/, initsmapbussinesslayers(gisService.smapbussinessLayers.layerGroups, maptoken, viewMode)];
                case 4:
                    smapbussinesslayers = _b.sent();
                    mapv.addMany(smapbussinesslayers);
                    sceneView = new SceneView({
                        map: mapv,
                        container: containerv,
                        spatialReference: {
                            wkid: 102100
                        },
                        viewingMode: 'local'
                    });
                    if (mapoptions.center !== undefined) {
                        sceneView.center = new Point({
                            x: mapoptions.center[0],
                            y: mapoptions.center[1],
                            spatialReference: SpatialReference.WebMercator
                        });
                    }
                    if (mapoptions.zoom !== undefined) {
                        sceneView.zoom = mapoptions.zoom;
                    }
                    if (mapoptions.pitch !== undefined) {
                        cameraheading = 0;
                        flyanimation = sceneView.goTo({
                            center: sceneView.center,
                            zoom: sceneView.zoom,
                            tilt: mapoptions.pitch,
                            heading: cameraheading
                        });
                        watchUtils.when(sceneView, "animation", function (animation) {
                            animation.when(function (anti) {
                                if (mapoptions.zooms !== undefined) {
                                    sceneView.watch("zoom", function (value) {
                                        if (value >= mapoptions.zooms[1]) {
                                            sceneView.zoom = mapoptions.zooms[1];
                                        }
                                        // if (value <= mapoptions.zooms[0]) {
                                        //   sceneView.zoom = mapoptions.zooms[0];
                                        // }
                                    });
                                }
                            }).catch(function (anti) {
                                console.log(anti);
                            });
                        });
                    }
                    sceneView.ui.empty('top-left');
                    sceneView.ui.empty('top-right');
                    sceneView.ui.empty('bottom-left');
                    sceneView.ui.empty('bottom-right');
                    sceneView.padding = {
                        top: 5,
                        bottom: 0,
                        left: 0,
                        right: 5
                    };
                    sceneView.when(function () {
                        sceneView.qualitySettings.memoryLimit = 4096;
                    });
                    return [2 /*return*/, { sceneView: sceneView, mapv: mapv }];
            }
        });
    });
}
export function init2Dmap(containerv, gisService, proxyConifg, maptoken, mapoptions) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, Map, Basemap, Camera, Extent, urlUtils, esriConfig, SceneLayer, TileLayer, 
        // tslint:disable-next-line:variable-name
        IdentityManager, SpatialReference, Point, LayerList, Fullscreen, MeasureMent3DTool, MeasureMent2DTool, 
        // tslint:disable-next-line:variable-name
        DistanceMeasureMentButton3D, AreaMeasureMentButton3D, 
        // tslint:disable-next-line:variable-name
        DistanceMeasureMentButton2D, AreaMeasureMentButton2D, BaseMapSwitchButton3D, BaseMapSwitchButton2D, 
        // tslint:disable-next-line:variable-name
        AddressLocationSearch, AboveBelowModeSwitch, 
        // tslint:disable-next-line:variable-name
        MapSceneViewSwitch3DDefault, MapSceneViewSwitch2DDefault, 
        // tslint:disable-next-line:variable-name
        Expand, Zoom, Compass, Home, MapView, basemaplayers, bmap, mapv, viewMode, smapbussinesslayers, shanghaiSR, mapView;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, load([
                        'esri/Map',
                        'esri/Basemap',
                        'esri/Camera',
                        'esri/geometry/Extent',
                        'esri/core/urlUtils',
                        'esri/config',
                        'esri/layers/SceneLayer',
                        'esri/layers/TileLayer',
                        'esri/identity/IdentityManager',
                        'esri/geometry/SpatialReference',
                        'esri/geometry/Point',
                        'esri/widgets/LayerList',
                        'esri/widgets/Fullscreen',
                        'esri/widgets/MeasureMent3DTool',
                        'esri/widgets/MeasureMent2DTool',
                        'esri/widgets/DistanceMeasureMentButton3D',
                        'esri/widgets/AreaMeasureMentButton3D',
                        'esri/widgets/DistanceMeasureMentButton2D',
                        'esri/widgets/AreaMeasureMentButton2D',
                        'esri/widgets/BaseMapSwitchButton3D',
                        'esri/widgets/BaseMapSwitchButton2D',
                        'esri/widgets/AddressLocationSearch',
                        'esri/widgets/AboveBelowModeSwitch',
                        'esri/widgets/MapSceneViewSwitch3DDefault',
                        'esri/widgets/MapSceneViewSwitch2DDefault',
                        'esri/widgets/Expand',
                        'esri/widgets/Zoom',
                        'esri/widgets/Compass',
                        'esri/widgets/Home',
                        'esri/views/MapView'
                    ])];
                case 1:
                    _a = _b.sent(), Map = _a[0], Basemap = _a[1], Camera = _a[2], Extent = _a[3], urlUtils = _a[4], esriConfig = _a[5], SceneLayer = _a[6], TileLayer = _a[7], IdentityManager = _a[8], SpatialReference = _a[9], Point = _a[10], LayerList = _a[11], Fullscreen = _a[12], MeasureMent3DTool = _a[13], MeasureMent2DTool = _a[14], DistanceMeasureMentButton3D = _a[15], AreaMeasureMentButton3D = _a[16], DistanceMeasureMentButton2D = _a[17], AreaMeasureMentButton2D = _a[18], BaseMapSwitchButton3D = _a[19], BaseMapSwitchButton2D = _a[20], AddressLocationSearch = _a[21], AboveBelowModeSwitch = _a[22], MapSceneViewSwitch3DDefault = _a[23], MapSceneViewSwitch2DDefault = _a[24], Expand = _a[25], Zoom = _a[26], Compass = _a[27], Home = _a[28], MapView = _a[29];
                    if (proxyConifg.useProxy) {
                        proxyConifg.httpsDomains.map(function (item) {
                            urlUtils.addProxyRule({
                                proxyUrl: item.proxyUrl,
                                urlPrefix: item.domainName
                            });
                        });
                    }
                    esriConfig.geometryServiceUrl = gisService.geometryserviceUrl;
                    esriConfig.fontsUrl = Mapcofig.fonts.url;
                    if (maptoken !== '') {
                        IdentityManager.registerToken({
                            server: gisService.serverurl,
                            token: maptoken
                        });
                    }
                    IdentityManager.on('dialog-create', function () {
                        IdentityManager.dialog.open = true;
                    });
                    return [4 /*yield*/, init2DBaseMaplayers(gisService.baseMapServices.layers, maptoken)];
                case 2:
                    basemaplayers = _b.sent();
                    bmap = new Basemap({
                        baseLayers: basemaplayers,
                        title: '底图',
                        id: 'basemap_as'
                    });
                    mapv = new Map({
                        basemap: bmap
                    });
                    if (mapoptions.mapStyle !== undefined) {
                        switch (mapoptions.mapStyle) {
                            case "smap://styles/normal":
                                mapv.basemap.id = 'basemap_zw';
                                break;
                            case "smap://styles/dark":
                                mapv.basemap.id = 'basemap_as';
                                break;
                            case "smap://styles/image":
                                mapv.basemap.id = 'basemap_air';
                                break;
                            default:
                                mapv.basemap.id = 'basemap_as';
                        }
                        mapv.basemap.baseLayers.items.forEach(function (layer) {
                            // tslint:disable-next-line:prefer-conditional-expression
                            if (layer.id === mapv.basemap.id) {
                                layer.visible = true;
                            }
                            else {
                                layer.visible = false;
                            }
                        });
                    }
                    viewMode = mapoptions.viewMode === undefined || mapoptions.viewMode === '2D' ? '2D' : '3D';
                    return [4 /*yield*/, initsmapbussinesslayers(gisService.smapbussinessLayers.layerGroups, maptoken, viewMode)];
                case 3:
                    smapbussinesslayers = _b.sent();
                    mapv.addMany(smapbussinesslayers);
                    shanghaiSR = new SpatialReference({
                        wkt: 'PROJCS["shanghaicity",GEOGCS["GCS_Beijing_1954",DATUM["D_Beijing_1954",SPHEROID["Krasovsky_1940",6378245.0,298.3]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Transverse_Mercator"],PARAMETER["False_Easting",-3457147.81],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",121.2751921],PARAMETER["Scale_Factor",1.0],PARAMETER["Latitude_Of_Origin",0.0],UNIT["Meter",1.0]]'
                    });
                    mapView = new MapView({
                        map: mapv,
                        container: containerv,
                        spatialReference: shanghaiSR
                    });
                    if (mapoptions.center !== undefined) {
                        mapView.center = new Point({
                            x: mapoptions.center[0],
                            y: mapoptions.center[1],
                            spatialReference: shanghaiSR
                        });
                    }
                    if (mapoptions.zoom !== undefined) {
                        mapView.zoom = mapoptions.zoom;
                    }
                    if (mapoptions.zooms !== undefined) {
                        mapView.constraints.minZoom = mapoptions.zooms[0];
                        mapView.constraints.maxZoom = mapoptions.zooms[1];
                    }
                    if (mapoptions.rotateEnable !== undefined) {
                        mapView.constraints.rotationEnabled = mapoptions.rotateEnable;
                    }
                    mapView.ui.empty('top-left');
                    mapView.ui.empty('top-right');
                    mapView.ui.empty('bottom-left');
                    mapView.ui.empty('bottom-right');
                    mapView.ui.remove('attribution');
                    mapView.padding = {
                        top: 5,
                        bottom: 0,
                        left: 0,
                        right: 5
                    };
                    return [2 /*return*/, { mapView: mapView, mapv: mapv }];
            }
        });
    });
}
