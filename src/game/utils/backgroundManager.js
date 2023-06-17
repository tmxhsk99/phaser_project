import Config from "../Config";

export function setBackground(scene, backgroundTexture) {
    scene.m_background = scene.add.image(
        scene.scale.width / 2, // 월드의 중심 x 좌표
        scene.scale.height / 2, // 월드의 중심 y 좌표
        backgroundTexture
    ).setOrigin(0.5, 0.5);
    /*const width = scene.scale.width;
    const height = scene.scale.height;
    scene.m_background = scene.add.tileSprite(
        width / 2, // 월드의 중심 x 좌표
        height / 2, // 월드의 중심 y 좌표
        width * 2, // 뷰포트의 2배 너비
        height * 2, // 뷰포트의 2배 높이
        backgroundTexture
    );*/
/*    scene.m_background = scene.add.tileSprite(
        0,
        0,
        Config.width,
        Config.height,
        backgroundTexture
    ).setOrigin(0, 0);*/
}