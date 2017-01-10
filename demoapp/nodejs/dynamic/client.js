var protoPath = __dirname + '/minglog.proto';

var grpc = require('grpc');
var minglog_proto = grpc.load(protoPath).minglogger;

var mlog = require('./code_gen/minglog_pb');

console.dir(new mlog());

function main() {

    var client = new minglog_proto.LogService('localhost:50051', grpc.credentials.createInsecure());

    var log = {
        developer: 1
    };
    client.writeLog(log, function (err, response) {
        console.dir(response);
    });



}

// main();







