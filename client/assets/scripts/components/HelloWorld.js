
var protobufjs = require('protobuf-js')
var protobuf = protobufjs.protobuf

 
cc.Class({
    extends: cc.Component, 
    properties: { 
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!'
    },

    // use this for initialization
    onLoad: function() { 
        this.testProto();
        /***
        this.testTimeago();
        this.testCryto(); 
        this.testProtobuf();
        */
    },
    testProto:function() { 
        
        console.log("**************protobuf.load******************************");
        //protobuf 
        protobuf.load("protobuf/awesome.proto", function(err, root) {
            
            console.log("加载成功");

            if (err)
                throw err;


            // Obtain a message type
            var AwesomeMessage = root.lookupType("awesomepackage.AwesomeMessage");
        
            // Exemplary payload
            var payload = { awesomeField: "AwesomeString" };
        
            // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
            var errMsg = AwesomeMessage.verify(payload);
            if (errMsg)
                throw Error(errMsg);
        
            // Create a new message
            var message = AwesomeMessage.create(payload); // or use .fromObject if conversion is necessary
        
            // Encode a message to an Uint8Array (browser) or Buffer (node)
            var buffer = AwesomeMessage.encode(message).finish();
            // ... do something with buffer
        
            // Decode an Uint8Array (browser) or Buffer (node) to a message
            var message = AwesomeMessage.decode(buffer);
            // ... do something with message
        
            // If the application uses length-delimited buffers, there is also encodeDelimited and decodeDelimited.
        
            // Maybe convert the message back to a plain object
            var object = AwesomeMessage.toObject(message, {
                longs: String,
                enums: String,
                bytes: String,
                // see ConversionOptions
            });


            console.log("解析成功");
        });
    },

    // called every frame
    update:function(dt) {},

    //test timeago
    testTimeago: function() {
        var timeago = require('timeago')
        var msg = timeago().format(Date.now() - 11 * 1000 * 60 * 60, 'zh_CN');
        console.log("timeago----->" + msg);
    },
    //test cryto
    testCryto: function() {
        var CryptoJS = require("crypto-js")
        // Encrypt
        var ciphertext = CryptoJS.AES.encrypt('my message', 'secret key 123');
        cc.log("ciphertext---->" + ciphertext);
        // Decrypt
        var bytes = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
        var plaintext = bytes.toString(CryptoJS.enc.Utf8);
        cc.log("plaintext---->" + plaintext); 
        var md5Str = CryptoJS.MD5('my message');
        cc.log("md5Str---->" + md5Str);
    },     
    testProtobuf : function() {
        var hall_pb = require('hall_pb')

        var message = new hall_pb.HallUserLogin();
        message.setUserid(111);
        message.setSign("test");
        
        var msgBytes = message.serializeBinary()
        var message = new hall_pb.HallUserLogin.deserializeBinary(msgBytes);
        console.log("It's HelloWorld onMessage----->" + message.getSign() + "userid" + message.getUserid());
    }
});