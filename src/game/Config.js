import LoadingScene from "./scenes/LoadingScene";
import BattleScene from "./scenes/BattleScene";
import Phaser from "phaser";
import PlayingScene from "./scenes/PlayingScene";


const Config = {
    parent: "game_div",
    mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
    width: 160,
    height: 144,
    zoom:4,
    backgroundColor: 0x000000,
    scene: [LoadingScene,PlayingScene],
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: process.env.DEBUG === "true",
        },
    },
};

export default Config;