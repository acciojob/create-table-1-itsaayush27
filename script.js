function insert_Row() {
    //Write your code here
    const table = document.getElementById("sampleTable");

  // Insert a new row at the top (index 0)
  const newRow = table.insertRow(0);

  // Insert two cells in the new row
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  // Add content to the cells
  cell1.textContent = "New Cell1";
  cell2.textContent = "New Cell2";
}