let carts = document.querySelectorAll(".btn-product");


let products = [
    
    {
        Name: "Apple",
        tag: "product-1",
        price: 19.44,
        inCart: 0,
    },
    {
        Name: "Pumpkins",
        tag: "product-2",
        price: 6.77,
        inCart: 0,
    },
    {
        Name: "Carrot",
        tag: "product-3",
        price: 18.10,
        inCart: 0,
    },
    {
        Name: "Herbs and Spices",
        tag: "product-4",
        price: 15.60,
        inCart: 0,
    },
    {
        Name: "Pasteurized milk",
        tag: "product-5",
        price: 6.99,
        inCart: 0,
    },
    {
        Name: "Pomegranate",
        tag: "product-6",
        price: 12.33,
        inCart: 0,
    },
    {
        Name: "Bulb onion",
        tag: "product-7",
        price: 10.00,
        inCart: 0,
    },
    {
        Name: "White potato vine",
        tag: "product-8",
        price: 16.87,
        inCart: 0,
    },
    {
        Name: "Semolina",
        tag: "product-9",
        price: 18.99,
        inCart: 0,
    },
    {
        Name: "Runner bean",
        tag: "product-10",
        price: 14.01,
        inCart: 0,
    },
    {
        Name: "Juice drink",
        tag: "product-11",
        price: 9.55,
        inCart: 0,
    },
    {
        Name: "Strawberry",
        tag: "product-12",
        price: 13.91,
        inCart: 0,
    }
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
      cartNumbers(products[i]);
      totalCost(products[i]);
    });
  }
  
  // maintain the cart data when page reload
  
  function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
  
    if (productNumbers) {
      document.querySelector(" .icons span a").textContent = productNumbers;
    }
  }
  
  // adding data to local storage when button clicked
  
  function cartNumbers(product) {
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
  
    if (productNumbers) {
      localStorage.setItem("cartNumbers", productNumbers + 1);
      document.querySelector(".icons span a").textContent =
        productNumbers + 1;
    } else {
      localStorage.setItem("cartNumbers", 1);
      document.querySelector(".icons span a").textContent = 1;
    }
    setItems(product);
  }
  
  function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
  
    if (cartItems != null) {
      if (cartItems[product.tag] == undefined) {
        cartItems = {
          ...cartItems,
          [product.tag]: product,
        };
      }
      cartItems[product.tag].inCart += 1;
    } else {
      product.inCart = 1;
      cartItems = {
        [product.tag]: product,
      };
    }
  
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  }
  function totalCost(product) {
    let cartCost = localStorage.getItem("totalCost");
  
    if (cartCost != null) {
      cartCost = parseInt(cartCost);
      localStorage.setItem("totalCost", cartCost + product.price);
    } else {
      localStorage.setItem("totalCost", product.price);
    }
  }
  
  function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".display-products");
    let cartCost = localStorage.getItem("totalCost");
  
    if (cartItems && productContainer) {
      productContainer.innerHTML = "";
      Object.values(cartItems).map((item) => {
        productContainer.innerHTML += `
  
      <td><i class="fa-solid fa-circle-xmark"></i></td>
      <td><img src="../image/${item.tag}.jpg" alt="image" style="width:30px;">${
          item.Name
        }</td>
      <td class='price'>$${item.price}</td>
      <td class='price'>${item.inCart}</td>
      <td class='total'>
      $${(item.inCart * item.price).toFixed(2)}
      </td>
      `;
      });
      productContainer.innerHTML += `
      <div class='basketTotalContainer'>
          <h4 class='basketTotalTitle'>
          Basket Total
          </h4>
          <h4 class='basketTotal'>
          ₹${cartCost}
          </h4>
        </div>
      `;
    }
  }
  
  function myClick(){
    alert('Invalid CouponCode')
  }
   function myCheckout(){
    alert('Thanks for shopping')
     localStorage.clear();
     location.reload();
   }
  
  onLoadCartNumbers();
  displayCart();
  
  