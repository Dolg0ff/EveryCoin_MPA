function renderTable(array, tableElement) {
  let html = '';
  for (let i = 0, max = array.length; i < max; i++) {
    const row = array[i];
    html += '<tr>';
    for (let key in row) {
      html += `<td>${row[key]}</td>`;
    }
    html += '</tr>';
  }
  tableElement.innerHTML = html;
}