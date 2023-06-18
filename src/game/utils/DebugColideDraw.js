import Phaser from "phaser";

/**
 * 충돌영역을 표시 하는 유틸 함수
 * 사용 예는 다음과 같다.
 *         const map = this.make.tilemap({key: 'homeTownInfo'});
 *         console.log(map)
 *         const tileset = map.addTilesetImage('external', 'externalTiles');
 *
 *         const building = map.createLayer('building', tileset, 0, 0);
 *
 *         this.physics.add.collider(this.m_player, building);
 * @param worldLayer
 * @param applyObj
 */
export const debugCollide = (worldLayer, applyObj) => {
    const debugGraphics = applyObj.add.graphics().setAlpha(0.75).setDepth(1000);
    worldLayer.renderDebug(debugGraphics, {
        tileColor: null,
        collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
        faceColor: new Phaser.Display.Color(40, 39, 37, 255), // Color of colliding face edges
    });

};

