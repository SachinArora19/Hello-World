
	

			$(document).ready(function(){
				    $(".favoriteProgramsdropdown-list").click(function() {
						alert('hi1');
      $(".side-two").css({
        "left": "0"
      });
    });

    $(".newMessage-back").click(function() {
		alert('hi2');
      $(".side-two").css({
        "left": "-100%"
      });
    });
					$('.favoriteProgramsdropdown-container').on('input', '.favoriteProgramsdropdown-search', function () {
				var target = $(this);
	            var search = target.val().toLowerCase();
	            if (!search) {
	                $('.fvrtProgramsLi').show();
	                return false;
	            }

	            $('.fvrtProgramsLi').each(function () {
	                var text = $(this).text().toLowerCase();
	                var match = text.indexOf(search) > -1;
	                $(this).toggle(match);
	            });
	        });
			});