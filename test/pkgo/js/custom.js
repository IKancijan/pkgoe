$(document).ready(function() {
    $(window).load(function() {
        var e = $(".preloader");
        e.fadeOut(1e3, function() {
            $(this).remove()
        });
        var o = $(".gallery-container"),
            a = o.find(".grid-sizer");
        o.shuffle({
            itemSelector: ".gallery-item",
            speed: 500,
            sizer: a
        });
        var t = window.location.hash;
        t && (t = t.replace("#", ""), $("." + t).length > 0 && $("html, body").animate({
            scrollTop: $("." + t).offset().top
        }, 500)), $("[data-scroll-to='button']").click(function() {
            return $("html, body").animate({
                scrollTop: $("[data-scroll-to='target']").offset().top
            }, 500), !1
        }), $("#toTop").click(function() {
            return $("html, body").animate({
                scrollTop: 0
            }, 500), !1
        }), $(".sort-type").on("click", function(e) {
            e.preventDefault();
            var a = $(this),
                t = a.hasClass("active"),
                i = t ? "all" : a.data("group");
            t || $(".btn-group .active").removeClass("active"), a.toggleClass("active"), o.shuffle("shuffle", i)
        }), $(".side-menu-tab .expand").click(function(e) {
            e.preventDefault(), $(this).parent().hasClass("open") ? $(this).parent().removeClass("open") : $(this).parent().addClass("open")
        }), $(".change-opacity").click(function(e) {
            e.preventDefault(), $(".change-opacity").removeClass("active"), $(this).addClass("active"), "low" === $(this).data("opacity") ? ($("body").addClass("low-opacity"), $.cookie("pokego-box-opacity", "low", {
                expires: 365
            })) : ($("body").removeClass("low-opacity"), $.cookie("pokego-box-opacity", "high", {
                expires: 365
            }))
        }), Modernizr.touch || $("[data-toggle='tooltip']").tooltip(), $.cookie("pokego-box-opacity") && "low" === $.cookie("pokego-box-opacity") && ($("body").addClass("low-opacity"), $(".change-opacity").removeClass("active"), $("[data-opacity='low']").addClass("active"))
    })
});