$('document').ready(function()
{ 
  /* validation */
  $("#login-form").validate({
           rules:
           {
                   password: {required: true, minlength:3},
                   username: { required: true}
           },
           messages:
           {
                        password:{ required: "Please enter your password", minlength: "Password must be at least 3 characters long"},
                        username: {required: "Please enter your Wesleyan username"}
           },
           submitHandler: submitForm
    });

    /* login submit */
    function submitForm()
    {
           var data = $("#login-form").serialize();
           //console.log(data); 
           $.ajax({
                   type : 'POST',
                   url  : 'login_process.php',
                   data : data,
                   beforeSend: function()
                   {
                        $("#error").fadeOut();
                        $("#btn-login").html('<span class="glyphicon glyphicon-transfer"></span> &nbsp; Sending ...');
                   },
                   success :  function(response)
                   {
                                if(response == "OK"){
                                        $("#btn-login").html('<img src="ajax-loader.gif" height="20"> &nbsp Signing In ...');
                                        setTimeout(' window.location.href = "home.php"; ', 3000);
                                } else {
                                          $("#error").fadeIn(1000, function(){
                                                  $("#error").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; '+response+' !</div>');
                                                  $("#btn-login").html('<span class="glyphicon glyphicon-log-in"></span> &nbsp; Sign In');
                                          });
                                }
                   }
           });
           return false;
   }
});
