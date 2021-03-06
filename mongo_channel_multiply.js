****************************************************************************************************************
添加置顶参数配置：
****************************************************************************************************************
db.basesysconfig.save({
"_class":"com.mosai.vliveshow.datachannel.domain.config.BaseSysConfig",
"type":"STICKCONFIG","name":"置顶参数","data":"{\"id\":null,\"type\":\"STICKCONFIG\",\"name\":\"置顶配置参数\",\"data\":null,\"remark\":null,\"updateTime\":null,\"createTime\":null,\"showSite\":\"0.9\",\"showAttribute\":\"0.1\",\"siteNum\":\"0.7\",\"giftNum\":\"0.3\",\"firstFan\":\"1\",\"secondFan\":\"0.5\",\"thirdFan\":\"0.3\",\"commonLive\":\"5\",\"newLive\":\"5\",\"step1Time\":\"3\",\"step1Num\":\"100\",\"step2Time\":\"15\",\"step2Num\":\"1000\",\"step3Time\":\"30\"}",
"createTime":new Date(),
"updateTime":new Date()
});
****************************************************************************************************************
自动增加机器人参数设置：(不用管)
****************************************************************************************************************
db.basesysconfig.save({
"_class":"com.mosai.vliveshow.datachannel.domain.config.BaseSysConfig",
"type":"ROBOTCONFIG","name":"机器人参数","data":"{\"id\":null,\"type\":\"ROBOTCONFIG\",\"name\":\"机器人参数\",\"data\":null,\"remark\":null,\"updateTime\":null,\"createTime\":null,\"used\":true,\"devideTime\":6,\"registerNum\":7675,\"registerLowRate\":\"0.05\",\"registerIncreaseBegin\":\"-0.2\",\"registerIncreaseEnd\":\"0.5\",\"registerAndroidBegin\":\"0.4\",\"registerAndroidEnd\":\"0.7\",\"activeNum\":8566,\"activeRateBegin\":\"0.3\",\"activeRateEnd\":\"0.7\",\"activeDayBegin\":\"0.6\",\"activeDayEnd\":\"0.9\",\"roomActiveBegin\":\"0.05\",\"roomActiveEnd\":\"0.10\",\"zanRandomNum\":\"30\",\"zanNum\":\"10\",\"followedHostRandomNum\":\"50\",\"followedHostNum\":\"10\",\"followrdRoomRandom\":\"100\",\"speakNum\":\"2\"}",
"createTime":new Date(),
"updateTime":new Date()
});
*********************************************************************
删除字段：(不用管)
db.basesysconfig.update({"type":"LIVE"},{$unset:{"refreshTime":""}});
***********************************************************************
增加refreshTime
***********************************************************************
var liveConfig=db.basesysconfig.findOne({"type":"LIVE"});
var data=JSON.parse(liveConfig.data);
data.refreshTime=3;
db.basesysconfig.update({"type":"LIVE"},{$set:{
"data":JSON.stringify(data)
}});

******
dev :
db.basesysconfig.save({
"_class":"com.mosai.vliveshow.datachannel.domain.config.BaseSysConfig",
"type":"ROBOTCONFIG","name":"机器人参数","data":"{\"id\":null,\"type\":\"ROBOTCONFIG\",\"name\":\"机器人参数\",\"data\":null,\"remark\":null,\"updateTime\":null,\"createTime\":null,\"used\":true,\"devideTime\":6,\"registerNum\":200,\"registerLowRate\":\"0\",\"registerIncreaseBegin\":\"0\",\"registerIncreaseEnd\":\"0\",\"registerAndroidBegin\":\"0.4\",\"registerAndroidEnd\":\"0.7\",\"activeNum\":200,\"activeRateBegin\":\"0.3\",\"activeRateEnd\":\"0.7\",\"activeDayBegin\":\"0.8\",\"activeDayEnd\":\"0.9\",\"roomActiveBegin\":\"0.05\",\"roomActiveEnd\":\"0.10\",\"zanRandomNum\":\"30\",\"zanNum\":\"10\",\"followedHostRandomNum\":\"50\",\"followedHostNum\":\"10\",\"followrdRoomRandom\":\"100\",\"speakNum\":\"2\"}",
"createTime":new Date(),
"updateTime":new Date()
});
***********************************************************************
机器人配置参数修改
***********************************************************************
var liveConfig=db.basesysconfig.findOne({"type":"ROBOTCONFIG"});
var data=JSON.parse(liveConfig.data);
data.used=true,
data.registerNum=7500,
data.registerIncreaseBegin=0,
data.registerIncreaseEnd=0,
data.activeNum=24000;
db.basesysconfig.update({"type":"ROBOTCONFIG"},{$set:{
"data":JSON.stringify(data)
}});


var liveConfig=db.basesysconfig.findOne({"type":"ROBOTCONFIG"});
var data=JSON.parse(liveConfig.data);
data.reuse=true;
db.basesysconfig.update({"type":"ROBOTCONFIG"},{$set:{
"data":JSON.stringify(data)
}});
