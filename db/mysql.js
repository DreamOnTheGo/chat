/**
 * Created by DELL on 2016/6/6.
 */
var mysql=require('mysql');

function connectServer(){

    var client=mysql.createConnection({
        host:'sensestrong.mysql.rds.aliyuncs.com',
        user:'sunyuelei',
        password:'Sunyuelei1586',
        database:'jinlai',
        port:3306
    })

    return client;
}


function loginFun(client,username,callback){
    //client为一个mysql连接对象
    client.query('select password from nodeuser where username="'+username+'"',function(err,results,fields){
        if(err){
            throw err;
        }

        callback(results);
    });
}


function registerFun(client , username , password,nickname,email,callback){
    client.query('insert into nodeuser value(?,?,?,?)', [username, password,nickname,email], function(err,result){
        if( err ){
            console.log( "error:" + err.message);
            return err;
        }
        callback(err);
    });
}




exports.connect = connectServer;
exports.loginFun = loginFun;
exports.registerFun = registerFun;
