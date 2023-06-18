import Config from "../Config";

export function setBackground(scene, backgroundTexture) {
    scene.m_background = scene.add.image(
        scene.scale.width / 2, // 월드의 중심 x 좌표
        scene.scale.height / 2, // 월드의 중심 y 좌표
        backgroundTexture
    ).setOrigin(0.5, 0.5);

}