$(function() {
	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		var newBurger = {
	      burgerName: $("#burgerName").val().trim()
	    };

	    // Send the POST request.
	    $.ajax("/addBurger", {
	      type: "POST",
	      data: newBurger
	    }).then(
	      function() {
	        location.reload();
	      }
	    );
	});

	$("#devourIt").on("click", function(event) {
		event.preventDefault();

	    // Send the POST request.
	    $.ajax("/addBurger/"+$("#devourIt").attr("value").trim(), {
	      type: "PUT"
	    }).then(
	      function() {
	        location.reload();
	      }
	    );
	});
});