
document.getElementById("byo-container").addEventListener("submit", function (event)
{
        var name = document.getElementById("name").value;
        var mascot = document.getElementById("m-name").value;
        var imageUpload = document.getElementById("imageUpload").value;
        var imageCaption = document.getElementById("img-c").value;
        var personalBackground = document.getElementById("pbackground").value;
        var academicBackground = document.getElementById("abackground").value;
        var webDevelopmentBackground =
          document.getElementById("wdbackground").value;
        var primaryComputer = document.getElementById("pc-type").value;
        var joke = document.getElementById("joke").value;
        var miscellaneous = document.getElementById("miscellaneous").value;
        var checkboxChecked = document.getElementById("byo-checkbox").checked;

        if (
          !name ||
          !mascot ||
          !imageUpload ||
          !imageCaption ||
          !personalBackground ||
          !academicBackground ||
          !webDevelopmentBackground ||
          !primaryComputer ||
          !joke ||
          !miscellaneous ||
          !checkboxChecked
        ) {
          event.preventDefault(); // Prevent form submission
          var errorMessage = document.createElement("div");
          errorMessage.classList.add("error-message");
          errorMessage.textContent =
            "Please fill out all the necessary information and check the checkbox.";
          document.getElementById("byo-form").appendChild(errorMessage);
        }
});