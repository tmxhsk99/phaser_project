import LoadingScene from "./scenes/LoadingScene";
import BattelScene from "./scenes/BattelScene";


const Config = {
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    scene: [LoadingScene],
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: process.env.DEBUG === "true",
        },
    },
};

export default Config;