var RoomOptions = require('RoomOptions')

cc.Class({
    extends: RoomOptions,   
    onLoad: function () {
        this._key="xzdd" 
        this.initJuShu();
        this.initRenShu();
        this.initWanFa();
        this.initFengDing();
    },   
    getConfig:function(){

    }

});