var RoomOptions = require('RoomOptions')

cc.Class({
    extends: RoomOptions,   
    // use this for initialization
    onLoad: function () {
        this._key="xlch" 
        this.initJuShu();
        this.initRenShu();
        this.initWanFa();
        this.initFengDing();
    },  
    getConfig:function(){
        
    }

});