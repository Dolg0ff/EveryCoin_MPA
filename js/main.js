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

function add(event, form, key, arrayEssence, essenceTable) {
  event.preventDefault();
  const formEssence = document.querySelector('#' + form);
  if(formEssence.name.value != '' && formEssence.count.value != 0){
    arrayEssence.push({
    name: formEssence.name.value,
    count: formEssence.count.value,
  });
  }
  else if(formEssence.name.value == '' || formEssence.from.value == '' || formEssence.to.value == ''){
    alert('Введите название аккаунта');
  }
  else if(formEssence.from.value != '' && formEssence.to.value != '' && formEssence.count.value != 0){
    arrayEssence.push({
    fromEssenceName: formEssence.from.value,
    toEssenceName: formEssence.to.value,
    count: formEssence.count.value,
    comment: formEssence.comment.value,
  });
  }
  else if(formEssence.count.value == 0){
    alert('Введите сумму транзакции');
  }
  let serialArrayEssence = JSON.stringify(arrayEssence);
  localStorage.setItem(key, serialArrayEssence);
  renderTable(arrayEssence, essenceTable);
  formEssence.reset();
}