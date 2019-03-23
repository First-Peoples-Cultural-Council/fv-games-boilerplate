import configManager from '../config';

class Preload {

    init()
    {
        this.config = configManager.getConfig();

        this.logo       = this.game.make.sprite(this.game.world.centerX, 150, 'brand');
        this.loadingBar = this.game.make.sprite(this.game.world.centerX , 350, "loading");
        this.status     = this.game.make.text(this.game.world.centerX, 400, 'Loading...', {fill: 'black'});

        this.centerObjects([this.logo, this.status, this.loadingBar]);
    }

    centerObjects(objects)
    {
        objects.forEach((obj)=>{
            obj.anchor.setTo(0.5,0.5);
        });
    }

    preload()
    {
        this.game.add.existing(this.logo).scale.setTo(1.2,1.2);
        this.game.add.existing(this.loadingBar);
        this.game.add.existing(this.status);
        this.game.load.setPreloadSprite(this.loadingBar);
        
        this.load.image('fullscreen', this.config.images.fullscreen);
        this.load.image('unfullscreen', this.config.images.unfullscreen);
        this.load.image('mute', this.config.images.mute);
        this.load.image('unmute', this.config.images.unmute);
    }

    fade (nextState)
    {
        this.nextState = nextState;

        const fadeBackground = this.game.add.graphics(0, 0);
        fadeBackground.beginFill(0xFFFFFF, 1);
        fadeBackground.drawRect(0, 0, this.game.width, this.game.height);
        fadeBackground.alpha = 0;
        fadeBackground.endFill();

        const backgroundTween = this.game.add.tween(fadeBackground);
        backgroundTween.to({ alpha: 1 }, 1000, null);
        backgroundTween.onComplete.add(this.changeState, this);
        backgroundTween.start();
    }

    changeState()
    {
        this.game.state.start(this.nextState);
        this.fadeOut();
    }

    fadeOut()
    {
        var fadeBackground = this.game.add.graphics(0, 0);
        fadeBackground.beginFill(0xFFFFFF, 1);
        fadeBackground.drawRect(0, 0, this.game.width, this.game.height);
        fadeBackground.alpha = 1;
        fadeBackground.endFill();

        const backgroundTween = this.game.add.tween(fadeBackground);
        backgroundTween.to({ alpha: 0 }, 1000, null);
        backgroundTween.start();
    }

    create(){
        this.fade("Main");
    }
}

export default Preload;
