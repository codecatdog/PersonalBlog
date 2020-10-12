var everyDay = new Vue({
    el: "#every_day",
    data: {
        content: 'This is a sentence.'
    },
    computed: {
        getContent: function() {
            return this.content;
        }
    },
    created: function() {
        //请求数据 -> content
    }
})

var articleList = new Vue({
    el: "#article_list",
    data: {
        articleList: [
            {
                title: " this is a title.",
                content: "hdjskkk dhshdsdh ksdjksdjksdks djskdjkskslaladjskkd",
                date: "2019-01-20",
                views: "101",
                tags: "test1 test2",
                id: "1", 
                link: ""
            },
            {
                title: " this is a title.",
                content: "hdjskkk dhshdsdh ksdjksdjksdks djskdjkskslaladjskkd",
                date: "2019-01-20",
                views: "101",
                tags: "test1 test2",
                id: "1", 
                link: ""
            },
            {
                title: " this is a title.",
                content: "hdjskkk dhshdsdh ksdjksdjksdks djskdjkskslaladjskkd",
                date: "2019-01-20",
                views: "101",
                tags: "test1 test2",
                id: "1", 
                link: ""
            }
        ]
    },
    computed: {

    },
    created: function() {

    }
})