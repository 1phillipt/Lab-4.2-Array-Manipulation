let ShoppingList = [];

let itemInput = document.getElementById("itemInput");
let replaceItem = document.getElementById("replaceItem");
let replaceWith = document.getElementById("replaceWith");


let addItemButton = document.getElementById("addItemButton");
let removeLastItemButton = document.getElementById("removeLastItemButton");

let removeItemButton = document.getElementById("removeItemButton");
let updateItem = document.getElementById("updateItemButton");
let cartList = document.getElementById("cart");
let filterItem = document.getElementById("fileterButton")

//grabs the input and inserts into the card array
  addItemButton.addEventListener("click", function () {

  let item = itemInput.value;

  if (item === "") {
    alert("Please enter an item.");
    return;
  }

  ShoppingList.push(item); // Add item to cart array
  renderCart();
  itemInput.value = ""; // Clear the input field  
  displayList(); //console log the shopping list items
});

removeLastItemButton.addEventListener("click", function () {
  ShoppingList.pop(); // Remove last item from cart array
  renderCart();
  displayList(); //console log the shopping list items

});

function renderCart() {
  cartList.innerHTML = ""; // Clear existing list
  for (let i = 0; i < ShoppingList.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerText = ShoppingList[i];
    cartList.appendChild(listItem);
  }
}

removeItemButton.addEventListener("click", function () {
  let item = itemInput.value;

  console.log("this will be deleted from the list - " + itemInput.value);

  const index = ShoppingList.indexOf(item);

  if(index > -1){
    cart.splice(index, 1);
   
}
renderCart();
});

updateItem.addEventListener("click", function(){
    
    let replaceItemValue = replaceItem.value;
    let replaceWithValue = replaceWith.value;

  

    const indexOfReplaceItem = ShoppingList.indexOf(replaceItemValue);

    ShoppingList.splice(indexOfReplaceItem,1,replaceWithValue);
     replaceItem.value ="";
     replaceWith.value="";
    renderCart();
   
})


//displays the list items in console
function displayList(){
  for(const listItem of ShoppingList){
    console.log(listItem)
  }
}

//filter click event listener

filterItem.addEventListener("click", function(){
  let item = itemInput.value;
   if (item === "") {
    alert("Please enter an item to filter by.");
    return;
  }
  const filter = ShoppingList.filter((s)=>s===item);
  console.log(filter);

})

