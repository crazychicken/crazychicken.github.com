/* clgt hover */
$(function(){
	$('.clgt a').hover(function(){
		$(this).next().fadeIn(500);
	},function(){
		$(this).next().hide(200);
	});
});
/* click show content_member */
$(function(){
	$('.name').click(function(){
		$('.content_member').hide(200);
	});

	$('.designer').prev().click(function(){
		$('.designer').parent().next().show(500);
	});

	$('.cooding_an').prev().click(function(){
		$('.cooding_an').parent().prev().show(500);
	});

	$('.cooding_thanh').prev().click(function(){
		$('.cooding_thanh').parent().next().show(500);
	});

	$('.cooding_quoc').prev().click(function(){
		$('.cooding_quoc').parent().prev().show(500);
	});
});
/* hover show name member */
$(function(){
	$('.name').hover(function(){
		$(this).next().show();
	},function(){
		$(this).next().hide();
	});
});
/* .close */
$(function(){
	$('.close button').hover(function(){
		$(this).next().show();
	},function(){
		$('.close button').next().hide();
	});
});
$(function(){
	$('.close button').click(function(){
		$('.close').parent().hide();
	});
});
/* bt_footer of contact */
$(function(){
	$('.bt_contact').click(function(){
		$('.address').toggle(2000);
	});
});




