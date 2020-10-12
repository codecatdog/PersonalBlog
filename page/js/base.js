var randomTags = new Vue({
    el: "#random_tags",
    data: {
        tags: ["c++", "java", "c#", ".net", "python", "cuda"]
    },
    computed: {
        randomColor: function() {
            return function() {
                var red = Math.random() * 255;
                var green = Math.random() * 255;
                var blue = Math.random() * 255;
                return "rgb(" + red + "," + green + "," + blue + ")";
            }
        },
        randomSize: function() {
            return function() {
                var size = (Math.random() * 20 + 12) + "px";
                return size;
            }
        }
    },
    created: function() {

    }
})

var newHot = new Vue({
    el: "#new_hot",
    data: {
        titleList: [
            {title: "这是一个链接", link: "http://www.baidu.com"},
            {title: "这是一个链接", link: "http://www.baidu.com"},
            {title: "这是一个链接", link: "http://www.baidu.com"},
            {title: "这是一个链接", link: "http://www.baidu.com"},
            {title: "这是一个链接", link: "http://www.baidu.com"}
        ]
    }
})

var newComments = new Vue({
    el: "#new_comments",
    data: {
        commentsList: [
            {
                name: "username",
                date: "2019-20-20",
                comment: "this is a comment"
            }, {
                name: "username",
                date: "2019-20-20",
                comment: "this is a comment"
            }, {
                name: "username",
                date: "2019-20-20",
                comment: "this is a comment"
            }, {
                name: "username",
                date: "2019-20-20",
                comment: "this is a comment"
            }, {
                name: "username",
                date: "2019-20-20",
                comment: "this is a comment"
            }
        ]
    }
})