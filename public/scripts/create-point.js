function populateUFs(){
    
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( states => {

        for (const state of states ){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
    
        }

     })
}

populateUFs()

function getCities(event) {

    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() )
    .then( cities => {

        for (city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

    //itens de coleta 
    //pegar todos os li
    const itemsToCollect = document.querySelectorAll(".items-grid li")

    for (const item of itemsToCollect) {
        item.addEventListener("click", handleSelectedItem)
    }

    //item escondido
    const colletedItems = document.querySelector("input[name=items]") 


    let selectItems = []

    function handleSelectedItem(event){
        const itemLi = event.target
        // add or remove javascript
         itemLi.classList.toggle("Select")
        const itemId = itemLi.dataset.id


        const alreadyselect = selectItems.findIndex(item => {
            return item == itemId // isso sera true ou false 
        })

        // verificar se existe, items selecionados se sim
        // vou pegar os itens selecionados 

        //se ja estiver selcionado 
        if(alreadyselect >= 0 ){
            //tirar da seleçao 
            const filteredItems = selectedItems.filter( item => {
                const itemIsDifferent = item != itemId //false
                return false
            })

            selectedItems = filteredItems
        } else {
            //se nao estiver selecionador adicionar a seleçao
            //adicionar a seleçao 
            selectedItems.push(itemId)

        }
        //atualizar o canmpo escondido com os itens selecionados
        colletedItems.value = selectedItems
        
    }