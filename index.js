function AddRow() {
    const name = document.getElementById("nameInput").value;
    const age = document.getElementById("ageInput").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const course = document.querySelector(".courseInput").value;
    const email = document.getElementById("emailInput").value;
    if (!name || !age || !gender || !course || !email) {
        alert("Please fill out all fields.");
        return;
    }

    const displayTable = document.querySelector(".display");
    const studentTable = document.getElementById("studentTable");

    displayTable.classList.remove("hidden");

    const newRow = studentTable.insertRow();

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${course}</td>
        <td>${email}</td>
        <td><button class="delete-btn" onclick="deleteElement(this)">Delete</button></td>
    `;
}

function deleteElement(button) {
    button.parentElement.parentElement.remove();
}