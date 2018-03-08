
cc.CommonZOrder = {
    LOADING_TIPS				: 66,
    NOTICE_TIPS					: 67,
    TOUCH_MASK					: 68,
};

cc.PlayZOrder = {
    MJTABLE						: 1,
    PLAYER_INFO					: 2,
    MJTILES_LAYER				: 6,
    OUTMJTILE_SIGN				: 7,
    DECISION_BTN				: 8,
    DECISION_SHOW				: 9,
    PLAYER_INFO_TIPS			: 10,
    REPORT						: 16,
    DISMISS_ROOM				: 17,
    SETTING						: 18,
    CHAT						: 20,
    MJBAR_ANIMATION				: 21,
    FLIMLAYER           	    : 16,
    HAIDILAOYUE					: 23,
    TOP							: 24,
};

cc.EventType = {
    NETWORK_ERROR				: 1,
    BACK_MAIN_SCENE				: 2,
    APPLY_DIMISS_ROOM			: 3,
    GM_CHECK_HISTORY			: 4,
    READY_ENTER_ROOM			: 5,
};

cc.DecisionType = {
    //接炮胡
    TAKE_CANNON_WIN				: 1,
    //自摸胡
    SELF_DRAWN_WIN				: 2, 
    //暗杠
    DARK_BAR					: 3,
    //明杠
    BRIGHT_BAR					: 4,
    //碰
    PUNG						: 5,
    //吃
    EAT					        : 6,
    //暗补
    DARK_BU                     : 7,
    //眀补
    BRIGHT_BU                   : 8
};

cc.StartDecisionType = {
    //缺一色
    TYPE_QUEYISE				: 1,
    //板板胡
    TYPE_BANBANHU				: 2,
    //四喜
    TYPE_DASIXI					: 3,
    //六六顺
    TYPE_LIULIUSHUN				: 4
};

cc.ChatType = {
    FIX_MSG						: 1,
    INPUT_MSG					: 2,
    EMOJI						: 3,
    VOICE_MSG					: 4,
};

cc.BtnSfxType = {
    DEFAULT  				: 1,
    BACK 					: 2,
    CLOSE  					: 3,
    TAB  					: 4,
    GET  					: 5,
    USE  					: 6,
    INTENSIFY 				: 7, 
};  
cc.RoomType = {
    ROOM_XUEZHANDAODI       : 1,   //血战到底
    ROOM_XUELIUCHENGHE      : 2,   //血流成河	   
}; 

cc.RoomName = [
    'base',
    'xzdd',
    'xlch',
],  

cc.RoomTypeName = [
    'null',
    '血战到底',
    '血流成河',
],  

cc.LanguageType = {
    COMMON 						: 1,//普通话
    YUEYU 						: 2,//粤语 
}; 
cc.OpenAppAction = {
    ENTERROOM				: "enterroom",
    REPLAYVIEW				: "replay",
}; 
cc.SocketIPStatus = {
    DEFINE : 0,
    SAVEIP : 1,
}; 
cc.PlayInfoType = {
    WANFA 	: 1,
    PAIXING : 2,
}; 
cc.AppID = 20001;
cc.Language = 1;
cc.ShieldVoice = 0;
cc.funnyEnable = 0;
