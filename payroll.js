function addListeners() {
    document.getElementById("btnaddtotab").addEventListener("click", addToTab);
}

function addToTab() {
    let employeeName = document.getElementById("employee1").value;
    let daysWorked = document.getElementById("days1").value;
    let dailyRate = document.getElementById("rate1").value;
    let deductionAmount = document.getElementById("amount1").value;

    // Validation
    if (!employeeName || daysWorked <= 0 || dailyRate <= 0 || deductionAmount < 0) {
        alert("Please fill in all fields with valid values.");
        return;
    }

    let grossPay = daysWorked * dailyRate;
    let netPay = grossPay - deductionAmount;

    let tableBody = document.getElementById("tablebody");

    let newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${tableBody.rows.length + 1}</td>
        <td>${employeeName}</td>
        <td>${daysWorked}</td>
        <td>${dailyRate}</td>
        <td>${grossPay.toFixed(2)}</td>
        <td>${deductionAmount}</td>
        <td>${netPay.toFixed(2)}</td>
    `;
    tableBody.appendChild(newRow);

    // Clear inputs
    document.getElementById("employee1").value = "";
    document.getElementById("days1").value = "";
    document.getElementById("rate1").value = "";
    document.getElementById("amount1").value = "";
}

(() => {
    addListeners();
})();