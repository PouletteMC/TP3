
function add(){

    const newItem = document.createElement('tr')
    const taskTd = document.createElement('td')
    const dateTd = document.createElement('td')
    const remaining = document.createElement('td')
    const elapsed = document.createElement('td')
    const categorieTd = document.createElement('td')
    const completed = document.createElement('button')

    let totalTime = 0
    
    taskTd.textContent = document.task.tache.value
    dateTd.textContent = document.task.date.value
    categorieTd.textContent = document.task.categorie.value
    elapsed.textContent = '0'
    const time = new Date()
    const remainingTime = new Date(document.task.date.value) - time

    if(remainingTime < 0) {
        remaining.textContent = 'Dépassé'
    } else {
        switch (Math.floor(remainingTime / 1000 / 60 / 60 / 24)) {
            case 0:
                remaining.textContent = 'Aujourd\'hui'
                break
            case 1:
                remaining.textContent = 'Demain'
                break
            default:
                remaining.textContent = Math.floor(remainingTime / 1000 / 60 / 60 / 24) + ' jours'
        }
    }

    completed.textContent = 'Terminer'
    completed.addEventListener('click', event => {
        event.target.textContent = new Date().toLocaleString()
        event.target.disabled = true
    })

    setInterval(() => {
      if( completed.disabled ) {
        totalTime = elapsed.textContent
        elapsed.textContent = totalTime
        return
      }
        elapsed.textContent = parseInt(elapsed.textContent) + 1
    }, 1000)
        


    if (!document.task.tache.checkValidity() || !document.task.date.checkValidity() || !document.task.categorie.checkValidity() ) return

    newItem.append(taskTd, dateTd, remaining, elapsed, categorieTd, completed)

    const table = document.querySelector('.datatable tbody')
    table.appendChild(newItem)

}

function remove() {
        const tbody = document.querySelector('.datatable tbody' )
        while (tbody.firstChild) {
          tbody.removeChild(tbody.firstChild)
        }
}