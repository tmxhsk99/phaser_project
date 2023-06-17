import Phaser from "phaser";
import Player from "../characters/Player";
import {setBackground} from "../utils/backgroundManager";

export default class PlayingScene extends Phaser.Scene {
    constructor() {
        super("playGame");

        // 걷기 애니메이션 재생 여부를 위한 멤버 변수입니다.
        this.m_moving = false;
        this.lastKey = "down_idle";
    }

    create() {

        console.log("callPayingScene");
        // 사용할 sound들을 추가해놓는 부분입니다.
        // load는 전역적으로 어떤 scene에서든 asset을 사용할 수 있도록 load 해주는 것이고,
        // add는 해당 scene에서 사용할 수 있도록 scene의 멤버 변수로 추가할 때 사용하는 것입니다.
        this.sound.pauseOnBlur = false;
        this.m_beamSound = this.sound.add("audio_beam");
        this.m_scratchSound = this.sound.add("audio_scratch");
        this.m_hitMobSound = this.sound.add("audio_hitMob");
        this.m_growlSound = this.sound.add("audio_growl");
        this.m_explosionSound = this.sound.add("audio_explosion");
        this.m_expUpSound = this.sound.add("audio_expUp");
        this.m_hurtSound = this.sound.add("audio_hurt");
        this.m_nextLevelSound = this.sound.add("audio_nextLevel");
        this.m_gameOverSound = this.sound.add("audio_gameOver");
        this.m_gameClearSound = this.sound.add("audio_gameClear");
        this.m_pauseInSound = this.sound.add("audio_pauseIn");
        this.m_pauseOutSound = this.sound.add("audio_pauseOut");


        // player를 m_player라는 멤버 변수로 추가합니다.
        this.m_player = new Player(this);

        // camera가 player를 따라오도록 하여 뱀파이어 서바이벌처럼 player가 가운데 고정되도록 합니다.
        this.cameras.main.startFollow(this.m_player);

        // PlayingScene의 background를 설정합니다.
        setBackground(this, "homeTown");

        // 키보드 키를 m_cursorKeys라는 멤버 변수로 추가해줍니다.
        this.m_cursorKeys = this.input.keyboard.createCursorKeys();


    }

    movePlayerManager() {
        // 이동 키가 눌려있으면 player가 걸어다니는 애니메이션을 재생하고,
        // 이동 키가 눌려있지 않으면 player가 가만히 있도록 합니다.
        if (this.m_cursorKeys.left.isDown || this.m_cursorKeys.right.isDown || this.m_cursorKeys.up.isDown || this.m_cursorKeys.down.isDown) {
            if (this.m_cursorKeys.left.isDown) {
                if (this.lastKey !== "left") {
                    this.m_player.play("player_anim_left");
                    this.lastKey = "left";
                }
            } else if (this.m_cursorKeys.right.isDown) {
                if (this.lastKey !== "right") {
                    this.m_player.play("player_anim_right");
                    this.lastKey = "right";
                }
            } else if (this.m_cursorKeys.up.isDown) {
                if (this.lastKey !== "up") {
                    this.m_player.play("player_anim_up");
                    this.lastKey = "up";
                }
            } else if (this.m_cursorKeys.down.isDown) {
                if (this.lastKey !== "down") {
                    this.m_player.play("player_anim_down");
                    this.lastKey = "down";
                }
            }
            this.m_player.m_moving = true;
        } else {
            if (this.m_player.m_moving) {
                if (this.lastKey === "left") {
                    if (this.lastKey !== "left_idle") {
                        this.m_player.play("player_idle_left");
                        this.lastKey = "left_idle";
                    }
                } else if (this.lastKey === "right") {
                    if (this.lastKey !== "right_idle") {
                        this.m_player.play("player_idle_right");
                        this.lastKey = "right_idle";
                    }
                } else if (this.lastKey === "up") {
                    if (this.lastKey !== "up_idle") {
                        this.m_player.play("player_idle_up");
                        this.lastKey = "up_idle";
                    }

                } else if (this.lastKey === "down") {
                    if (this.lastKey !== "down_idle") {
                        this.m_player.play("player_idle_down");
                        this.lastKey = "down_idle";
                    }
                }
            }
            this.m_player.m_moving = false;
        }

        // vector를 사용해 움직임을 관리.
        // vector = [x좌표 방향, y좌표 방향]입니다.
        // 왼쪽 키가 눌려있을 때는 vector[0] += -1, 오른쪽 키가 눌려있을 때는 vector[0] += 1을 해줍니다.
        let vector = [0, 0];

        if (this.m_cursorKeys.left.isDown) {
            vector[0] += -1;
        } else if (this.m_cursorKeys.right.isDown) {
            vector[0] += 1;
        } else if (this.m_cursorKeys.up.isDown) {
            vector[1] += -1;
        } else if (this.m_cursorKeys.down.isDown) {
            vector[1] += 1;
        }


        // vector를 player 클래스의 메소드의 파라미터로 넘겨줍니다.
        this.m_player.move(vector);
    }

    update() {
        this.movePlayerManager();
        this.m_background.tilePositionX = this.cameras.main.scrollX * 1.5;  // 0.3은 배경이 움직이는 속도입니다.
        this.m_background.tilePositionY = this.cameras.main.scrollY * 1.5;
    }


}