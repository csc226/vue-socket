var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/index.html');
// });

io.on('connection', function(socket) {
    var client1Text;

    // console.log(socket.id)
    // socket.broadcast.emit('inputFocus', true)
    socket.on('inputFocus1', function(msg) {
        console.log("focus1")
        io.emit('inputFocus1', true)
    })
    socket.on('inputBlur1', function(msg) {
        console.log("blur1")
        io.emit('inputBlur1', false)
    })
    socket.on('client1', function(msg) {
            // client1Text = msg
            io.emit('client1', msg)

            // socket.volatile.emit('client1', msg)
        })
        // console.log('client1Text2:', client1Text)
        // var tweets = setInterval(function() {
        //     socket.volatile.emit('client1', client1Text);
        // }, 100);
    socket.on('client2', function(msg) {
        io.emit('client2', msg)
    })
    socket.on('inputFocus2', function(msg) {
        console.log("focus2")
        io.emit('inputFocus2', true)
    })
    socket.on('inputBlur2', function(msg) {
        console.log("blur2")
        io.emit('inputBlur2', false)
    })
})

// io.on('connection', function(socket) {
//     console.log('打印：', io.sockets.connected)
//     if (io.sockets.connected[socket.id]) {
//         io.sockets.connected[socket.id].emit('client1', 'surprise');
//     }
// socket.broadcast.emit('client1', msg);
// function getBieberTweet(cb) {
//     cb('check out iambieber.com');
// }
// var tweets = setTimeout(function() {
//     // getBieberTweet(function(tweet) {
//     socket.volatile.emit('client1', 'tweet');
//     // });
// }, 100);

// socket.on('disconnect', function() {
//     clearInterval(tweets);
// });
// });

http.listen(port, function() {
    console.log('listening on *:', port)
})

// {
//     '-CH0HFupDaSqG5OIAAAB': Socket {
//         nsp: Namespace {
//             name: '/',
//             server: [Object],
//             sockets: [Object],
//             connected: [Circular],
//             fns: [],
//             ids: 0,
//             rooms: [],
//             flags: {},
//             adapter: [Object],
//             _events: [Object],
//             _eventsCount: 1
//         },
//         server: Server {
//             nsps: [Object],
//             parentNsps: Map {},
//             _path: '/socket.io',
//             _serveClient: true,
//             parser: [Object],
//             encoder: Encoder {},
//             _adapter: [Function: Adapter],
//             _origins: '*:*',
//             sockets: [Object],
//             eio: [Object],
//             httpServer: [Object],
//             engine: [Object]
//         },
//         adapter: Adapter {
//             nsp: [Object],
//             rooms: [Object],
//             sids: [Object],
//             encoder: Encoder {}
//         },
//         id: '-CH0HFupDaSqG5OIAAAB',
//         client: Client {
//             server: [Object],
//             conn: [Object],
//             encoder: Encoder {},
//             decoder: [Object],
//             id: '-CH0HFupDaSqG5OIAAAB',
//             request: [Object],
//             onclose: [Function: bound],
//             ondata: [Function: bound],
//             onerror: [Function: bound],
//             ondecoded: [Function: bound],
//             sockets: [Object],
//             nsps: [Object],
//             connectBuffer: []
//         },
//         conn: Socket {
//             id: '-CH0HFupDaSqG5OIAAAB',
//             server: [Object],
//             upgrading: false,
//             upgraded: true,
//             readyState: 'open',
//             writeBuffer: [],
//             packetsFn: [],
//             sentCallbackFn: [],
//             cleanupFn: [Array],
//             request: [Object],
//             remoteAddress: '::ffff:192.168.1.125',
//             checkIntervalTimer: null,
//             upgradeTimeoutTimer: null,
//             pingTimeoutTimer: [Object],
//             transport: [Object],
//             _events: [Object],
//             _eventsCount: 3
//         },
//         rooms: { '-CH0HFupDaSqG5OIAAAB': '-CH0HFupDaSqG5OIAAAB' },
//         acks: {},
//         connected: true,
//         disconnected: false,
//         handshake: {
//             headers: [Object],
//             time: 'Thu Apr 09 2020 10:41:50 GMT+0800 (中国标准时间)',
//             address: '::ffff:192.168.1.125',
//             xdomain: true,
//             secure: false,
//             issued: 1586400110163,
//             url: '/socket.io/?EIO=3&transport=polling&t=N5SqAP8',
//             query: [Object]
//         },
//         fns: [],
//         flags: {},
//         _rooms: []
//     },
//     VElSD2xPKaDWu18hAAAC: Socket {
//         nsp: Namespace {
//             name: '/',
//             server: [Object],
//             sockets: [Object],
//             connected: [Circular],
//             fns: [],
//             ids: 0,
//             rooms: [],
//             flags: {},
//             adapter: [Object],
//             _events: [Object],
//             _eventsCount: 1
//         },
//         server: Server {
//             nsps: [Object],
//             parentNsps: Map {},
//             _path: '/socket.io',
//             _serveClient: true,
//             parser: [Object],
//             encoder: Encoder {},
//             _adapter: [Function: Adapter],
//             _origins: '*:*',
//             sockets: [Object],
//             eio: [Object],
//             httpServer: [Object],
//             engine: [Object]
//         },
//         adapter: Adapter {
//             nsp: [Object],
//             rooms: [Object],
//             sids: [Object],
//             encoder: Encoder {}
//         },
//         id: 'VElSD2xPKaDWu18hAAAC',
//         client: Client {
//             server: [Object],
//             conn: [Object],
//             encoder: Encoder {},
//             decoder: [Object],
//             id: 'VElSD2xPKaDWu18hAAAC',
//             request: [Object],
//             onclose: [Function: bound],
//             ondata: [Function: bound],
//             onerror: [Function: bound],
//             ondecoded: [Function: bound],
//             sockets: [Object],
//             nsps: [Object],
//             connectBuffer: []
//         },
//         conn: Socket {
//             id: 'VElSD2xPKaDWu18hAAAC',
//             server: [Object],
//             upgrading: false,
//             upgraded: false,
//             readyState: 'open',
//             writeBuffer: [],
//             packetsFn: [],
//             sentCallbackFn: [],
//             cleanupFn: [Array],
//             request: [Object],
//             remoteAddress: '::ffff:192.168.1.125',
//             checkIntervalTimer: null,
//             upgradeTimeoutTimer: null,
//             pingTimeoutTimer: [Object],
//             transport: [Object],
//             _events: [Object],
//             _eventsCount: 3
//         },
//         rooms: {},
//         acks: {},
//         connected: true,
//         disconnected: false,
//         handshake: {
//             headers: [Object],
//             time: 'Thu Apr 09 2020 10:42:06 GMT+0800 (中国标准时间)',
//             address: '::ffff:192.168.1.125',
//             xdomain: true,
//             secure: false,
//             issued: 1586400126635,
//             url: '/socket.io/?EIO=3&transport=polling&t=N5SqEQX',
//             query: [Object]
//         },
//         fns: [],
//         flags: {},
//         _rooms: []
//     }
// }