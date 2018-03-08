var RoomOptions = cc.Class({
    extends: cc.Component, 
    properties: { 
        _key : "",
        _jsNodes:null,
        _rsNodes:null,
        _wfNodes:null,
        _fdNodes:null,
        _dfNodes:null,
    },  
    // use this for initialization
    onLoad: function () { 
        this.initJuShu();
        this.initRenShu();
        this.initWanFa();
        this.initFengDing();
    },  
    onDestory:function() { 
    },
    getNodes:function(parent,name,count){
        var node = cc.vv.utils.seekNodeByName(parent, name);
        if(node==null){
            return null;
        }   
        var ret = []
        for (var i = 1; i <= count; i++) {  
            var curNode = node.getChildByName(name+"_"+i); 
            ret.push(curNode);
        }   
        return ret;
    },  
    getKey:function(name){
        return 'room_'+name+'_'+this._key;
    },
    callbackJuShu:function(event,eventData){
        console.log("callbackJuShu "+event.target.name+" eventData="+eventData);  
        var jushuNumber = eventData
        cc.sys.localStorage.setItem(this.getKey('jushu'),jushuNumber); 
    },
    initJuShu:function(){   
        var jsData = [8,16];
        var nodes = this.getNodes(this.node,"jushu",jsData.length);
        if(nodes==null){
            return;
        }
        this._jsNodes = nodes;
        
        var jushuNumber = cc.sys.localStorage.getItem(this.getKey('jushu'));

        jushuNumber = parseInt(jushuNumber) || 8
        
        for (var index = 0; index < nodes.length; index++){ 
            var element = nodes[index];
            if(element==null){
                continue;
            }   
            var toggle = element.getComponent(cc.Toggle) 
            var checkEventHandler = new cc.Component.EventHandler();
            checkEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
            checkEventHandler.component = "RoomOptions"
            checkEventHandler.handler = "callbackJuShu";
            checkEventHandler.customEventData = ""+jsData[index]; 
            toggle.checkEvents.push(checkEventHandler);  
            if(jushuNumber==jsData[index]){
                toggle.check();
            }else{
                toggle.uncheck();
            }
        }   
    },   
    callbackRenShu:function(event,eventData){
        console.log("RoomOptions_xlch callbackRenShu "+event.target.name+" eventData="+eventData);
        var renshuNumber = eventData
        cc.sys.localStorage.setItem(this.getKey('renshu'),renshuNumber);  
    },  
    initRenShu:function(){  
        var rsData = [2,3,4];
        var nodes = this.getNodes(this.node,"renshu",rsData.length);
        if(nodes==null){
            return;
        }
        this._rsNodes = nodes;
        
        var renshuNumber = cc.sys.localStorage.getItem(this.getKey('renshu'));  
        renshuNumber = parseInt(renshuNumber) || 4;
        
        for (var index = 0; index < nodes.length; index++){ 
            var element = nodes[index];
            if(element==null){
                continue;
            }   
            var toggle = element.getComponent(cc.Toggle) 
            var checkEventHandler = new cc.Component.EventHandler();
            checkEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
            checkEventHandler.component = "RoomOptions"
            checkEventHandler.handler = "callbackRenShu";
            checkEventHandler.customEventData = ""+rsData[index]; 
            toggle.checkEvents.push(checkEventHandler);  
            if(renshuNumber==rsData[index]){
                toggle.check();
            }else{
                toggle.uncheck();
            }
        }   
    },  
    callbackWanFa:function(event,eventData){ 
        console.log("RoomOptions_xlch callbackWanFa "+event.target.name+" eventData="+eventData);
        
        var toggle = event.target.getComponent(cc.Toggle);
        if(toggle==null){
            toggle = event.target.parent.getComponent(cc.Toggle);
        }
        if(toggle==null){
            return 
        }   
        var wanfaNumber = parseInt(eventData)
        var wanfaJson = cc.sys.localStorage.getItem(this.getKey('wanfa'));    
        wanfaJson = JSON.parse(wanfaJson)
        if(toggle.isChecked){
            wanfaJson[wanfaNumber-1]=wanfaNumber
        }else{
            wanfaJson[wanfaNumber-1]=0
        }   
        console.log(wanfaJson.toString()) 
        cc.sys.localStorage.setItem(this.getKey('wanfa'),JSON.stringify(wanfaJson));  
    },  
    initWanFa:function(){  
        var wfData = [1,2,3,4,5,6,7,8];
        var nodes = this.getNodes(this.node,"wanfa",wfData.length);
        if(nodes==null){
            return;
        }   
        this._wfNodes = nodes;
        
        var wanfaJson = cc.sys.localStorage.getItem(this.getKey('wanfa'));
        wanfaJson = JSON.parse(wanfaJson) || [1,0,3,0,0,0,0,0];
        cc.sys.localStorage.setItem(this.getKey('wanfa'),JSON.stringify(wanfaJson)); 
        
        for (var index = 0; index < nodes.length; index++){ 
            var element = nodes[index];
            if(element==null){
                continue;
            }   
            var toggle = element.getComponent(cc.Toggle)  
            if(parseInt(wanfaJson[index])>0){
                toggle.check()
            }else{
                toggle.uncheck()
            }   
            var checkEventHandler = new cc.Component.EventHandler();
            checkEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
            checkEventHandler.component = "RoomOptions"
            checkEventHandler.handler = "callbackWanFa";
            checkEventHandler.customEventData = ""+(index+1);
            toggle.checkEvents.push(checkEventHandler);  
        }   
        
    },  
    callbackFengDing:function(event,eventData){
        console.log("RoomOptions_xlch callbackFengDing "+event.target.name+" eventData="+eventData);
        var fengdingNumber = eventData
        cc.sys.localStorage.setItem(this.getKey('fengding'),fengdingNumber); 
    },  
    initFengDing:function(){  
        var fdData = [3,4,5];
        var nodes = this.getNodes(this.node,"fengding",fdData.length);
        if(nodes==null){
            return;
        }    
        this._fdNodes = nodes;
        
        var fengdingNumber = cc.sys.localStorage.getItem(this.getKey('fengding'));  
        fengdingNumber = parseInt(fengdingNumber) || 4;
        
        for (var index = 0; index < nodes.length; index++){ 
            var element = nodes[index];
            if(element==null){
                continue;
            }   
            var toggle = element.getComponent(cc.Toggle) 
            var checkEventHandler = new cc.Component.EventHandler();
            checkEventHandler.target = this.node; //这个 node 节点是你的事件处理代码组件所属的节点
            checkEventHandler.component = "RoomOptions"
            checkEventHandler.handler = "callbackFengDing";
            checkEventHandler.customEventData = ""+fdData[index]; 
            toggle.checkEvents.push(checkEventHandler);  
            if(fengdingNumber==fdData[index]){
                toggle.check();
            }else{
                toggle.uncheck();
            } 
        }   
    },  
    getConfig:function(){ 
        /**
         * 
        var difen = 0;
        for(var i = 0; i < self._difenxuanze.length; ++i){
            if(self._difenxuanze[i].checked){
                difen = i;
                break;
            }
        }
        
        var zimo = 0;
        for(var i = 0; i < self._zimo.length; ++i){
            if(self._zimo[i].checked){
                zimo = i;
                break;
            }     
        }

        var huansanzhang = self._wanfaxuanze[0].checked;        
        var jiangdui = self._wanfaxuanze[1].checked;
        var menqing = self._wanfaxuanze[2].checked;
        var tiandihu = self._wanfaxuanze[3].checked;
        
        var type = 0;
        for(var i = 0; i < self._leixingxuanze.length; ++i){
            if(self._leixingxuanze[i].checked){
                type = i;
                break;
            }     
        }
        
        if(type == 0){
            type = "xzdd";
        }
        else{
            type = "xlch";
        }
        
        var zuidafanshu = 0;
        for(var i = 0; i < self._zuidafanshu.length; ++i){
            if(self._zuidafanshu[i].checked){
                zuidafanshu = i;
                break;
            }     
        }
        
        
        var jushuxuanze = 0;
        for(var i = 0; i < self._jushuxuanze.length; ++i){
            if(self._jushuxuanze[i].checked){
                jushuxuanze = i;
                break;
            }     
        }
        
        var dianganghua = 0;
        for(var i = 0; i < self._dianganghua.length; ++i){
            if(self._dianganghua[i].checked){
                dianganghua = i;
                break;
            }     
        }
        
        var conf = {
            type:type,
            difen:difen,
            zimo:zimo,
            jiangdui:jiangdui,
            huansanzhang:huansanzhang,
            zuidafanshu:zuidafanshu,
            jushuxuanze:jushuxuanze,
            dianganghua:dianganghua,
            menqing:menqing,
            tiandihu:tiandihu,   
        };  
        * 
        */
        return {}
    }

});

module.exports = RoomOptions;
