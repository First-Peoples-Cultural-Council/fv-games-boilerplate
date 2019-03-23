let defaultGameConfig = {

    images:{
        preloaderLoading:'assets/images/loading.png',
        preloaderLogo:'assets/images/logo.png',
        fullscreen:'assets/images/fullscreen.png',
        unfullscreen:'assets/images/unfullscreen.png',
        mute:'assets/images/mute.png',
        unmute:'assets/images/unmute.png'
    }
};

let gameConfig = {};

export default {

    setConfig:(config) => {
        gameConfig = Object.assign({}, defaultGameConfig, config, gameConfig);
    },

    getConfig:() => {
        return gameConfig;
    }
}