
db.getCollection('roomgift').find({"fromUser":NumberLong(6713188),"status":"SETTLE_SUCCESS"},{"timestamp":1,"_id":0})

// db.getCollection('roomgift').aggregate([
//     {$match:{"fromUser":{$in:[
//         6060734
//         ]},
//         "createTime":{$gt:ISODate("2016-11-01T05:53:38.093Z"),$lt:ISODate("2016-11-03T05:53:38.093Z")},
//         "status":"SETTLE_SUCCESS"}},
//     {$group:{"_id":"$fromUser",total:{$sum:"$diamond"}}}
// ]);

db.getCollection('roomgift').aggregate([
    {$match:
        {"fromUser":{$in:[6060734]},
       "roomId":"587590fcd34e8ee73e55ee9b"
        ,"status":"SETTLE_SUCCESS"
        }},
    {$group:{"_id":"$fromUser",total:{$sum:"$diamond"}}}
]);

db.getCollection('roomgift').find({"roomId":"58426f2fd34e4e183407048c","fromUser":NumberLong(6245096)});

db.getColection('liveshow').find({"layout.roomId":"587590fcd34e8ee73e55ee9b"});

db.getCollection('roomgift').find({"roomId":"5879efb7d34e8ee73e573c82"})

db.getCollection('roomgift').aggregate([
    {$match:{
//         "fromUser":{$in:[
//         6060734
//         ]},
//         "createTime":{$gt:ISODate("2016-11-18T11:40:17.538Z")},
        "roomId":"58426f2fd34e4e183407048c",
        "status":"SETTLE_SUCCESS"}},
    {$group:{"_id":"$fromUser",total:{$sum:"$diamond"}}}
]);


db.getCollection('roomgift').aggregate([
    {$match:{"fromUser":{$in:[
        6245096
        ]},
//         "createTime":{$gt:ISODate("2016-11-18T11:40:17.538Z")},
        "roomId":"58426f2fd34e4e183407048c"}},
    {$group:{"_id":"$fromUser",total:{$sum:"$diamond"}}}
]);
