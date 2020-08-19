import IMapOptions from './interface/IMapOptions';
export declare function init3Dmap(containerv: string, gisService: any, proxyConifg: any, maptoken: string, mapoptions: IMapOptions): Promise<{
    sceneView: any;
    mapv: any;
}>;
export declare function init2Dmap(containerv: string, gisService: any, proxyConifg: any, maptoken: string, mapoptions: IMapOptions): Promise<{
    mapView: any;
    mapv: any;
}>;
