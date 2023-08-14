document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("submit-btn").addEventListener("click", function (e) {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var phone = `+${phoneInput?.s?.dialCode}-${
      document.getElementById("requested_phone").value
    }`;
    console.log("requested_phone", phone);
    var email_error = document.getElementById("email-error");
    var phone_error = document.getElementById("phone-error");
    var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var phone_regex = document.getElementById("requested_phone").value;
    // Reset error messages
    email_error.innerHTML = "";
    phone_error.innerHTML = "";

    // Validate email
    if (email === "") {
      email_error.innerHTML = "Required Field";
    } else if (!email_regex.test(email)) {
      email_error.innerHTML = "You have entered an invalid email address";
    }

    // Validate phone
    if (phone === "") {
      phone_error.innerHTML = "Required Field";
    } else if (phone_regex.length < 10) {
      phone_error.innerHTML = "You have entered an invalid Mobile number";
    }

    if (email_error.innerHTML == "" && phone_error.innerHTML == "") {
      var data = {
        email: email,
        phone: phone,
      };
      const loadingOpen = document.getElementById("open");
      loadingOpen.style.display = "flex";

      setTimeout(() => {
        loadingOpen.style.display = "none";
        sessionStorage.setItem("data", JSON.stringify(data));

        window.location.href = "thankyou.html";
      }, 1000);
    }
  });
});
