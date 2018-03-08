cc.Class({
    extends: cc.Component,
    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...  
        _selectIndex : -1,
        _contentNode : null,
    },

    // use this for initialization
    onLoad: function () {
        var self = this
        //初始化选项面板
        var select = this.node.getChildByName("select"); 
        this._contentNode = cc.find("scrollview/view/content", this.node);   
        for(var i = 0; i < select.childrenCount; ++i){ 
            var item = select.children[i]; 
            var toggle = item.getComponent(cc.Toggle);
            // 使用第三个参数
            toggle.node.on('click', function (event) {   
                self.selectPage(parseInt(event.target.name)-1) 
            }, this);

            cc.loader.loadRes("views/"+cc.RoomName[parseInt(item.name)]+"/RoomOptions", function (err, prefab) {
                if(prefab==null){
                    return;
                }   
                var newNode = cc.instantiate(prefab);
                self._contentNode.addChild(newNode);
                newNode.setPosition(0, 0);
                newNode.active = toggle.isChecked 
            });  
        }   
    },
    
    selectPage:function(i){  
        if(this._selectIndex>-1){ 
            this._contentNode.children[this._selectIndex].active = false;
        }
        this._contentNode.children[i].active = true ;
        this._selectIndex = i;
    },
    
    onBtnBack:function(){
        this.node.active = false;
    },
    
    onBtnOK:function(){
        this.node.active = false;
        this.createRoom();
    },
    
    createRoom:function(){
        var self = this;
        var onCreate = function(ret){
            if(ret.errcode !== 0){
                cc.vv.wc.hide();
                //console.log(ret.errmsg);
                if(ret.errcode == 2222){
                    cc.vv.alert.show("提示","房卡不足，创建房间失败!");  
                }
                else{
                    cc.vv.alert.show("提示","创建房间失败,错误码:" + ret.errcode);
                }
            }
            else{
                cc.vv.gameNetMgr.connectGameServer(ret);
            }
        };
        
        var options = this._contentNode.children[this._selectIndex].getComponent("RoomOptions")

        var conf = options.getConfig()
        
        var data = {
            account:cc.vv.userMgr.account,
            sign:cc.vv.userMgr.sign,
            conf:JSON.stringify(conf)
        };
        console.log(data);
        cc.vv.wc.show("正在创建房间");
        cc.vv.http.sendRequest("/create_private_room",data,onCreate);   
    }

});
