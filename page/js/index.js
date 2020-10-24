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
        axios({
            method: "get",
            url: "/queryEveryday",
        }).then(function(res) {
            // console.log(res);
            everyDay.content = res.data[0].content;
        }).catch(function(res) {
            console.log("请求失败");
        })
    }
})

var articleList = new Vue({
    el: "#article_list",
    data: {
        page: 1, 
        pageSize: 5,
        count: 0,
        pageNumList: [],
        articleList: [
            // {
            //     title: " this is a title.",
            //     content: "hdjskkk dhshdsdh ksdjksdjksdks djskdjkskslaladjskkd",
            //     date: "2019-01-20",
            //     views: "101",
            //     tags: "test1 test2",
            //     id: "1", 
            //     link: ""
            // },
            
        ]
    },
    computed: {
        getPage: function() {
            return function(page, pageSize) {
                axios({
                    method: "get",
                    url: "/queryBlogByPage?page=" + (page - 1) + "&pageSize=" + pageSize
                }).then(function(res) {
                    var result = res.data;
                    console.log(result);
                    articleList.articleList = result;
                    articleList.page = page;
                }).catch(function(res) {

                });
                axios({
                    method: "get",
                    url: "/queryBlogCount"
                }).then(function(res) {
                    articleList.count = res.count;
                }).then(function() {
                    articleList.generatePageTool();
                })
                
            }
        },
        generatePageTool: function() {
            return function() {
                var nowPage = this.page;
                var pageSize = this.pageSize;
                var totalCount = this.count;
                var result = [];
                result.push({text: "<<", page: 1});
                if(nowPage > 2) {
                    result.push({text: nowPage - 2, page: nowPage - 2});
                }
                if(nowPage > 1) {
                    result.push({text: nowPage - 1, page: nowPage - 1});
                }
                result.push({text: nowPage, page: nowPage});
                if(nowPage + 1 <= (totalCount + pageSize - 1) / pageSize) {
                    result.push({text: nowPage + 1, page: nowPage + 1});
                }
                if(nowPage + 2 <= (totalCount + pageSize - 2) / pageSize) {
                    result.push({text: nowPage + 2, page: nowPage + 2});
                }
                result.push({text: ">>", page: parseInt((totalCount + pageSize - 1) / pageSize)});
                this.pageNumList = result;
                return result;
            }
        } ,
        jumpTo: function() {
            return function(page) {
                this.getPage(page, this.pageSize)
            }
        }
    },
    created: function() {
        this.getPage(this.page, this.pageSize);
    }
})