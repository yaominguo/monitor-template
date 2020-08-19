var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Overlayerbase from './Overlayerbase';
var Marker = /** @class */ (function (_super) {
    __extends(Marker, _super);
    function Marker(markeroption) {
        var _this = _super.call(this, markeroption) || this;
        _this.overlaytype = 'Marker';
        _this.icon = markeroption.icon;
        _this.position = markeroption.position;
        return _this;
    }
    return Marker;
}(Overlayerbase));
export default Marker;
