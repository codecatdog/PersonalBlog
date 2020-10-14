var blogDao = require("../dao/BlogDao");
var tagsDao = require("../dao/TagsDao");
var tagBlogMappingDao = require("../dao/TagBlogMappingDao");
var timeUtil = require("../util/TimeUtil");
var respUtil = require("../util/RespUtil");
var url = require("url");
var path = new Map();

function editBlog(request, response) {
    var params = url.parse(request.url, true).query;
    var tags = params.tags.replace(/ /g, "").replace("，", ",");
    request.on("data", function(data) {
        blogDao.insertBlog(params.title, data.toString().trim(), tags, 0, timeUtil.getNow(), timeUtil.getNow(), function(result) {
            response.writeHead(200);
            response.write(respUtil.writeResult("success", "添加成功", null));
            response.end();
            var blogId = result.insertId;
            var tagList = tags.split(",");
            for (var i = 0; i < tagList.length; i ++) {
                if(tagList[i] == "") {
                    continue;
                } 
                queryTag(tagList[i], blogId);
            }
        });
    })
}

function queryTag(tag, blogId) {
    tagsDao.queryTag(tag, function(result) {
        if (result == null || result.length == 0) {
            insertTag(tag, blogId);
        } else {
            inserTagBlogMapping(result[0].id, blogId);
        }
    })
}

function insertTag(tag, blogId) {
    tagsDao.insertTag(tag, timeUtil.getNow(), timeUtil.getNow(),function(result) {
        inserTagBlogMapping(result.insertId, blogId);
    })
}

function inserTagBlogMapping(tagId, blogId) {
    tagBlogMappingDao.inserTagBlogMapping(tagId, blogId, timeUtil.getNow(), timeUtil.getNow(), function(result) {

    })
}
path.set("/editBlog", editBlog);

function queryBlog(request, response) {
    everydayDao.queryEveryday(function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success", "添加成功", result));
        response.end();
        var blogId = result.insertId;
        var tagList = tags.split(",");
        for (var i = 0; i < tagList.length; i ++) {
            if(tagList[i] == "") {
                continue;
            } 
            queryTag(tagList[i], blogId);
        }
    })
}

path.set("/queryBlog", queryBlog);

module.exports.path = path;