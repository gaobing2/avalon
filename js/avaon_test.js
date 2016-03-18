avalon.ready(function () {
    //菜单栏点击
    var vmodel = avalon.define({
        $id: "menu",
        toggle: false,
        clickt: function () {
            vmodel.toggle = !vmodel.toggle;
        }
    });
    //获取商家详细信息

    var webMethod = "http://123.57.147.214:8080/HKCityApi/storeinfo?storeId=15058&isMap=0";
    jQuery.support.cors = true;

    var ShopModel = avalon.define({
        $id: "ShopMessage",
        jsondata: ""
    });
    //采用jQuery封装的ajax
    $.ajax({
        type: "GET",
        contentType: "application/x-www-form-urlencoded",
        dataType: "html",
        url: webMethod,
        success: function (data) {
            var jsonObj = JSON.parse(data);
            ShopModel.jsondata = jsonObj.list;
        },
        timeout: 30000,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus);
        }
    });
    //   商家评论
    var ShopComment = avalon.define({
        $id: "ShopComments",
        jsonda: ""

    });

    var url2 = "http://123.57.147.214:8080/HKCityApi/storecomment?storeId=226&page=1&pageSize=10";
    $.ajax({
        type: "GET",
        contentType: "application/x-www-form-urlencoded",
        dataType: "html",
        url: url2,
        success: function (data) {
            var jsonObj = JSON.parse(data);
            ShopComment.jsonda = jsonObj.list; /*alert(ShopComment.jsonda.size());*/
        },
        timeout: 30000,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus);
        }
    });
    //  商家列表
    var ShopList = avalon.define({
        $id: "ShopsList",
        jsonA: ""
    });
    var shopUrl = "http://123.57.147.214:8080/HKCityApi/storelist2?areaId=1&page=1&pageSize=10&orVip=0&orCard=0&orAuth=0&bigClassId=0&smallClassId=0&bigAreaId=0&smallAreaId=0&key=&order=default";
    $.ajax({
        type: "GET",
        contentType: "application/x-www-form-urlencoded",
        dataType: "html",
        url: shopUrl,
        success: function (data) {
            var jsonObj = JSON.parse(data);
            ShopList.jsonA = jsonObj.list;

        },
        timeout: 30000,
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus);
        }
    });
    avalon.scan();
});