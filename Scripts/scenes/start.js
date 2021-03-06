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
var scenes;
(function (scenes) {
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        // Constructor
        function StartScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Methods
        StartScene.prototype.Start = function () {
            // Initialize our objects for this scene
            this.background = new objects.Background(this.assetManager, "background");
            this.gameTitle = new objects.Label("Lightning Hunter", "60px", "Perfect dark", "#fb149e", 590, 140, true);
            this.logo = new objects.Background(this.assetManager, "logo", 520, 300, 0);
            // NOTE: PreloadJS manifest id
            this.startButton = new objects.Button(this.assetManager, "playBtn", 500, 500);
            this.exitButton = new objects.Button(this.assetManager, "exitBtn", 510, 600);
            this.Main();
        };
        StartScene.prototype.Update = function () {
            this.logo.Update();
        };
        StartScene.prototype.Main = function () {
            // Add items to the scene
            this.addChild(this.background);
            this.addChild(this.gameTitle);
            this.addChild(this.startButton);
            this.addChild(this.exitButton);
            this.addChild(this.logo);
            this.startButton.on("click", this.startButtonClick);
            //close game
            this.exitButton.on("click", function () {
                window.close();
            });
        };
        StartScene.prototype.startButtonClick = function () {
            // Change from START to GAME scene
            objects.Game.currentScene = config.Scene.GAME;
            //get start scene's run time
            this.runtime = Math.round(createjs.Ticker.getTime());
            //set start scene prototype 
            StartScene.prototype.startRunTime = this.runtime;
            console.log("Start scenes running time: " + StartScene.prototype.startRunTime);
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map