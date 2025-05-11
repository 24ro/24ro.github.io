window.addEventListener("DOMContentLoaded", () => {
  const hour = new Date().getHours();
  const greeting =
    hour < 12
      ? "Good morning!"
      : hour < 18
      ? "Good afternoon!"
      : "Good evening!";
  alert(`${greeting} Welcome to ComfortCare Clinical Homecare.`);
});
