let persons = [];
let salaries = [];

function addSalary()
{
    const name = document.getElementById("name").value.trim();
    const salary = parseFloat(document.getElementById("salary").value);

    if (name && !isNaN(salary)) {
      persons.push(name);
      salaries.push(salary);
      document.getElementById("output").textContent = `Added salary for ${name}: $${salary}`;
    } else
        { document.getElementById("output").textContent = "Please provide valid entries"; }
}

function modifySalary()
{
    const name = document.getElementById("name").value.trim();
    const salary = parseFloat(document.getElementById("salary").value);

    if (name && !isNaN(salary)) {
      const index = persons.indexOf(name);
      if (index !== -1) {
        salaries[index] = salary;
        document.getElementById(
          "output"
        ).textContent = `Updated salary for ${name}: $${salary}`;
      } else {
        document.getElementById(
          "output"
        ).textContent = `Person ${name} not found.`;
      }
    } else {
      document.getElementById("output").textContent =
        "Please provide a valid name and salary.";
    }


}

function displayResults()
{
    let results = "Salaries:\n";
    for (let i = 0; i < persons.length; i++) {
      results += `${persons[i]}: $${salaries[i]}\n`;
    }
    document.getElementById("output").textContent = results;
}

function displaySalary()
{
    const name = document.getElementById("name").value.trim();

    if (name) {
      const index = persons.indexOf(name);
      if (index !== -1) {
        document.getElementById("output").textContent = `${name}: $${salaries[index]}`;
      } else {
        document.getElementById("output").textContent = `Person ${name} not found.`;
      }
    } else {
      document.getElementById("output").textContent ="Please provide a valid name.";
    }
}

document.getElementById("addSalaryButton").addEventListener("click", addSalary);
document.getElementById("addSalaryButton").addEventListener("click", addSalary);
document.getElementById("modifySalaryButton").addEventListener("click", modifySalary);
document.getElementById("displayResultsButton").addEventListener("click", displayResults);
document.getElementById("displaySalaryButton").addEventListener("click", displaySalary);