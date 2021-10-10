export const itemsList = document.getElementById("items-list")

export const sortParameterMenu = document.getElementById("items__sort-parameter")
export const sortOrderMenu = document.getElementById("items__sort-order")

export const itemsTotalLabel = document.getElementById("items__total-value")
export const calculateParameterMenu = document.getElementById("items__calculate-total")

export const searchParameterMenu = document.getElementById("items__search-parameter")
export const searchParameterUnitLabels = document.getElementsByClassName("items__search-units")
export const searchInputFrom = document.getElementById("items__search-from")
export const searchInputTo = document.getElementById("items__search-to")

export const itemManagerActionHeading = document.getElementById("items__manager-action")
export const inputName = document.getElementById("item-name")
export const inputPrice = document.getElementById("item-price")
export const inputWeight = document.getElementById("item-weight")
export const inputType = document.getElementById("item-type")
export const inputCount = document.getElementById("item-count")
export const addEditItemButton = document.getElementById("item__add-edit-button")

export const modal = document.getElementById("modal")
export const modalErrors = document.getElementById("modal__errors")


export const itemTemplate = ({ id, name, price, weight, type, count }) => `<li id="${id}">
<img class="item-image" src="assets/item.jpg" alt="Item"/>
<div class="item-description">
    <h3 class="item-name">${name}</h3>
    <label class="item-price">Price: ${price} hrn.</label>
    <label class="item-price">Total price: ${count * price} hrn.</label>
    <label class="item-weight">Weight: ${Math.round(weight * 1000) / 1000} kg</label>
    <label class="item-weight">Total weight: ${Math.round(count * weight * 1000) / 1000} kg</label>
    <label class="item-type">Type: ${type}</label>
    <label class="item-count">Ammount: ${count}</label>
</div>    
<div class="item-buttons">
    <button id="item-edit-button-${id}" class="item-edit-button" onclick="switchToEditMode(this)">Edit</button>
    <button id="item-remove-button-${id}" class="item-remove-button" onclick="removeItem(this)">Remove</button>
</div>
</li>`

export let allItems = [
    {id: 0, name: "Acer Nitro 5", price: 23999, weight: 2.4, type: "REGULAR", count: 1},
    {id: 1, name: "Apple Iphone 11", price: 18999, weight: 0.2, type: "REGULAR", count: 2},
    {id: 2, name: "Asus AsusPro", price: 25999, weight: 2.3, type: "REGULAR", count: 1},
    {id: 3, name: "SVS SB-1000 Pro", price: 20440, weight: 10.1, type: "REGULAR", count: 3}
]
export let currentlyDisplayedItems = allItems

export let currentlyEditedItemId = null
export let currentId = 3
export let idToItem = {}
export let currentMode = "ADD" // ADD or EDIT

export const addItemtoPage = ({ id, name, price, weight, type, count }) => {
    itemsList.insertAdjacentHTML(
        "beforeend",
        itemTemplate({id, name, price, weight, type, count})
    )
}

export const renderItems = (items) => {
    itemsList.innerHTML = ""

    for (const item of items) {
        addItemtoPage(item);
    }

    if (currentMode === "EDIT") {
        liToEdit = document.getElementById(currentlyEditedItemId)
        liToEdit.style.borderStyle = "solid"
        liToEdit.style.borderColor = "rgb(146, 95, 0)"
        editButton = document.getElementById("item-edit-button-" + currentlyEditedItemId)
        editButton.innerHTML = "Cancel"
    }    
}

export const clearAddEditInputs = () => {
    inputName.value = ""
    inputPrice.value = ""
    inputWeight.value = ""
    inputType.value = ""
    inputCount.value = ""
}

export const getSearchBounds = () => {
    return { from: searchInputFrom.value, to: searchInputTo.value}
}
