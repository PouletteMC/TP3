
function add(){

    const newItem = document.createElement('tr')
    const taskTd = document.createElement('td')
    const dateTd = document.createElement('td')
    const categorieTd = document.createElement('td')
    
    taskTd.textContent = document.task.tache.value
    dateTd.textContent = document.task.date.value
    categorieTd.textContent = document.task.categorie.value

    if (!document.task.tache.checkValidity() || !document.task.date.checkValidity() || !document.task.categorie.checkValidity()) return

    newItem.append(taskTd, dateTd, categorieTd)

    const table = document.querySelector('.datatable tbody')
    table.appendChild(newItem)

}

function remove() {
        const tbody = document.querySelector('.datatable tbody' )
        while (tbody.firstChild) {
          tbody.removeChild(tbody.firstChild)
        }
    
}
