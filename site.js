$("#registration-form").on("submit", function(e) {
  var textName = $("#form-name").val();
  var textEmail = $("#form-email").val();
  var textUsername = $("#form-username").val();
  var textPassword = $("#form-password").val();
  var checkAgeVerify = $("#form-ageverify").is(":checked");
  var reEmail = /.*@.*/;
  var formValid = true;
  var minCharacters = 7;
  $(".user-alert").remove();

  if (!reEmail.test(textEmail)) {
    formValid = false;
    $("#form-email").next("p.hint").text("Invalid email address.");
  }
  if (textName.length < minCharacters) {
    formValid = false;
    $("#registration-form ol").append("<li class='user-alert'>Your name must have at least " + minCharacters + " characters.</li>");
  }
  if (textUsername.length < minCharacters) {
    formValid = false;
    $("#registration-form ol").append("<li class='user-alert'>Your username must have at least " + minCharacters + " characters.</li>");
  }
  if (textPassword.length < minCharacters) {
    formValid = false;
    $("#registration-form ol").append("<li class='user-alert'>Your password must have at least " + minCharacters + " characters.</li>");
  }
  if (!checkAgeVerify) {
    formValid = false;
    $("#registration-form ol").append("<li class='user-alert'>You must be 18 years or older to use this website.</li>");
  }
  if (formValid) {
    $(this).remove();
    $("#content").append("<p>Thank you for your input.</p>");
  }
  e.preventDefault();
});
