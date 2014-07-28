
$(document).ready(function(){
	$("#sub").click(function(){
		var command = $('#command').val();
        var loadUrl='http://localhost:3000/api/calculator';
		$.ajax({url:loadUrl,
		   data:{command:command},
		   dataType :'json',
		   type :'post',
		   success:function(result){
              $("#result").html("The Result is" + result.state);
           },
           error: function(result){
  	         alert(JSON.stringify(result));
           }
        });
	
	});
});



