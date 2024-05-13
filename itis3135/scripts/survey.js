
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

/*document.getElementById("add-class-btn").addEventListener("click", function () {
  var classContainer = document.getElementById("class-container");

  // Create text input element
  var input = document.createElement("input");
  input.type = "text";
  input.className = "class-entry";
  input.placeholder = "Enter class name";

  // Create delete button
  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function () {
    classContainer.removeChild(container);
  };

  // Create container for text input and delete button
  var container = document.createElement("div");
  container.appendChild(input);
  container.appendChild(deleteBtn);

  // Append container to class container
  classContainer.appendChild(container);
});*/

const coursesInput = document.getElementById("coursesInput");
const coursesTaking = document.getElementById("coursesTaking");
let count = 0;

function addCourse() {
  let courseContainer = document.createElement("div");
  courseContainer.className = "courseContainer";

  let input = document.createElement("input");
  input.type = "text";
  input.className = "userCourses";
  courseContainer.appendChild(input);

  let deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.className = "deleteButton";
  deleteButton.value = "Delete Course";
  deleteButton.addEventListener("click", () => {
    coursesInput.removeChild(courseContainer);
    count--;
  });
  courseContainer.appendChild(document.createTextNode(" "));
  courseContainer.appendChild(deleteButton);

  coursesInput.appendChild(courseContainer);

  count++;
}

coursesTaking.addEventListener("click", addCourse);