*********************************************************************
V2.6.3
*********************************************************************
添加新的频道信息
db.basesysconfig.save({
"_class":"com.mosai.vliveshow.datachannel.domain.config.BaseSysConfig",
"type":"CHANNELINFO","name":"首页栏目","data":"{\"id\":null,\"type\":\"CHANNELINFO\",\"name\":\"首页栏目\",\"data\":null,\"remark\":null,\"updateTime\":null,\"createTime\":null,\"channels\":null}",
"createTime":new Date(),"updateTime":new Date()
});

//添加data.channels数据：
//ps:妈妈来秀已经下线
var liveConfig=db.basesysconfig.findOne({"type":"CHANNELINFO"});
var data=JSON.parse(liveConfig.data);
data.channels=
[
			{"channelId":1,
				"channelType":"Recommend",
				"channelNameCN":"推荐",
				"channelNameTW":"推薦",
				"channelNameEN":"推荐",
				"channelUrl":null,
				"type":"pinned"},
			{"channelId":3,
				"channelType":"PresidentShow",
				"channelNameCN":"总裁来秀",
				"channelNameTW":"總裁來秀",
				"channelNameEN":"总裁来秀",
				"channelUrl":null,
				"type":"special"},
				// 下线 -- begin
				{"channelId":2,
					"channelType":"MumShow",
					"channelNameCN":"妈妈来秀",
					"channelNameTW":"媽媽來秀",
					"channelNameEN":"妈妈来秀",
					"channelUrl":null,
					"type":"special"},
					// -- end
			{"channelId":4,
				"channelType":"Course",
				"channelNameCN":"精品课程",
				"channelNameTW":"精品課程",
				"channelNameEN":"精品课程",
				"channelUrl":null,
				"type":"special"},
			{"channelId":5,
				"channelType":"Review",
				"channelNameCN":"精彩回顾",
				"channelNameTW":"精彩回顧",
				"channelNameEN":"精彩回顾",
				"channelUrl":null,
				"type":"special"},
			{"channelId":6,
					"channelType":"LifeStyle",
					"channelNameCN":"生活时尚",
					"channelNameTW":"生活時尚",
					"channelNameEN":"生活时尚",
					"channelUrl":null,
					"type":"normal"},
			{"channelId":7,
				"channelType":"Arts",
				"channelNameCN":"艺术人文",
				"channelNameTW":"藝術人文",
				"channelNameEN":"艺术人文",
				"channelUrl":null,
				"type":"normal"},
			{"channelId":8,
				"channelType":"OuterSports",
				"channelNameCN":"养身健康",
				"channelNameTW":"養身健康",
				"channelNameEN":"养身健康",
				"channelUrl":null,
				"type":"normal"}
]

db.basesysconfig.update({"type":"CHANNELINFO"},{$set:{
"data":JSON.stringify(data)
}});
*********************************************************************
频道信息的第二种修改方式：
*********************************************************************
var channel = db.basesysconfig.findOne({"type":"CHANNELINFO"})
var data=JSON.parse(channel.data);
data.channels[1] = {
                        "channelId" : 3,
                        "channelType" : "PresidentShow",
                        "channelNameCN" : "总裁来秀",
                        "channelNameTW" : "總裁來秀",
                        "channelNameEN" : "总裁来秀",
                        "channelUrl" : null
                };
db.basesysconfig.update({"type" : "CHANNEL"}, {$set:{
"data": JSON.stringify(data)
}});
*********************************************************************
V2.6.4
*********************************************************************
var liveConfig=db.basesysconfig.findOne({"type":"CHANNELINFO"});
var data=JSON.parse(liveConfig.data);
data.channels=
[
			{"channelId":1,
				"channelType":"Recommend",
				"channelNameCN":"推荐",
				"channelNameTW":"推薦",
				"channelNameEN":"推荐",
				"channelUrl":null,
				"type":"pinned"},
			{"channelId":3,
				"channelType":"PresidentShow",
				"channelNameCN":"总裁来秀",
				"channelNameTW":"總裁來秀",
				"channelNameEN":"总裁来秀",
				"channelUrl":null,
				"type":"special"},
			{"channelId":4,
				"channelType":"Course",
				"channelNameCN":"精品课程",
				"channelNameTW":"精品課程",
				"channelNameEN":"精品课程",
				"channelUrl":null,
				"type":"special"},
			{"channelId":5,
				"channelType":"Review",
				"channelNameCN":"精彩回顾",
				"channelNameTW":"精彩回顧",
				"channelNameEN":"精彩回顾",
				"channelUrl":null,
				"type":"special"},
			{"channelId":6,
					"channelType":"LifeStyle",
					"channelNameCN":"生活时尚",
					"channelNameTW":"生活時尚",
					"channelNameEN":"生活时尚",
					"channelUrl":null,
					"type":"normal"},
			{"channelId":7,
				"channelType":"Arts",
				"channelNameCN":"艺术人文",
				"channelNameTW":"藝術人文",
				"channelNameEN":"艺术人文",
				"channelUrl":null,
				"type":"normal"},
			{"channelId":8,
					"channelType":"Music",
					"channelNameCN":"音乐",
					"channelNameTW":"音樂",
					"channelNameEN":"音乐",
					"channelUrl":null,
					"type":"normal"},
			{"channelId":9,
					"channelType":"OuterSports",
					"channelNameCN":"户外体育",
					"channelNameTW":"戶外體育",
					"channelNameEN":"户外体育",
					"channelUrl":null,
					"type":"normal"},
			{"channelId":10,
				"channelType":"Health",
				"channelNameCN":"健康养生",
				"channelNameTW":"健康養生",
				"channelNameEN":"健康养生",
				"channelUrl":null,
				"type":"normal"},
			{"channelId":11,
				"channelType":"More",
				"channelNameCN":"更多精彩",
				"channelNameTW":"更多精彩",
				"channelNameEN":"更多精彩",
				"channelUrl":null,
				"type":"normal"},
]

db.basesysconfig.update({"type":"CHANNELINFO"},{$set:{
"data":JSON.stringify(data)
}});
