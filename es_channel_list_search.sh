1.常态直播间
curl '172.16.4.141:9200/vliveshow/_search?pretty' -d '
{
"query":
{
  "bool" : {
    "must" : [ {
      "term" : {
        "isTrialHost" : false
      }
    }, {
      "term" : {
        "living" : true
      }
    } ],
    "must_not" : [ {
      "exists" : {
        "field" : "courseId"
      }
    }, {
      "multi_match" : {
        "query" : "妈妈来",
        "fields" : [ "topics" ]
      }
    }, {
      "multi_match" : {
        "query" : "媽媽來",
        "fields" : [ "topics" ]
      }
    }, {
      "multi_match" : {
        "query" : "总裁来",
        "fields" : [ "topics" ]
      }
    }, {
      "multi_match" : {
        "query" : "總裁來",
        "fields" : [ "topics" ]
      }
    } ]
  }
}
}'
2.妈妈来秀直播间
curl '172.16.4.141:9200/vliveshow/_search?pretty' -d '
{
"query":
{
  "bool" : {
    "must" : [ {
      "term" : {
        "isTrialHost" : false
      }
    }, {
      "term" : {
        "living" : true
      }
    }, {
      "or" : {
        "filters" : [ {
          "match" : {
            "topics" : {
              "query" : "妈妈来秀",
              "type" : "phrase_prefix"
            }
          }
        }, {
          "match" : {
            "topics" : {
              "query" : "媽媽來秀",
              "type" : "phrase_prefix"
            }
          }
        } ]
      }
    } ]
  }
}
}'

3.总裁来秀直播间
curl '172.16.4.141:9200/vliveshow/_search?pretty' -d '
{
"query":
{
  "bool" : {
    "must" : [ {
      "term" : {
        "isTrialHost" : false
      }
    }, {
      "term" : {
        "living" : true
      }
    }, {
      "or" : {
        "filters" : [ {
          "match" : {
            "topics" : {
              "query" : "总裁来秀",
              "type" : "phrase_prefix"
            }
          }
        }, {
          "match" : {
            "topics" : {
              "query" : "總裁來秀",
              "type" : "phrase_prefix"
            }
          }
        } ]
      }
    } ]
  }
}
}'

4.课程直播间
curl '172.16.4.141:9200/vliveshow/_search?pretty' -d '
{
"query":
{
  "bool" : {
    "must" : [ {
      "term" : {
        "isTrialHost" : false
      }
    }, {
      "term" : {
        "living" : true
      }
    } ],
    "filter" : {
      "exists" : {
        "field" : "courseId"
      }
    }
  }
}
}'


//查询单条
curl '172.16.4.141:9200/vliveshow/_search?pretty' -d '
{
  "query":{"match":{"_id":"5885a62ee4b0e1aa8fb5dd35"}}
}'
//修改
curl -XPOST '172.16.4.141:9200/vliveshow/_update?pretty' -d '
{
  "script":{
      "inline":"living=true",
      "params":{
        "ctx._source._id":"58085ad7e4b06e7b108eca76"
      }
  }
}'
//查询所有
curl '172.16.4.141:9200/vliveshow/_search?pretty' -d'
{
  "query":{"match_all":{}}
}'
//查询过课程的直播间
curl '172.16.4.141:9200/vliveshow/_search?pretty' -d'
{
  "query":{"match":{"lessonId":{$exists:true}}}
}'
//通过id查询
curl '172.16.4.141:9200/vliveshow/_search?pretty' -d '
{
"query":{
  "bool" : {
  "must" : {
    "term" : {
      "_id" : "58b63e6ce4b0ad6578abc514"
    }
  }
}
}
}'

//582c50a3e4b0d2ce8f15d03d
curl '172.16.4.141:9200/vliveshow/_search?pretty' -d '
{
"query":{
  "bool":{
    "must":{
      "term":{"_id":"582c50a3e4b0d2ce8f15d03d"}
    }
  }
}
}'
////////查询所有正在进行的直播
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
      "living" : true
    }
  } ]
}}
}'
