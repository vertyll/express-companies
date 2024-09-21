document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById("cookie-banner");
  const acceptCookiesButton = document.getElementById("accept-cookies");

  const cookiesAccepted = localStorage.getItem("cookies_accepted");
  if (!cookiesAccepted) {
    cookieBanner.classList.remove("d-none");
  }

  acceptCookiesButton.addEventListener("click", function () {
    localStorage.setItem("cookies_accepted", "true");
    cookieBanner.classList.add("d-none");
  });
});
