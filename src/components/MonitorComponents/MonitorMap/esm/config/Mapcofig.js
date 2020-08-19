var Mapcofig = /** @class */ (function () {
    // tslint:disable-next-line:no-empty
    function Mapcofig() {
    }
    Mapcofig.jsapi = 'http://168.168.112.74:8282/gis_system/repairemonitor/arcgis_js';
    Mapcofig.jsapiversion4X = '4.15';
    Mapcofig.tokenserver = {
        tokenType: 'userdef',
        token_front: {
            url: 'http://10.108.3.52:8080/onemap/tokens/generateToken',
            user: 'none',
            password: 'none'
        },
        token_black: {
            url: 'http://10.108.3.16:8401/mapconfig/maptoken'
        }
    };
    Mapcofig.proxyURL = "http://168.168.112.76:8282/propertybusinessmanage/proxy.jsp";
    Mapcofig.proxyConifg = {
        useProxy: false,
        url: Mapcofig.proxyURL + '?',
        httpsDomains: [{
                proxyUrl: Mapcofig.proxyURL,
                domainName: '168.168.112.84:6080'
            }, {
                proxyUrl: Mapcofig.proxyURL,
                domainName: '168.168.112.76:6080'
            }, {
                proxyUrl: Mapcofig.proxyURL,
                domainName: '168.168.112.74:6080'
            }]
    };
    Mapcofig.fonts = {
        url: 'http://168.168.112.74:8282/gis_system/repairemonitor/arcgis_js/4.15/fonts'
    };
    Mapcofig.gisService = {
        serverurl: 'http://168.168.112.84:6080/arcgis/rest/services',
        baseMapServices: {
            isToken: true,
            layers: [{
                    url: 'http://168.168.112.84:6080/arcgis/rest/services/Image2019/MapServer',
                    layerEName: 'basemap_air',
                    isToken: true,
                    visible: false,
                    opacity: 1.0,
                    mapType: 'SHCTiledMapServiceLayer',
                    tag: '影像底图',
                    layerCName: '影像底图',
                    type: 'basemap_air'
                }, {
                    url: 'http://168.168.112.84:6080/arcgis/rest/services/shmap_as3/MapServer',
                    layerEName: 'basemap_as',
                    isToken: true,
                    visible: true,
                    opacity: 1.0,
                    mapType: 'SHCTiledMapServiceLayer',
                    tag: '暗色底图',
                    layerCName: '暗色底图',
                    type: 'basemap_as'
                }, {
                    url: 'http://168.168.112.84:6080/arcgis/rest/services/Basemap19/MapServer',
                    layerEName: 'basemap_zw',
                    isToken: true,
                    visible: false,
                    opacity: 1.0,
                    mapType: 'SHCTiledMapServiceLayer',
                    tag: '政务底图',
                    layerCName: '政务底图',
                    type: 'basemap_zw'
                }]
        },
        buildingsLayers: {
            id: "buildings_3d_layers",
            title: "空间基础",
            tag: "buildings_3d_layers",
            listMode: 'show',
            visible: true,
            layerGroups: [{
                    id: "buildings_3d_above_layers",
                    title: "地上",
                    tag: "buildings_3d_above_layers",
                    visible: true,
                    listMode: 'show',
                    layerGroups: [],
                    layers: [{
                            url: "http://168.168.112.79/arcgis/rest/services/Hosted/whitebuilding/SceneServer",
                            id: "model_white_zw",
                            istoken: false,
                            visible: true,
                            opacity: 1.0,
                            maptype: "SceneLayer",
                            tag: "政务白模型",
                            popupEnabled: true,
                            title: "政务白模型",
                            type: "model_white_zw",
                            listMode: 'show'
                        }
                    ]
                }],
            layers: []
        },
        smapbussinessLayers: {
            serverurl: "http://168.168.112.76:6080/arcgis/rest/services",
            istoken: true,
            tokenType: "OneMap",
            layerGroups: [{
                    id: "smap_3D_layers",
                    title: "三维业务组",
                    grouptype: '3D',
                    tag: "smap_3D_layers",
                    visible: true,
                    listMode: 'show',
                    layerGroups: [],
                    layers: []
                }, {
                    id: "smap_2D_layers",
                    title: "二维业务组",
                    grouptype: '2D',
                    tag: "smap_2D_layers",
                    visible: true,
                    listMode: 'show',
                    layerGroups: [],
                    layers: [{
                            url: 'http://168.168.112.76:6080/arcgis/rest/services/WG_GIS_XQ_POLY/MapServer',
                            id: 'wg_gis_xq_poly',
                            isToken: true,
                            visible: true,
                            opacity: 1.0,
                            maptype: 'MapImageLayer',
                            tag: '小区面',
                            title: '小区面',
                            type: 'wg_gis_xq_poly',
                            listMode: 'show',
                            sublayers: [{
                                    id: 0,
                                    definitionExpression: "1 = 1"
                                }]
                        }, {
                            url: 'http://168.168.112.76:6080/arcgis/rest/services/WG_GIS_XQ_POINT/MapServer',
                            id: 'wg_gis_xq_point',
                            isToken: true,
                            visible: true,
                            opacity: 1.0,
                            maptype: 'MapImageLayer',
                            tag: '小区点',
                            title: '小区点',
                            type: 'wg_gis_xq_point',
                            listMode: 'show',
                            sublayers: [{
                                    id: 0,
                                    sublayers: [{
                                            id: 5,
                                            definitionExpression: "1 = 1"
                                        }, {
                                            id: 4,
                                            definitionExpression: "1 = 1"
                                        }, {
                                            id: 3,
                                            definitionExpression: "1 = 1"
                                        }, {
                                            id: 2,
                                            definitionExpression: "1 = 1"
                                        }, {
                                            id: 1,
                                            definitionExpression: "1 = 1"
                                        }]
                                }]
                        }, {
                            url: 'http://168.168.112.76:6080/arcgis/rest/services/WG_GIS_MPZ/MapServer',
                            id: 'wg_gis_mpz',
                            isToken: true,
                            visible: true,
                            opacity: 1.0,
                            maptype: 'MapImageLayer',
                            tag: '门牌幢',
                            title: '门牌幢',
                            type: 'wg_gis_mpz',
                            listMode: 'show',
                            sublayers: [{
                                    id: 5,
                                    sublayers: [{
                                            id: 8,
                                            definitionExpression: "1 = 1"
                                        }, {
                                            id: 7,
                                            definitionExpression: "1 = 1"
                                        }, {
                                            id: 6,
                                            definitionExpression: "1 = 1"
                                        }]
                                }, {
                                    id: 0,
                                    sublayers: [{
                                            id: 4,
                                            definitionExpression: "1 = 1"
                                        }, {
                                            id: 3,
                                            definitionExpression: "1 = 1"
                                        }, {
                                            id: 2,
                                            definitionExpression: "1 = 1"
                                        }, {
                                            id: 1,
                                            definitionExpression: "1 = 1"
                                        }]
                                }]
                        }, {
                            id: "location_Hightlight",
                            istoken: false,
                            visible: true,
                            opacity: 1.0,
                            maptype: "GraphicsLayer",
                            tag: "地名地址高亮",
                            title: "地名地址高亮",
                            type: "image",
                            listMode: 'hide'
                        }]
                }]
        }
    };
    return Mapcofig;
}());
export default Mapcofig;
