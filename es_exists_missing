curl '172.16.4.141:9200/vliveshow/_search?pretty' -d '
{
"query":{
  "bool" : {
    "must" : [ {
      "term" : {
        "isTrialHost" : false
      }
    }, {
      "term" : {
        "living" : false
      }
    } ],
    "must_not" : [ {
      "exists" : {
        "field" : "courseId"
      }
    }]
  }
}
}'
//查到值，没有过滤
curl '172.16.4.141:9200/vliveshow/_search?pretty' -d '
{
"query":{
  "bool" : {
    "must" : [ {
      "term" : {
        "isTrialHost" : false
      }
    }, {
      "term" : {
        "living" : false
      }
    } ,{
    "term" : {
      "_id" : "582c50a3e4b0d2ce8f15d03d"
    }
    }],
    "filter": {
               "missing" : { "field" : "courseId" }
    }
  }
}
}'
//查不到值，把缺少courseId过滤掉了
curl '172.16.4.141:9200/vliveshow/_search?pretty' -d '
{
"query":{
  "bool" : {
    "must" : [ {
      "term" : {
        "isTrialHost" : false
      }
    }, {
      "term" : {
        "living" : false
      }
    } ,{
    "term" : {
      "_id" : "582c50a3e4b0d2ce8f15d03d"
    }
    }],
    "filter": {
               "exists" : { "field" : "courseId" }
    }
  }
}
}'
//////////
//582c50a3e4b0d2ce8f15d03d --课程直播间
//583c1cdde4b068513114239f(无courseId),5837a557e4b088b8eaab3eaa(courseId=null)普通直播间
说明：exists只可以查到field存在且有值的记录
missing可以查到field=null和没有field的记录
******************************************************
