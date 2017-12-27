$("ul").on("click", "li", function(){
	$(this).toggleClass("crossedOff");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(200, function(){
		$(this).remove();
		event.stopPropagation();
	});
});

$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle();
});

$("input[type = 'text']").keypress(function(){
	var newTodo = $(this).val();
	if(event.which === 13 && newTodo != ""){		
		$("ul").append("<li><span>X </span>" + newTodo + "</li>");
		$(this).val("");
	}
});
