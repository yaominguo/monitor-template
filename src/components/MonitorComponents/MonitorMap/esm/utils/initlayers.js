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
import { load } from '../modules';
export function init3DBaseMaplayers(layers, maptoken) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, 
        // tslint:disable-next-line:variable-name
        Extent, SHCTiledMapServiceLayer, TileLayer, SpatialReference;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, load([
                        'esri/geometry/Extent',
                        'esri/layers/SHCTiledMapServiceLayer',
                        'esri/layers/TileLayer',
                        'esri/geometry/SpatialReference'
                    ])];
                case 1:
                    _a = _b.sent(), Extent = _a[0], SHCTiledMapServiceLayer = _a[1], TileLayer = _a[2], SpatialReference = _a[3];
                    return [2 /*return*/, layers.map(function (item) {
                            switch (item.mapType) {
                                case 'SHCTiledMapServiceLayer':
                                    // eslint-disable-next-line no-case-declarations
                                    var fExtent = new Extent({
                                        xmin: -65000,
                                        ymin: -76000,
                                        xmax: 75000.00000000003,
                                        ymax: 72000.00000000003,
                                        spatialReference: SpatialReference.WebMercator
                                    });
                                    if (item.isToken === true) {
                                        return new SHCTiledMapServiceLayer({
                                            url: item.url,
                                            token: maptoken,
                                            fullExtent: fExtent,
                                            opacity: item.opacity,
                                            title: item.layerCName,
                                            id: item.layerEName,
                                            visible: item.visible
                                        });
                                    }
                                    else {
                                        return new SHCTiledMapServiceLayer({
                                            url: item.url,
                                            fullExtent: fExtent,
                                            opacity: item.opacity,
                                            title: item.layerCName,
                                            id: item.layerEName,
                                            visible: item.visible
                                        });
                                    }
                                case 'TileLayer':
                                    return new TileLayer(item.url, {
                                        id: item.layerEName,
                                        visible: item.visible,
                                        opacity: item.opacity,
                                        listMode: item.listMode,
                                        title: item.layerCName
                                    });
                            }
                        })];
            }
        });
    });
}
export function init2DBaseMaplayers(layers, maptoken) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, 
        // tslint:disable-next-line:variable-name
        Extent, TileLayer, SceneLayer, MapImageLayer, 
        // tslint:disable-next-line:variable-name
        GroupLayer, SpatialReference;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, load([
                        'esri/geometry/Extent',
                        'esri/layers/TileLayer',
                        'esri/layers/SceneLayer',
                        'esri/layers/MapImageLayer',
                        'esri/layers/GroupLayer',
                        'esri/geometry/SpatialReference'
                    ])];
                case 1:
                    _a = _b.sent(), Extent = _a[0], TileLayer = _a[1], SceneLayer = _a[2], MapImageLayer = _a[3], GroupLayer = _a[4], SpatialReference = _a[5];
                    return [2 /*return*/, layers.map(function (item) {
                            switch (item.mapType) {
                                case 'SHCTiledMapServiceLayer':
                                case 'TileLayer':
                                    return new TileLayer(item.url, {
                                        id: item.layerEName,
                                        visible: item.visible,
                                        opacity: item.opacity,
                                        listMode: item.listMode,
                                        title: item.layerCName
                                    });
                            }
                        })];
            }
        });
    });
}
export function initsmapbussinesslayers(layerGroups, maptoken, viewMode) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, 
        // tslint:disable-next-line:variable-name
        TileLayer, SceneLayer, VectorTileLayer, MapImageLayer, IntegratedMeshLayer, PointCloudLayer, 
        // tslint:disable-next-line:variable-name
        SHCTiledMapServiceLayer, SHCMapServiceLayer, GroupLayer, FeatureLayer, GraphicsLayer, Extent, 
        // tslint:disable-next-line:variable-name
        SpatialReference, smapgrouplayer;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, load([
                        "esri/layers/TileLayer",
                        "esri/layers/SceneLayer",
                        "esri/layers/VectorTileLayer",
                        "esri/layers/MapImageLayer",
                        "esri/layers/IntegratedMeshLayer",
                        "esri/layers/PointCloudLayer",
                        "esri/layers/SHCTiledMapServiceLayer",
                        "esri/layers/SHCMapServiceLayer",
                        "esri/layers/GroupLayer",
                        "esri/layers/FeatureLayer",
                        "esri/layers/GraphicsLayer",
                        "esri/geometry/Extent",
                        "esri/geometry/SpatialReference"
                    ])];
                case 1:
                    _a = _b.sent(), TileLayer = _a[0], SceneLayer = _a[1], VectorTileLayer = _a[2], MapImageLayer = _a[3], IntegratedMeshLayer = _a[4], PointCloudLayer = _a[5], SHCTiledMapServiceLayer = _a[6], SHCMapServiceLayer = _a[7], GroupLayer = _a[8], FeatureLayer = _a[9], GraphicsLayer = _a[10], Extent = _a[11], SpatialReference = _a[12];
                    smapgrouplayer = [];
                    layerGroups.map(function (itemsgroup) {
                        maptoken = "222";
                        var grouplayer = new GroupLayer({
                            id: itemsgroup.id,
                            title: itemsgroup.title,
                            visible: itemsgroup.visible,
                            listMode: itemsgroup.listMode
                        });
                        if (itemsgroup.layerGroups != null) {
                            var groupslayers = itemsgroup.layerGroups.reverse().map(function (items) {
                                var grouplayer2 = new GroupLayer({
                                    id: items.id,
                                    title: items.title,
                                    visible: items.visible,
                                    listMode: items.listMode
                                });
                                items.layers.reverse().map(function (layer) {
                                    switch (layer.maptype) {
                                        case "TileLayer":
                                            grouplayer2.add(new TileLayer(layer.url, {
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode
                                            }));
                                            break;
                                        case "MapImageLayer":
                                            grouplayer2.add(new MapImageLayer(layer.url, {
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode
                                            }));
                                            break;
                                        case "localFeatureLayer":
                                            var localflayer = new FeatureLayer({
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode,
                                                popupTemplate: layer.popupTemplate,
                                                definitionExpression: layer.definitionExpression,
                                                popupEnabled: layer.popupEnabled,
                                                source: []
                                            });
                                            if (layer.renderer != null && layer.renderer !== undefined) {
                                                localflayer.renderer = layer.renderer;
                                            }
                                            grouplayer2.add(localflayer);
                                            break;
                                        case "FeatureLayer":
                                            var flayer = new FeatureLayer(layer.url, {
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode,
                                                popupTemplate: layer.popupTemplate,
                                                definitionExpression: layer.definitionExpression,
                                                popupEnabled: layer.popupEnabled
                                            });
                                            if (layer.renderer != null && layer.renderer !== undefined) {
                                                flayer.renderer = layer.renderer;
                                            }
                                            grouplayer2.add(flayer);
                                            break;
                                        case "SceneLayer":
                                            grouplayer2.add(new SceneLayer(layer.url, {
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                renderer: layer.renderer,
                                                popupTemplate: layer.popupTemplate,
                                                definitionExpression: layer.definitionExpression,
                                                popupEnabled: layer.popupEnabled
                                            }));
                                            break;
                                        case "PointCloudLayer":
                                            grouplayer2.add(new PointCloudLayer(layer.url, {
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode
                                            }));
                                            break;
                                        case "IntegratedMeshLayer":
                                            grouplayer2.add(new IntegratedMeshLayer(layer.url, {
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode
                                            }));
                                        case "GraphicsLayer":
                                            grouplayer2.add(new GraphicsLayer({
                                                id: layer.id,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode,
                                                title: layer.title
                                            }));
                                            break;
                                        case "SHCTiledMapServiceLayer":
                                            if (viewMode === '3D') {
                                                var fExtent = new Extent({
                                                    xmin: -65000,
                                                    ymin: -76000,
                                                    xmax: 75000.00000000003,
                                                    ymax: 72000.00000000003,
                                                    spatialReference: SpatialReference.WebMercator
                                                });
                                                if (layer.istoken === true) {
                                                    grouplayer2.add(SHCTiledMapServiceLayer({
                                                        url: layer.url,
                                                        token: maptoken,
                                                        fullExtent: fExtent,
                                                        opacity: layer.opacity,
                                                        title: layer.title,
                                                        id: layer.id,
                                                        visible: layer.visible
                                                    }));
                                                }
                                                else {
                                                    grouplayer2.add(SHCTiledMapServiceLayer({
                                                        url: layer.url,
                                                        fullExtent: fExtent,
                                                        opacity: layer.opacity,
                                                        title: layer.title,
                                                        id: layer.id,
                                                        visible: layer.visible
                                                    }));
                                                }
                                            }
                                            else {
                                                grouplayer2.add(new TileLayer(layer.url, {
                                                    id: layer.id,
                                                    title: layer.title,
                                                    visible: layer.visible,
                                                    opacity: layer.opacity,
                                                    listMode: layer.listMode
                                                }));
                                            }
                                            break;
                                        case "SHCMapServiceLayer":
                                            if (viewMode === '3D') {
                                                var fuExtent = new Extent({
                                                    xmin: -65000,
                                                    ymin: -76000,
                                                    xmax: 75000.00000000003,
                                                    ymax: 72000.00000000003,
                                                    spatialReference: SpatialReference.WebMercator
                                                });
                                                if (layer.istoken === true) {
                                                    grouplayer2.add(SHCMapServiceLayer({
                                                        url: layer.url,
                                                        token: maptoken,
                                                        fullExtent: fuExtent,
                                                        opacity: layer.opacity,
                                                        title: layer.title,
                                                        id: layer.id,
                                                        visible: layer.visible
                                                    }));
                                                }
                                                else {
                                                    grouplayer2.add(new SHCMapServiceLayer({
                                                        url: layer.url,
                                                        fullExtent: fuExtent,
                                                        opacity: layer.opacity,
                                                        title: layer.title,
                                                        id: layer.id,
                                                        visible: layer.visible
                                                    }));
                                                }
                                            }
                                            else {
                                                grouplayer2.add(new MapImageLayer(layer.url, {
                                                    id: layer.id,
                                                    title: layer.title,
                                                    visible: layer.visible,
                                                    opacity: layer.opacity,
                                                    listMode: layer.listMode
                                                }));
                                            }
                                            break;
                                    }
                                });
                                return grouplayer2;
                            });
                            grouplayer.addMany(groupslayers);
                        }
                        if (itemsgroup.layers != null) {
                            var layers = itemsgroup.layers.reverse().map(function (layer) {
                                switch (layer.maptype) {
                                    case "TileLayer":
                                        return new TileLayer(layer.url, {
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity
                                        });
                                        break;
                                    case "MapImageLayer":
                                        return new MapImageLayer({
                                            url: layer.url,
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity,
                                            sublayers: layer.sublayers
                                        });
                                        break;
                                    case "FeatureLayer":
                                        var flayer = new FeatureLayer(layer.url, {
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity,
                                            definitionExpression: layer.definitionExpression,
                                            popupTemplate: layer.popupTemplate,
                                            elevationInfo: layer.elevationInfo,
                                            popupEnabled: layer.popupEnabled
                                        });
                                        if (layer.renderer != null && layer.renderer !== undefined) {
                                            flayer.renderer = layer.renderer;
                                        }
                                        return flayer;
                                        break;
                                    case "SceneLayer":
                                        return new SceneLayer(layer.url, {
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity,
                                            renderer: layer.renderer,
                                            definitionExpression: layer.definitionExpression,
                                            popupTemplate: layer.popupTemplate,
                                            popupEnabled: layer.popupEnabled
                                        });
                                        break;
                                    case "PointCloudLayer":
                                        return new PointCloudLayer(layer.url, {
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity,
                                            listMode: layer.listMode
                                        });
                                        break;
                                    case "IntegratedMeshLayer":
                                        return new IntegratedMeshLayer(layer.url, {
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity,
                                            listMode: layer.listMode
                                        });
                                    case "GraphicsLayer":
                                        return new GraphicsLayer({
                                            id: layer.id,
                                            visible: layer.visible,
                                            opacity: layer.opacity,
                                            listMode: layer.listMode,
                                            title: layer.title
                                        });
                                        break;
                                }
                            });
                            grouplayer.addMany(layers);
                        }
                        if (viewMode === '2D') {
                            if (itemsgroup.grouptype === '2D') {
                                smapgrouplayer.push(grouplayer);
                            }
                        }
                        else {
                            smapgrouplayer.push(grouplayer);
                        }
                    });
                    return [2 /*return*/, smapgrouplayer];
            }
        });
    });
}
export function initbuildingsLayers(buildingsLayers, maptoken) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, 
        // tslint:disable-next-line:variable-name
        TileLayer, SceneLayer, VectorTileLayer, MapImageLayer, IntegratedMeshLayer, PointCloudLayer, 
        // tslint:disable-next-line:variable-name
        SHCTiledMapServiceLayer, SHCMapServiceLayer, GroupLayer, FeatureLayer, GraphicsLayer, Extent, 
        // tslint:disable-next-line:variable-name
        SpatialReference, bLayers, grouplayers;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, load([
                        "esri/layers/TileLayer",
                        "esri/layers/SceneLayer",
                        "esri/layers/VectorTileLayer",
                        "esri/layers/MapImageLayer",
                        "esri/layers/IntegratedMeshLayer",
                        "esri/layers/PointCloudLayer",
                        "esri/layers/SHCTiledMapServiceLayer",
                        "esri/layers/SHCMapServiceLayer",
                        "esri/layers/GroupLayer",
                        "esri/layers/FeatureLayer",
                        "esri/layers/GraphicsLayer",
                        "esri/geometry/Extent",
                        "esri/geometry/SpatialReference"
                    ])];
                case 1:
                    _a = _b.sent(), TileLayer = _a[0], SceneLayer = _a[1], VectorTileLayer = _a[2], MapImageLayer = _a[3], IntegratedMeshLayer = _a[4], PointCloudLayer = _a[5], SHCTiledMapServiceLayer = _a[6], SHCMapServiceLayer = _a[7], GroupLayer = _a[8], FeatureLayer = _a[9], GraphicsLayer = _a[10], Extent = _a[11], SpatialReference = _a[12];
                    bLayers = new GroupLayer({
                        id: buildingsLayers.id,
                        title: buildingsLayers.title,
                        visible: buildingsLayers.visible,
                        listMode: buildingsLayers.listMode
                    });
                    grouplayers = buildingsLayers.layerGroups.map(function (itemsgroup) {
                        var grouplayer = new GroupLayer({
                            id: itemsgroup.id,
                            title: itemsgroup.title,
                            visible: itemsgroup.visible,
                            listMode: itemsgroup.listMode
                        });
                        if (itemsgroup.layerGroups != null) {
                            var glayers = itemsgroup.layerGroups.reverse().map(function (items) {
                                var grouplayer2 = new GroupLayer({
                                    id: items.id,
                                    title: items.title,
                                    visible: items.visible,
                                    listMode: items.listMode
                                });
                                items.layers.reverse().map(function (layer) {
                                    switch (layer.maptype) {
                                        case "TileLayer":
                                            grouplayer2.add(new TileLayer(layer.url, {
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode
                                            }));
                                            break;
                                        case "MapImageLayer":
                                            grouplayer2.add(new MapImageLayer(layer.url, {
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode
                                            }));
                                            break;
                                        case "FeatureLayer":
                                            var flayer = new FeatureLayer(layer.url, {
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode,
                                                popupTemplate: layer.popupTemplate,
                                                definitionExpression: layer.definitionExpression,
                                                popupEnabled: layer.popupEnabled
                                            });
                                            if (layer.renderer != null && layer.renderer !== undefined) {
                                                flayer.renderer = layer.renderer;
                                            }
                                            return flayer;
                                            break;
                                        case "SceneLayer":
                                            grouplayer2.add(new SceneLayer(layer.url, {
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                renderer: layer.renderer,
                                                popupTemplate: layer.popupTemplate,
                                                definitionExpression: layer.definitionExpression,
                                                popupEnabled: layer.popupEnabled
                                            }));
                                            break;
                                        case "PointCloudLayer":
                                            grouplayer2.add(new PointCloudLayer(layer.url, {
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode
                                            }));
                                            break;
                                        case "IntegratedMeshLayer":
                                            grouplayer2.add(new IntegratedMeshLayer(layer.url, {
                                                id: layer.id,
                                                title: layer.title,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode
                                            }));
                                        case "GraphicsLayer":
                                            grouplayer2.add(new GraphicsLayer({
                                                id: layer.id,
                                                visible: layer.visible,
                                                opacity: layer.opacity,
                                                listMode: layer.listMode,
                                                title: layer.title
                                            }));
                                            break;
                                        case "SHCTiledMapServiceLayer":
                                            var fExtent = new Extent({
                                                xmin: -65000,
                                                ymin: -76000,
                                                xmax: 75000.00000000003,
                                                ymax: 72000.00000000003,
                                                spatialReference: SpatialReference.WebMercator
                                            });
                                            if (layer.istoken === true) {
                                                grouplayer2.add(SHCTiledMapServiceLayer({
                                                    url: layer.url,
                                                    token: maptoken,
                                                    fullExtent: fExtent,
                                                    opacity: layer.opacity,
                                                    title: layer.title,
                                                    id: layer.id,
                                                    visible: layer.visible
                                                }));
                                            }
                                            else {
                                                grouplayer2.add(SHCTiledMapServiceLayer({
                                                    url: layer.url,
                                                    fullExtent: fExtent,
                                                    opacity: layer.opacity,
                                                    title: layer.title,
                                                    id: layer.id,
                                                    visible: layer.visible
                                                }));
                                            }
                                            break;
                                        case "SHCMapServiceLayer":
                                            var fuExtent = new Extent({
                                                xmin: -65000,
                                                ymin: -76000,
                                                xmax: 75000.00000000003,
                                                ymax: 72000.00000000003,
                                                spatialReference: SpatialReference.WebMercator
                                            });
                                            if (layer.istoken === true) {
                                                grouplayer2.add(SHCMapServiceLayer({
                                                    url: layer.url,
                                                    token: maptoken,
                                                    fullExtent: fuExtent,
                                                    opacity: layer.opacity,
                                                    title: layer.title,
                                                    id: layer.id,
                                                    visible: layer.visible
                                                }));
                                            }
                                            else {
                                                grouplayer2.add(new SHCMapServiceLayer({
                                                    url: layer.url,
                                                    fullExtent: fuExtent,
                                                    opacity: layer.opacity,
                                                    title: layer.title,
                                                    id: layer.id,
                                                    visible: layer.visible
                                                }));
                                            }
                                            break;
                                    }
                                });
                                return grouplayer2;
                            });
                            grouplayer.addMany(glayers);
                        }
                        if (itemsgroup.layers != null) {
                            var layers = itemsgroup.layers.reverse().map(function (layer) {
                                switch (layer.maptype) {
                                    case "TileLayer":
                                        return new TileLayer(layer.url, {
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity
                                        });
                                        break;
                                    case "MapImageLayer":
                                        return new MapImageLayer(layer.url, {
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity
                                        });
                                        break;
                                    case "FeatureLayer":
                                        var flayer = new FeatureLayer(layer.url, {
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity,
                                            definitionExpression: layer.definitionExpression,
                                            popupTemplate: layer.popupTemplate,
                                            elevationInfo: layer.elevationInfo,
                                            popupEnabled: layer.popupEnabled
                                        });
                                        if (layer.renderer != null && layer.renderer !== undefined) {
                                            flayer.renderer = layer.renderer;
                                        }
                                        return flayer;
                                        break;
                                    case "SceneLayer":
                                        return new SceneLayer(layer.url, {
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity,
                                            renderer: layer.renderer,
                                            definitionExpression: layer.definitionExpression,
                                            popupTemplate: layer.popupTemplate,
                                            popupEnabled: layer.popupEnabled
                                        });
                                        break;
                                    case "PointCloudLayer":
                                        return new PointCloudLayer(layer.url, {
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity,
                                            listMode: layer.listMode
                                        });
                                        break;
                                    case "IntegratedMeshLayer":
                                        return new IntegratedMeshLayer(layer.url, {
                                            id: layer.id,
                                            title: layer.title,
                                            visible: layer.visible,
                                            opacity: layer.opacity,
                                            listMode: layer.listMode
                                        });
                                    case "GraphicsLayer":
                                        return new GraphicsLayer({
                                            id: layer.id,
                                            visible: layer.visible,
                                            opacity: layer.opacity,
                                            listMode: layer.listMode,
                                            title: layer.title
                                        });
                                        break;
                                }
                            });
                            grouplayer.addMany(layers);
                        }
                        return grouplayer;
                    });
                    bLayers.addMany(grouplayers);
                    return [2 /*return*/, bLayers];
            }
        });
    });
}
