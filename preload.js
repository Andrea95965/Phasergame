var preload = {
    
    preload: function(){
    var loadingBar = this.add.sprite(160,240, "loading");
        loadingBar.anchor.setTo(0.5, 0.5);
        this.load.setPreloadSprite(loadingBar); 
        
        this.game.load.image('player','player.png');
        this.game.load.image('wall','wall.png');
        this.game.load.image('coin','coin.png');
        this.game.load.image('lava','lava.png');
        this.game.load.image('gameTitle', 'gameTitle.png');
        this.game.load.image('play', 'play.png');
        this.game.load.image('gameover', 'gameover.png');
    },
    
    create: function(){
        this.game.state.start("GameTitle");
    }
};