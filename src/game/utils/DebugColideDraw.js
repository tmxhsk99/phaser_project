import Phaser from "phaser";
export const debugCollide = (worldLayer, applyObj) => {
    const debugGraphics = applyObj.add.graphics().setAlpha(0.75).setDepth(1000);
    worldLayer.renderDebug(debugGraphics, {
        tileColor: null,
        collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
        faceColor: new Phaser.Display.Color(40, 39, 37, 255), // Color of colliding face edges
    });

};