
var dbutil = require("./DBUtil");

function insertBlog(title, content, tags, views, ctime, utime, success) {
    var insertSql = "insert into blog (`title`, `content`, `tags`,`views`,`ctime`,`utime`) values (?, ?, ?, ?, ?, ?);";
    var params = [title, content, tags, views, ctime, utime];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function(error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}

function queryBlogCount(success) {
    querySql = "select count(1) as count from blog";
    var params = [];
    
    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function(error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    })
    connection.end();
}

function queryBlogByPage(page, pageSize, success) {
    var querySql = "select * from blog order by id desc limit ?, ?";
    var params = [page * pageSize, pageSize];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function(error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });
    connection.end();
}

module.exports.insertBlog = insertBlog;
module.exports.queryBlogByPage = queryBlogByPage;
module.exports.queryBlogCount = queryBlogCount;