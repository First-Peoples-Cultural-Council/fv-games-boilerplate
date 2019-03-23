/*------------------------- SCENES ----------------------*/
import Boot         from './scenes/boot';
import Preload      from './scenes/preload';
import GameTitle    from './scenes/gametitle';
import Main         from './scenes/main';
import GameOver     from './scenes/gameover';

/*------------------------- CONFIG -----------------------*/
import GameConfig   from './config';


/**
 * Game initializer
 */
export default {

    /**
     * Game Instance
     */
    gameInstance:null,

    /**
     * Intiialize game with config
     * @param {Element} containerElemement - element to inject canvas into
     * @param {Object} config to extend
     */
    init:function( containerElement, config )
    {
        if(this.gameInstance != null)
        {
            this.destroy();
        }

        GameConfig.setConfig(config);

        //Start Game
        const game = new Phaser.Game(640, 1136, Phaser.CANVAS, containerElement);
        game.state.add("Boot", Boot);
        game.state.add("Preload", Preload);
        game.state.add("GameTitle", GameTitle);
        game.state.add("Main", Main);
        game.state.add("GameOver", GameOver);
        game.state.start("Boot");

        this.gameInstance = game;
    },

    /**
     * Destroy
     */
    destroy:function(){
        this.gameInstance.destroy();
        this.gameInstance = null;
    }
}