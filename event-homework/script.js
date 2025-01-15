function generateTable() {
    let rows = document.getElementById("rows").value;
    let columns = document.getElementById("columns").value;

    if (rows <= 0 || columns <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

    let container = document.getElementById("tableContainer");

    container.innerHTML = "";

    let table = document.createElement("table");

    for (let i = 1; i <= rows; i++) {
        let row = document.createElement("tr");

        for (let j = 1; j <= columns; j++) {
            let cell = document.createElement("td");
            cell.textContent = `Row-${i} Column-${j}`;
            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    container.appendChild(table);
}