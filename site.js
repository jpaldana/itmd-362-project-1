$("#registration-form").on("submit", function(e) {
  var textName = $("#form-name").val();
  var textEmail = $("#form-email").val();
  var textUsername = $("#form-username").val();
  var textPassword = $("#form-password").val();
  var checkAgeVerify = $("#form-ageverify").is(":checked");
  var checkTermsVerify = $("#form-terms").is(":checked");
  var reEmail = /.*@.*/;
  var formValid = true;
  var minCharacters = 7;
  $(".user-alert").text("").removeClass("user-alert");

  if (!reEmail.test(textEmail)) {
    formValid = false;
    addHintText("#form-email", true, "Invalid email address.");
  }
  if (textName.length < minCharacters) {
    formValid = false;
    addHintText("#form-name", true, "Your name must have at least " + minCharacters + " characters.");
  }
  if (textUsername.length < minCharacters) {
    formValid = false;
    addHintText("#form-username", true, "Your username must have at least " + minCharacters + " characters.");
  }
  if (textPassword.length < minCharacters) {
    formValid = false;
    addHintText("#form-password", true, "Your password must have at least " + minCharacters + " characters.");
  }
  if (!checkAgeVerify) {
    formValid = false;
    addHintText("#form-ageverify", true, "You must be 18 years or older to use this website.");
  }
  if (!checkTermsVerify) {
    formValid = false;
    addHintText("#form-terms", true, "You must agree to the terms and conditions.");
  }
  if (formValid) {
    $(this).remove();
    $("#content").append("<p>Thank you for your registration to ClassicWorld! Hope to see you in game soon.</p>");
  }
  e.preventDefault();
});

function addHintText(target, isError, text) {
  if (isError) {
    $(target).nextAll("p.hint").addClass("user-alert").text(text);
  }
  else {
    $(target).nextAll("p.hint").removeClass("user-alert").text(text);
  }
}