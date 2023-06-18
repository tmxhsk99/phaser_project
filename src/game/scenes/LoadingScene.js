import Phaser from "phaser";
import fontPng from "../../assets/font/font.png";
import fontXml from "../../assets/font/font.xml";

import externalTiles from "../../assets/images/original/background/tiles/spr_external.png";
import hometownInfo from '../../assets/images/original/background/town/homeTown.json';
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
        // BackGround Image Load
        this.load.image("externalTiles", externalTiles);
        this.load.tilemapTiledJSON("homeTownInfo", hometownInfo);


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
        // player move right
        this.anims.create({
            key: 'player_anim_right',
            frames: this.anims.generateFrameNumbers('player', {frames: [9, 8, 9]}),
            frameRate: 10,
            repeat: -1
        });
        // player move left
        this.anims.create({
            key: 'player_anim_left',
            frames: this.anims.generateFrameNumbers("player", {frames: [7, 6, 7]}),
            frameRate: 10,
            repeat: -1
        });
        // player move up
        this.anims.create({
            key: 'player_anim_up',
            frames: this.anims.generateFrameNumbers("player", {frames: [3, 4, 5, 4]}),
            frameRate: 10,
            repeat: -1
        });
        // player move up
        this.anims.create({
            key: 'player_anim_down',
            frames: this.anims.generateFrameNumbers("player", {frames: [0, 1, 2, 1]}),
            frameRate: 10,
            repeat: -1
        });
        // player idle left
        this.anims.create({
            key: "player_idle_left",
            frames: this.anims.generateFrameNumbers("player", {
                start: 6,
                end: 6,
            }),
            frameRate: 1,
            repeat: 0,
        });
        // player idle right
        this.anims.create({
            key: "player_idle_right",
            frames: this.anims.generateFrameNumbers("player", {
                start: 8,
                end: 8,
            }),
            frameRate: 1,
            repeat: 0,
        });
        // player idle up
        this.anims.create({
            key: "player_idle_up",
            frames: this.anims.generateFrameNumbers("player", {
                start: 4,
                end: 4,
            }),
            frameRate: 1,
            repeat: 0,
        });
        // player idle down
        this.anims.create({
            key: "player_idle_down",
            frames: this.anims.generateFrameNumbers("player", {
                start: 1,
                end: 1,
            }),
            frameRate: 1,
            repeat: 0,
        });
    }
}