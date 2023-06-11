import Config from "./Config";
import Phaser from 'phaser';
import {useEffect, useRef} from "react";
import "./MainGame.css"

const MainGame = () => {
    const game = useRef(null);
    useEffect(() => {
        game.current = new Phaser.Game(Config);
        console.log("render");
    }, []);

    return (
        <div className="MainGame">
            <div id="game_div" className="game_div" ref={game}/>
        </div>
    );
}

export default MainGame;