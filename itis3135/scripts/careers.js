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

  const positionSelect = document.getElementById("position");
  const descBox = document.getElementById("job-desc");

  if (positionSelect && descBox) {
    const descriptions = {
      rn: "Provide skilled nursing care, including assessments and medication administration, to homebound patients.",
      aide: "Assist clients with daily living needs including grooming, mobility, and basic household tasks.",
      pt: "Help patients regain mobility and strength through personalized in-home physical therapy sessions.",
      ot: "Deliver occupational therapy to support independence in everyday tasks like dressing and cooking.",
    };

    positionSelect.addEventListener("change", function () {
      const value = this.value;
      descBox.textContent = descriptions[value] || "";
    });
  }
});
