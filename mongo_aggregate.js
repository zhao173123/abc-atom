// db.getCollection('roomgift').find({"fromUser":NumberLong(6000007)});
//查询用户在时间段内送了多少V钻
db.getCollection('roomgift').aggregate([
    {$match:{"fromUser":{$in:[
        6060734
        ]},
//         "createTime":{$gt:ISODate("2016-11-18T11:40:17.538Z")},
        "roomId":"5879efb7d34e8ee73e573c82",
        "status":"SETTLE_SUCCESS"}},
    {$group:{"_id":"$fromUser",total:{$sum:"$diamond"}}}
]);

//查询多个用户送礼，主播收V票数
db.getCollection('roomgift').aggregate([
    {$match:{"fromUser":{$in:[
        6000018,6000206,6000322,6019666,6062800,6068360,6080665,6083049,6083348,6083505,6083633,6083655,6084021,6084021,6084093,6084348,6084637,6084637,6085523,6085523,6086737,6088490,6088490,6093669,6094151,6094254,6094254,6094687,6095213,6102336,6105382,6105573,6107603,6111848,6113308,6113771,6114482,6114531,6117495,6120087,6120121,6128912,6136984,6137644,6137644,6139044,6141950,6145934,6145934,6146698,6148783,6187403,6187403,6187893,6192831,6209008,6209008,6209096,6223596,6226203,6228591,6228755,6228779,6228808,6235693,6235693,6242220,6242220,6244182,6248177,6251302,6252592,6254204,6254279,6254279,6254279,6255807,6256222,6257210,6258499,6258997,6259688,6259688,6261511,6261511,6262801,6262841
        ]},
        "createTime":{$gt:ISODate("2016-11-18T11:40:17.538Z")},
        "status":"SETTLE_SUCCESS",
                "toUser":NumberLong(6080665)
        }},
    {$group:{"_id":"$toUser",total:{$sum:"$earning"}}}
]);

//活跃用户数据
db.getCollection('useractiontracking').find({Action:'ClickRefresh',createTime:{$gte:ISODate("2017-01-24T00:00:00Z"),$lt:ISODate("2017-01-25T00:00:00Z")}}).count()
