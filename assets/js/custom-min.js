jQuery(document).ready((function(){var e=jQuery(".owl-carousel");e.owlCarousel({loop:!0,autoplay:!0,autoplayTimeout:4e3,autoplayHoverPause:!0,responsive:{0:{items:2,dots:!0},768:{items:3,dots:!1}}}),jQuery(".play").on("click",(function(){e.trigger("play.owl.autoplay",[1e3])})),jQuery(".stop").on("click",(function(){e.trigger("stop.owl.autoplay")}))})),jQuery(document).ready((function(){jQuery(".menu-link").bigSlide({easyClose:!0,side:"left"}),jQuery("#masthead .menu-link").toggle((function(){jQuery("#close-menu").focus()}),(function(){jQuery("#masthead .menu-link").focus()})),jQuery("#close-menu").click((function(){jQuery("#masthead .menu-link").focus()})),jQuery(".go-to-top").focus((function(){jQuery("#close-menu").focus()})),jQuery(".go-to-bottom").focus((function(){jQuery("#menu ul.menu li:last-of-type a").focus()})),jQuery("#searchicon").click((function(){jQuery("#jumbosearch").slideToggle("slow"),jQuery("#jumbosearch .search-field").focus()})),jQuery("#jumbosearch .search-field").focusout((function(){jQuery("#jumbosearch").slideToggle("fast"),jQuery("#masthead .menu-link").focus()})),jQuery("#menu ul li.menu-item-has-children").append("<i class='fa fa-angle-down'></i>"),jQuery("#menu ul li.menu-item-has-children .fa").click((function(){jQuery(this).parent("li.menu-item-has-children").children("ul").slideToggle()}))})),jQuery("#site-navigation a").focusin((function(){jQuery(this).parent().find("> ul.sub-menu").addClass("focused makevisible"),jQuery(this).parent().removeClass("out-of-focus"),jQuery(this).parent().prevAll().addClass("out-of-focus"),jQuery(this).parent().nextAll().addClass("out-of-focus"),jQuery(".out-of-focus").find("ul.sub-menu").removeClass("focused makevisible")})),jQuery("#site-navigation .sub-menu a").focusin((function(){jQuery(this).parent().find("> ul.sub-menu").addClass("focused makevisible"),jQuery(this).parent().parent().parent().addClass("focused makevisible")})),jQuery("#site-navigation a").focusin((function(){jQuery(this).parent().find("> ul.children").addClass("focused makevisible"),jQuery(this).parent().removeClass("out-of-focus"),jQuery(this).parent().prevAll().addClass("out-of-focus"),jQuery(this).parent().nextAll().addClass("out-of-focus"),jQuery(".out-of-focus").find("ul.children").removeClass("focused makevisible")})),jQuery("#site-navigation .children a").focusin((function(){jQuery(this).parent().find("> ul.children").addClass("focused makevisible"),jQuery(this).parent().parent().parent().addClass("focused makevisible")}));