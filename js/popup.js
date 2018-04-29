jQuery(function ($) {

	$('.registr>li>a').click(function(){
		var $this = $(this),
			$pop = $this.next('.popup'),
			$close = $pop.children('.close');

		$this.parent().siblings().children('.popup').hide()
		$pop.show();
		$close.click(function(){
			$pop.hide();
		});
		return false;
	});

	function filter() {
		var flag = false;
		$(".tovar").hide();
		$(".filter-cencel").empty();
		$(".aroma-list li input").each(function(){
			if (this.checked) {
				var text = $(this).parent().text();
				$("." + this.value).show();
				$(".filter-cencel").prepend('<li><a href="#" class="reset" data-filter="'+this.value+'">'+text+'</a></li>');
				flag = true; 
			}
		});
		if (!flag) {
			$(".tovar").show();
		}
		resetFilter();
	}

	function resetFilter() {
		$(".reset-all").on("click", function(e){
			e.preventDefault();
			$(".aroma-list li input").each(function(){
				this.checked = false;
			});
			filter();
		});
		$(".reset").on("click", function(e){
			e.preventDefault();
			var that = $(this);
			$(".aroma-list li input").each(function(){
				if (that.attr("data-filter") == $(this).attr("value")){
					this.checked = false;
				}
			});
			filter();
		});
	}

	$(".aroma-list li input").change(function() {
		filter();
	});
// 
	$('.Platina').click(function(){
		$('.tovar').hide();
		$('.plat').show();
	});
	$('.Classic').click(function(){
		$('.tovar').hide();
		$('.klas').show();
	});
	$('.Natyre').click(function(){
		$('.tovar').hide();
		$('.trop, .jasm, .sand, .germ, .mango, .tombl,.tea').show();
	});
	$('.Parfyme').click(function(){
		$('.tovar').hide();
		$('.parf').show();
	});
	$('.Odekolon').click(function(){
		$('.tovar').hide();
		$('.lime, .mand').show();
	});
// 
	$('.woman1').click(function(){
		$('.woman1').css('background','#F2D2DA');
		$('.man1').css('background','#fff');
		$('.tovar').hide();
		$('.woman').show();
		});
		$('.man1').click(function(){
			$('.man1').css('background','#F2D2DA');
			$('.woman1').css('background','#fff');
			$('.tovar').hide();
			$('.man').show();
		});
		$('.reset-all').click(function () {
			$('.woman1').css('background','#fff');
			$('.man1').css('background','#fff');
			$('.tovar').show();
			$('.pager').show();
			$('.ofirme').hide();
		});
	$('.ofirme1').click(function(){
		$('.tovar').hide();
		$('.ofirme').show();
		$('.pager').show();
		$('.kontakts').hide();
	});
	$('.Platina, .Classic, .Natyre, .Parfyme, .Odekolon').click(function () {
		$('.ofirme').hide();
		$('.kontakts').hide();
		$('.pager').show();
	});
	$('.kontak').click(function(){
		$('.tovar').hide();
		$('.ofirme').hide();
		$('.pager').hide();
		$('.kontakts').show();
	});
	// $('.man1').click(function(){
	// 	$('.tovar').hide();
	// 	$('.man').show();
	// 	$('.reset-all').click(function () {
	// 		$('.tovar').show();
	// 	});
	// });

});
