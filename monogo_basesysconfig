var liveConfig = db.basesysconfig.findOne({"type" : "CHANNEL"});
var data = JSON.parse(liveConfig.data);
data.channels =
        [
        {"channelId" : 1,
				"channelType" : "Recommend",
				"channelNameCN" : "推荐",
				"channelNameTW" : "推薦",
				"channelNameEN" : "推荐",
        "channelUrl":null},
        {"channelId" : 2,
				"channelType" : "MumShow",
				"channelNameCN" : "妈妈来秀",
				"channelNameTW" : "媽媽來秀",
				"channelNameEN" : "妈妈来秀",
        "channelUrl":null},
        {"channelId" : 3,
				"channelType" : "PresidentShow",
				"channelNameCN" : "总裁来秀",
				"channelNameTW" : "總裁來秀",
				"channelNameEN" : "总裁来秀",
        "channelUrl":null},
        {"channelId" : 4,
				"channelType" : "Course",
				"channelNameCN" : "精品课程",
				"channelNameTW" : "精品課程",
				"channelNameEN" : "精品课程",
        "channelUrl":null},
        {"channelId" : 5,
				"channelType" : "Review",
				"channelNameCN" : "精彩回顾",
				"channelNameTW" : "精彩回顧",
				"channelNameEN" : "精彩回顾",
        "channelUrl":"http://www.vliveshow.com/pages/replay/list.html"}
        ]

db.basesysconfig.update({"type" : "CHANNEL"}, {$set:{
    "data": JSON.stringify(data)
  }});
