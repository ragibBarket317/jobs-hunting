import { getShoppingCart } from "../utilities/fakedb";

const cartItemLoader = async () => {
  const loadedCartItem = await fetch("jobs.json");
  const cartItems = await loadedCartItem.json();

  const newCartItem = [];
  const storeCart = getShoppingCart();
  console.log(storeCart);
  for (let id in storeCart) {
    console.log(id);
    const addedItem = cartItems.find((ct) => ct.id === parseInt(id));
    console.log(addedItem);
    if (addedItem) {
      const quantity = storeCart[id];
      addedItem.quantity = quantity;
      newCartItem.push(addedItem);
    }
  }
  return newCartItem;
};

export default cartItemLoader;
