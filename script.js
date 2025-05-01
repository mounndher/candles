// All your JavaScript variables and code
var LEO_COOKIE_THEME = "LEO_OLARS_PANEL_CONFIG";
var add_cart_error = "An error occurred while processing your request. Please try again";
var ajaxsearch = "1";
var approfile_multilang_url = [{"id_appagebuilder_profiles":"2","name":"Home 02","id_lang":"1","friendly_url":"home-02","iso_code":"en"},{"id_appagebuilder_profiles":"2","name":"Home 02","id_lang":"2","friendly_url":"home-02","iso_code":"fr"},{"id_appagebuilder_profiles":"2","name":"Home 02","id_lang":"3","friendly_url":"home-02","iso_code":"de"},{"id_appagebuilder_profiles":"2","name":"Home 02","id_lang":"4","friendly_url":"home-02","iso_code":"it"},{"id_appagebuilder_profiles":"2","name":"Home 02","id_lang":"5","friendly_url":"home-02","iso_code":"es"},{"id_appagebuilder_profiles":"2","name":"Home 02","id_lang":"6","friendly_url":"home-02","iso_code":"ar"}];
var buttoncompare_title_add = "Add to Compare";
var buttoncompare_title_remove = "Remove from Compare";
var buttonwishlist_title_add = "Add to Wishlist";
var buttonwishlist_title_remove = "Remove from WishList";
var cancel_rating_txt = "Cancel Rating";
var comparator_max_item = 3;
var compared_products = [];
//var data_product_popup = [...]; // Your full data_product_popup array here
var disable_review_form_txt = "Not exists a criterion to review for this product or this language";
var enable_dropdown_defaultcart = 1;
var enable_flycart_effect = 1;
var enable_notification = 0;
var height_cart_item = "135";
var isLogged = false;
var leo_push = 0;
var leo_search_url = "https://demo73.leotheme.com/prestashop/leo_olars_demo/en/module/leoproductsearch/productsearch";
var leo_token = "90b02bd265233dae54df6a757a991d60";
var leoproductsearch_static_token = "90b02bd265233dae54df6a757a991d60";
var leoproductsearch_token = "1e3cbbf35d12556f82e2bf6a6d7267ad";
var lf_is_gen_rtl = false;
var lps_show_product_img = "1";
var lps_show_product_price = "1";
var lql_ajax_url = "https://demo73.leotheme.com/prestashop/leo_olars_demo/en/module/leoquicklogin/leocustomer";
var lql_is_gen_rtl = false;
var lql_module_dir = "/prestashop/leo_olars_demo/modules/leoquicklogin/";
var lql_myaccount_url = "https://demo73.leotheme.com/prestashop/leo_olars_demo/en/my-account";
var lql_redirect = "0";
var number_cartitem_display = 3;
var numpro_display = "100";
//var prestashop = {...}; // Your full prestashop object here
var productcompare_add = "The product has been added to list compare";
var productcompare_add_error = "An error occurred while adding. Please try again";
var productcompare_max_item = "You cannot add more than 3 product(s) to the product comparison";
var productcompare_remove = "The product was successfully removed from list compare";
var productcompare_remove_error = "An error occurred while removing. Please try again";
var productcompare_url = "https://demo73.leotheme.com/prestashop/leo_olars_demo/en/module/leofeature/productscompare";
var productcompare_viewlistcompare = "View list compare";
var psemailsubscription_subscription = "https://demo73.leotheme.com/prestashop/leo_olars_demo/en/module/ps_emailsubscription/subscription";
var psr_icon_color = "#F19D76";
var review_error = "An error occurred while processing your request. Please try again";
var show_popup = 1;
var text_no_product = "Don't have products";
var type_dropdown_defaultcart = "dropdown";
var type_flycart_effect = "fade";
var url_leoproductattribute = "https://demo73.leotheme.com/prestashop/leo_olars_demo/en/module/leofeature/LeoProductAttribute";
var width_cart_item = "265";
var wishlist_add = "The product was successfully added to your wishlist";
var wishlist_cancel_txt = "Cancel";
var wishlist_confirm_del_txt = "Delete selected item?";
var wishlist_del_default_txt = "Cannot delete default wishlist";
var wishlist_email_txt = "Email";
var wishlist_loggin_required = "You must be logged in to manage your wishlist";
var wishlist_ok_txt = "Ok";
var wishlist_quantity_required = "You must enter a quantity";
var wishlist_remove = "The product was successfully removed from your wishlist";
var wishlist_reset_txt = "Reset";
var wishlist_send_txt = "Send";
var wishlist_send_wishlist_txt = "Send wishlist";
var wishlist_url = "https://demo73.leotheme.com/prestashop/leo_olars_demo/en/module/leofeature/mywishlist";
var wishlist_viewwishlist = "View your wishlist";

// Your JavaScript functions and code would go here


var choosefile_text = "Choose file";
var turnoff_popup_text = "Do not show this popup again";

var size_item_quickview = 113;
var style_scroll_quickview = 'vertical';

var size_item_page = 113;
var style_scroll_page = 'horizontal';

var size_item_quickview_attr = 113;	
var style_scroll_quickview_attr = 'vertical';

var size_item_popup = 113;
var style_scroll_popup = 'vertical';

var FancyboxI18nClose = "Close";
var FancyboxI18nNext = "Next";
var FancyboxI18nPrev = "Previous";
var current_link = "http://demo73.leotheme.com/prestashop/leo_olars_demo/en/";		
var currentURL = window.location;
currentURL = String(currentURL);
currentURL = currentURL.replace("https://","").replace("http://","").replace("www.","").replace(/#\w*/, "");
current_link = current_link.replace("https://","").replace("http://","").replace("www.","");
var text_warning_select_txt = "Please select One to remove?";
var text_confirm_remove_txt = "Are you sure to remove footer row?";
var close_bt_txt = "Close";
var list_menu = [];
var list_menu_tmp = {};
var list_tab = [];
var isHomeMenu = 0;

/**
 * List functions will run when document.ready()
 */
var ap_list_functions = [];
/**
 * List functions will run when window.load()
 */
var ap_list_functions_loaded = [];

/**
 * List functions will run when document.ready() for theme
 */
var products_list_functions = [];

var leoOption = {
	category_qty: 1,
	product_list_image: 0,
	product_one_img: 1,
	productCdown: 1,
	productColor: 0,
	homeWidth: 452,
	homeheight: 452,
};

ap_list_functions.push(function () {
	if (typeof $.LeoCustomAjax !== "undefined" && $.isFunction($.LeoCustomAjax)) {
		var leoCustomAjax = new $.LeoCustomAjax();
		leoCustomAjax.processAjax();
	}
});

var sp_link_base = 'https://demo73leotheme.b-cdn.net/prestashop/leo_olars_demo';

function renderDataAjax(jsonData) {
	for (var key in jsonData) {
		if (key == 'java_script') {
			$('body').append(jsonData[key]);
		} else if ($('#ets_speed_dy_' + key).length) {
			$('#ets_speed_dy_' + key).replaceWith(jsonData[key]);
		}
	}
	if ($('#header .shopping_cart').length && $('#header .cart_block').length) {
		var shopping_cart = new HoverWatcher('#header .shopping_cart');
		var cart_block = new HoverWatcher('#header .cart_block');
		$("#header .shopping_cart a:first").on("hover",
			function () {
				if (ajaxCart.nb_total_products > 0 || parseInt($('.ajax_cart_quantity').html()) > 0) {
					$("#header .cart_block").stop(true, true).slideDown(450);
				}
			},
			function () {
				setTimeout(function () {
					if (!shopping_cart.isHoveringOver() && !cart_block.isHoveringOver()) {
						$("#header .cart_block").stop(true, true).slideUp(450);
					}
				}, 200);
			}
		);
	}
	if (typeof jsonData.custom_js !== undefined && jsonData.custom_js) {
		$('head').append('<script src="' + sp_link_base + '/modules/ets_superspeed/views/js/script_custom.js"></javascript>');
	}
}


var blocksearch_type = 'top';


ap_list_functions.push(function () {
	jQuery(".iview-group-68133e49bc49b-14").iView({
	  pauseTime: 9000, // delay
	  startSlide: 0,
	  autoAdvance: 1, // enable timer
	  pauseOnHover: 1,
	  randomStart: 0, // Random slide when start
  
	  // TIMER
	  timer: "360Bar",
	  timerPosition: "top-right", // Top-right, top left ....
	  timerX: 10,
	  timerY: 10,
	  timerOpacity: 0.5,
	  timerBg: "#000",
	  timerColor: "#EEE",
	  timerDiameter: 30,
	  timerPadding: 4,
	  timerStroke: 3,
	  timerBarStroke: 1,
	  timerBarStrokeColor: "#EEE",
	  timerBarStrokeStyle: "solid",
	  playLabel: "Play",
	  pauseLabel: "Pause",
	  closeLabel: "Close", // Multi-language
  
	  // NAVIGATOR controlNav
	  controlNav: 1, // true : enable navigate
	  keyboardNav: 1, // true : enable keyboard
	  controlNavThumbs: 0, // true: show thumbnail, false: show number (bullet)
	  controlNavTooltip: 0, // true: hover to bullet show thumbnail
	  tooltipX: 5,
	  tooltipY: -5,
	  controlNavHoverOpacity: 0.6, // navigator opacity
  
	  // DIRECTION
	  controlNavNextPrev: false, // false: don't show direction at navigator
	  directionNav: 1, // true: show direction at image
	  directionNavHoverOpacity: 0.6, // direction opacity at image
	  nextLabel: "Next", // Multi-language
	  previousLabel: "Previous", // Multi-language
  
	  // ANIMATION
	  fx: "random", // Animation
	  animationSpeed: 500, // time to change slide
	  strips: 1, // set value to 1 -> fix animation full background
	  blockCols: 10, // number of columns
	  blockRows: 5, // number of rows
  
	  captionSpeed: 500, // speed to show caption
	  captionOpacity: 1, // caption opacity
	  captionEasing: "easeInOutSine", // caption transition easing effect
	  customWidth: 1920,
	  customHtmlBullet: false,
	  rtl: false,
	  height: 851,
	  timer_show: 1,
  
	  onAfterLoad: function () {
		// Hide timer
		$(".iview-group-68133e49bc49b-14 .iview-timer").hide();
	  },
	});
  
	// Disable image drag
	$(".img_disable_drag").bind("dragstart", function () {
	  return false;
	});
  
	// Fix: Slide link, image can't swipe
	var link_event = "click";
  
	$(".iview-group-68133e49bc49b-14 .slide_config").on("click", function () {
	  if (link_event !== "click") {
		link_event = "click";
		return;
	  }
  
	  if ($(this).data("link") != undefined && $(this).data("link") != "") {
		window.open($(this).data("link"), $(this).data("target"));
	  }
	});
  
	$(".iview-group-68133e49bc49b-14 .slide_config").on("swipe", function () {
	  link_event = "swiped"; // do not trigger click event
	});
  });

  $(document).ready(function(){
	$('.blog-carousel').owlCarousel({
		loop: true,
		margin: 20,
		nav: true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
	});
});



