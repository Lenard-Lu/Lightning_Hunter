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
var objects;
(function (objects) {
    var Background = /** @class */ (function (_super) {
        __extends(Background, _super);
        // Constructor
        function Background(assetManager, imageString, x, y, alpha) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (alpha === void 0) { alpha = 1; }
            var _this = _super.call(this, assetManager.getResult(imageString)) || this;
            // Variables
            _this.speedAlpha = 0.005;
            _this.x = x;
            _this.y = y;
            _this.alpha = alpha;
            _this.Start();
            return _this;
        }
        // Functions
        Background.prototype.Start = function () {
        };
        Background.prototype.Update = function () {
            this.Move();
        };
        Background.prototype.Reset = function () {
        };
        Background.prototype.Move = function () {
            this.alpha += this.speedAlpha;
        };
        return Background;
    }(createjs.Bitmap));
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map