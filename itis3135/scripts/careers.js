
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("applicationForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert(
        "Thank you for applying! Our team will review your application shortly."
      );
      form.reset();
    });
  }
});
