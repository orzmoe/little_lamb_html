function addCart(id, img) {
    var cart = JSON.parse(localStorage.getItem("cart"))
    if (!cart) {
        cart = {
            ids: [],
            num: []
        }
    }
    var existence = false
    for (var i = 0; i < cart.ids.length; i++) {
        if (cart.ids[i] == id) {
            cart.num[i]++
            existence = true
            break
        }
    }
    console.log(i)
    if (!existence) {

        cart.ids[i] = id
        cart.num[i] = 1
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    console.log(cart)
    play(event, img)
    cartShow()
}

function delAllCart() {
    localStorage.removeItem("cart", "")
    cartShow()
    getCartInfo()
}

function delCart(id) {
    var cart = JSON.parse(localStorage.getItem("cart"))
    if (!cart) {
        return
    }
    var existence = false
    for (var i = 0; i < cart.ids.length; i++) {
        if (cart.ids[i] == id) {
            cart.ids.splice(i, 1);
            cart.num.splice(i, 1);
            existence = true
            break
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    console.log(cart)
    cartShow()
    getCartInfo()
}

function addCartNum(id, img) {
    var cart = JSON.parse(localStorage.getItem("cart"))
    if (!cart) {
        cart = {
            ids: [],
            num: []
        }
    }
    var existence = false
    for (var i = 0; i < cart.ids.length; i++) {
        if (cart.ids[i] == id) {
            cart.num[i]++
            existence = true
            break
        }
    }
    if (!existence) {
        cart.ids[i] = id
        cart.num[i] = 1
    }
    localStorage.setItem("cart", JSON.stringify(cart))
    console.log(cart)
    //play(event,img)
    cartShow()
    getCartInfo()
}

function subCartNum(id) {
    var cart = JSON.parse(localStorage.getItem("cart"))
    if (!cart) {
        cart = {
            ids: [],
            num: []
        }
    }
    var existence = false
    for (var i = 0; i < cart.ids.length; i++) {
        if (cart.ids[i] == id && cart.num[i] != 0) {
            if (cart.num[i] > 1) {
                cart.num[i]--
            }
            existence = true
            break
        }
    }
    /*if (!existence) {
        cart.ids[i] = id
        cart.num[i] = 1
    }*/
    localStorage.setItem("cart", JSON.stringify(cart))
    console.log(cart)
    //play(event,img)
    cartShow()
    getCartInfo()
}

function cartShow() {
    var lang = localStorage.getItem("lang")
    console.log(lang)
    var cart = JSON.parse(localStorage.getItem("cart"))
    var cart_info = {
        list: [],
        money: 0
    }
    if (!cart) {
        cart = {
            ids: [],
            num: []
        }
    }
    var i = 0
    var num = 0
    Object.keys(cart.ids).forEach(function (key) {
        if (cart.ids[key] != null) {
            cart_info.list[i] = id2info(cart.ids[key])
            cart_info.list[i].num = cart.num[key]
            cart_info.money += cart_info.list[i].money * cart.num[key]
            num += cart.num[key]
            i++
        }
    });
    cart_info.num = num
    console.log(cart_info)
    console.log(cart_info.num)
    $(".count-style").html(cart_info.num);
    var list = cart_info.list
    var cartHtml = ""
    var name = ""
    Object.keys(list).forEach(function (key) {

        if (lang == 'en') {
            name = list[key].name_en
        } else {
            name = list[key].name
        }
        cartHtml += '<li class="single-shopping-cart">\n' +
            '\t\t\t\t\t                    <div class="shopping-cart-img">\n' +
            '\t\t\t\t\t                        <a href=""><img alt="" src="' + list[key].img + '"></a>\n' +
            '\t\t\t\t\t                        <div class="item-close">\n' +
            '\t\t\t\t\t                            <a href=""><i class="sli sli-close"></i></a>\n' +
            '\t\t\t\t\t                        </div>\n' +
            '\t\t\t\t\t                    </div>\n' +
            '\t\t\t\t\t                    <div class="shopping-cart-title">\n' +
            '\t\t\t\t\t                        <h4><a href="">' + name + '</a></h4>\n' +
            '\t\t\t\t\t                        <span>' + list[key].num + ' x ' + list[key].money / 100 + '</span>\n' +
            '\t\t\t\t\t                    </div>\n' +
            '\t\t\t\t\t                </li> '
    });
    $("#cart-list").html(cartHtml);
    $("#cart-money").html("$" + cart_info.money / 100);
}

//商品飞入购物车动画
function play(event, img) {
    var s_left = event.clientX;//获取鼠标左边的位置
    var s_top = event.clientY;//获取鼠标上边的位置
    var e_left = $jq(".last-elements").offset().left;
    var e_top = $jq(".last-elements").offset().top;
    if (e_left == 0) {
        e_left = $jq(".icon-cart-active").offset().left;
        e_top = $jq(".icon-cart-active").offset().top;
    }
    var _this = $jq(event.target);//当前到点击的js对象
    //var img = _this.parent().siblings("img").attr("src");
    var flyer = $jq("<img class='u-flyer' src='" + img + "' width='25' style='border-radius:50%'/>");//创建图片对象
    console.log(flyer)
    flyer.fly({
        start: {
            left: s_left,
            top: s_top
        },
        end: {
            left: e_left,
            top: e_top
        },
        onEnd: function () {
            flyer.fadeOut("slow", function () {
                $(this).remove();
            });
        }
    })
}

function id2info(id) {

    var list = JSON.parse(localStorage.getItem("list"))

    for (var i = 0; i < list.menu.length; i++) {
        if (list.menu[i].id == id) {
            return list.menu[i]
        }
    }
    return null
}

cartShow()
