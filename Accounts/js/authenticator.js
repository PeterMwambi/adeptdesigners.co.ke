$(document).ready(function () {
  
  $("#mail-auth-placeholder").keyup(function () {
    if ($("#mail-auth-placeholder").val() == "") {
      $("#mail-auth-placeholderErr").html("Enter your email address");
    } else $("#mail-auth-placeholderErr").html(null);

    if (email_regExp.test($("#mail-auth-placeholder").val()) === false) {
      $("#mail-auth-placeholderErr").html("Enter a correct email address");
    } else $("#mail-auth-placeholderErr").html(null);
  });

  $("#auth-user-subscribe").click(function (e) {
    e.preventDefault();
    var email = $("#mail-auth-placeholder").val();
    $.ajax({
      method: "POST",
      url: "Protected/Server/subscribe_authenticator_protected.php",
      data: { email: email },
      beforeSend: function () {
        $("#auth-user-subscribe").attr("disabled", "disabled");
        $(".spinner").show();
      },
      success: function (data) {
        response = JSON.parse(data);
        if (response.flag == "0") {
          $(".spinner").delay(200).fadeOut();
          $("#mail-auth-placeholderErr").html(response.error);
          $("#auth-user-subscribe").removeAttr("disabled");
        } else if (response.flag == "1") {
          setTimeout(function () {
            $("#con-message-auth").html(response.success);
            $(".alert").fadeIn(1000);
            $(".alert").delay(10000).fadeOut();
            $(".spinner").hide();
          }, 3500);
        }
      },
    });
  });

  //Password recovery for large device

  $("#forgotten-lg-email").focus(function () {
    if ($("#forgotten-lg-email").val() == "") {
      $("#forgotten-email-Err-lg").html("Enter your email address");
    } else {
      $("#forgotten-email-Err-lg").html(null);
    }
    $("#forgotten-lg-email").keyup(function () {
      if (email_regExp.test($("#forgotten-lg-email").val())) {
        $("#forgotten-email-Err-lg").html(null);
      } else {
        $("#forgotten-email-Err-lg").html("Enter a valid email address");
      }
    });
  });
  $("#send-forgotten-pwd-link-lg").click(function (e) {
    e.preventDefault();
    var email = $("#forgotten-lg-email").val();
    $.ajax({
      method: "POST",
      url: "Server/accountrecovery_auth.php",
      data: { email: email },
      beforeSend: function () {
        $("#send-forgotten-pwd-link-lg").attr("disabled", "disabled");
        $(".spinner-get-pwd-link").show();
      },
      success: function (data) {
        response = JSON.parse(data);
        if (response.flag == "0") {
          $(".spinner-get-pwd-link").delay(200).fadeOut();
          $("#forgotten-email-Err-lg").html(response.error);
          $("#send-forgotten-pwd-link-lg").removeAttr("disabled");
        } else if (response.flag == "1") {
          setTimeout(function () {
            $("#confirmation-status-lg").html(response.success);
            $(".recoverpwd-alert").fadeIn(1000);
            $(".recoverpwd-alert").delay(10000).fadeOut();
            $(".spinner-get-pwd-link").hide();
          }, 3500);
        }
      },
    });
  });
});
