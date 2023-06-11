import Phaser from "phaser";
import fontPng from "../../assets/font/font.png";
import fontXml from "../../assets/font/font.xml";

import hometownImg from "../../assets/images/original/background/town/homeTown.png";

import playerImg from "../../assets/spritesheets/original/character/player/player.png";

import beamOgg from "../../assets/sounds/beam.ogg";
import scratchOgg from "../../assets/sounds/scratch.ogg";
import hitMobOgg from "../../assets/sounds/hitMob.ogg";
import growlOgg from "../../assets/sounds/growl.ogg";
import explosionOgg from "../../assets/sounds/explosion.ogg";
import hurtOgg from "../../assets/sounds/hurt.ogg";
import expUpOgg from "../../assets/sounds/expUp.ogg";
import nextLevelOgg from "../../assets/sounds/nextLevel.ogg"
import gameOverOgg from "../../assets/sounds/gameover.ogg";
import gameClearOgg from "../../assets/sounds/gameClear.ogg";
import pauseInOgg from "../../assets/sounds/pauseIn.ogg";
import pauseOutOgg from "../../assets/sounds/pauseOut.ogg";
export default class LoadingScene extends Phaser.Scene {
    constructor() {
        // super에 파라미터로 넘겨주는 string이 해당 scene의 identifier가 된다.
        super("bootGame");
    }

    preload() {
        // IMAGES
        this.load.image("homeTown", hometownImg);

        // My SpriteSheet
        this.load.spritesheet("player", playerImg, {
            frameWidth: 16,
            frameHeight: 16,
        });
        // AUDIOS
        this.load.audio("audio_beam", beamOgg);
        this.load.audio("audio_scratch", scratchOgg);
        this.load.audio("audio_hitMob", hitMobOgg);
        this.load.audio("audio_growl", growlOgg);
        this.load.audio("audio_explosion", explosionOgg);
        this.load.audio("audio_expUp", expUpOgg);
        this.load.audio("audio_hurt", hurtOgg);
        this.load.audio("audio_nextLevel", nextLevelOgg);
        this.load.audio("audio_gameOver", gameOverOgg);
        this.load.audio("audio_gameClear", gameClearOgg);
        this.load.audio("audio_pauseIn", pauseInOgg);
        this.load.audio("audio_pauseOut", pauseOutOgg);

        // FONT
        this.load.bitmapFont("pixelFont", fontPng, fontXml);
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");

           // PLAYERS
           this.anims.create({
             key: "player_anim",
             frames: this.anims.generateFrameNumbers("player"),
             frameRate: 10,
             repeat: -1,
           });
           this.anims.create({
             key: "player_idle",
             frames: this.anims.generateFrameNumbers("player", {
               start: 0,
               end: 0,
             }),
             frameRate: 1,
             repeat: 0,
           });
    }
}