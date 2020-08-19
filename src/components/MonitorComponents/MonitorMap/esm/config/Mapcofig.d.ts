export default class Mapcofig {
    static jsapi: string;
    static jsapiversion4X: string;
    static tokenserver: {
        tokenType: string;
        token_front: {
            url: string;
            user: string;
            password: string;
        };
        token_black: {
            url: string;
        };
    };
    static proxyURL: string;
    static proxyConifg: {
        useProxy: boolean;
        url: string;
        httpsDomains: {
            proxyUrl: string;
            domainName: string;
        }[];
    };
    static fonts: {
        url: string;
    };
    static gisService: {
        serverurl: string;
        baseMapServices: {
            isToken: boolean;
            layers: {
                url: string;
                layerEName: string;
                isToken: boolean;
                visible: boolean;
                opacity: number;
                mapType: string;
                tag: string;
                layerCName: string;
                type: string;
            }[];
        };
        buildingsLayers: {
            id: string;
            title: string;
            tag: string;
            listMode: string;
            visible: boolean;
            layerGroups: {
                id: string;
                title: string;
                tag: string;
                visible: boolean;
                listMode: string;
                layerGroups: any[];
                layers: {
                    url: string;
                    id: string;
                    istoken: boolean;
                    visible: boolean;
                    opacity: number;
                    maptype: string;
                    tag: string;
                    popupEnabled: boolean;
                    title: string;
                    type: string;
                    listMode: string;
                }[];
            }[];
            layers: any[];
        };
        smapbussinessLayers: {
            serverurl: string;
            istoken: boolean;
            tokenType: string;
            layerGroups: {
                id: string;
                title: string;
                grouptype: string;
                tag: string;
                visible: boolean;
                listMode: string;
                layerGroups: any[];
                layers: ({
                    url: string;
                    id: string;
                    isToken: boolean;
                    visible: boolean;
                    opacity: number;
                    maptype: string;
                    tag: string;
                    title: string;
                    type: string;
                    listMode: string;
                    sublayers: {
                        id: number;
                        definitionExpression: string;
                    }[];
                    istoken?: undefined;
                } | {
                    url: string;
                    id: string;
                    isToken: boolean;
                    visible: boolean;
                    opacity: number;
                    maptype: string;
                    tag: string;
                    title: string;
                    type: string;
                    listMode: string;
                    sublayers: {
                        id: number;
                        sublayers: {
                            id: number;
                            definitionExpression: string;
                        }[];
                    }[];
                    istoken?: undefined;
                } | {
                    id: string;
                    istoken: boolean;
                    visible: boolean;
                    opacity: number;
                    maptype: string;
                    tag: string;
                    title: string;
                    type: string;
                    listMode: string;
                    url?: undefined;
                    isToken?: undefined;
                    sublayers?: undefined;
                })[];
            }[];
        };
    };
    constructor();
}
