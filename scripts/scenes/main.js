import configManager from '../config';

class Main {

    init()
    {
        this.config = configManager.getConfig();
    }

    preload()
    {

    }

    fadeIn()
    {
        var game = this.game;
        var gameWidth = game.width;

        var fadeBackground = game.add.graphics(0, 0);
        fadeBackground.beginFill(0xFFFFFF, 1);
        fadeBackground.drawRect(0, 0, game.width, game.height);
        fadeBackground.alpha = 1;
        fadeBackground.endFill();

        const backgroundTween = game.add.tween(fadeBackground);
        backgroundTween.to({ alpha: 0 }, 500, null);
        backgroundTween.start();

        var bar = game.add.graphics();
        bar.beginFill(0xb40000, 1);
        bar.drawRect(0, 100, gameWidth, 100);

        var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

        //  The Text is positioned at 0, 100
        const text = game.add.text(0, 0, "Edit this scene (main.js)", style);
        text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

        //  We'll set the bounds to be from x0, y100 and be gameWidthpx wide by 100px high
        text.setTextBounds(0, 100, gameWidth, 100);
    }

    create ()
    {
        this.fadeIn();
    }
}

export default Main;