var products = [
  {
    name: 'Brown Wooden Chair',
    headline: 'High quality wood used',
    price: '15,000',
    image:
      'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Blue Chair',
    headline: 'Cafe me use hone wali chair',
    price: '50,000',
    image:
      'https://images.unsplash.com/photo-1649972047451-a6fe0aae85fb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Stool',
    headline: 'Ghar ka stool',
    price: '1,500',
    image:
      'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];
var popular = [
  {
    name: 'Simple Chair',
    headline: 'Peace of mind',
    price: '5,000',
    image:
      'https://images.unsplash.com/photo-1638285852125-c6ed00ff2065?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Student Chair',
    headline: 'Class me use hone wali chair',
    price: '100',
    image:
      'https://images.unsplash.com/photo-1551298370-9d3d53740c72?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Gaming Chair',
    headline: 'Very Comfortable',
    price: '5,000',
    image:
      'https://images.unsplash.com/photo-1688578735427-994ecdea3ea4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D',
  },
];
var cart = [];

function addProduct() {
  var clutter = '';
  products.forEach(function (product, idx) {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl oveflow-hidden">
        <img class='h-full w-full object-cover'src='${product.image}'>
        </div>
        <div class="data w-full px-2 py-5">
          <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
          <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
              <h3 class="font-semibold opacity-50">${product.headline}</h3>
              <h4 class="font-semibold mt-2">₹${product.price}</h4>
            </div>
            <button data-index='${idx}'class=" add w-10 h-10 rounded-full shader text-yellow-400"><i data-index='${idx}' class="add ri-add-line"></i></button>
          </div>
        </div>
      </div>`;
  });
  document.querySelector('.products').innerHTML = clutter;
}
function addPopularProducts() {
  var clutter1 = '';
  popular.forEach(function (product) {
    clutter1 += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
          <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
            <img class="w-full h-full object-cover" src="${product.image}" alt="">
          </div>
          <div class="data py-2 w-full">
            <h1 class="leading-none font-semibold">${product.name}</h1>
            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
            <h4 class="mt-3 font-semibold text-zinc-500">₹${product.price}</h4>
          </div>
        </div>`;
  });
  document.querySelector('.populars').innerHTML = clutter1;
}
function addToCart() {
  document
    .querySelector('.products')
    .addEventListener('click', function (details) {
      if (details.target.classList.contains('add')) {
        cart.push(products[details.target.dataset.index]);
      }
    });
}
function showCart() {
  document.querySelector('.carticon').addEventListener('click', function () {
    document.querySelector('.cartexpand').style.display = 'block';
    var clutter = '';
    cart.forEach(function (prod, index) {
      clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
    <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
        <img class='w-full h-full object-cover'src="${prod.image}" />
    </div>
    <div>
        <h3 class="font-semibold">${prod.name}</h3>
        <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
    </div>
</div>`;
    });
    document.querySelector('.cartexpand').innerHTML = clutter;
  });
}
addProduct();
addPopularProducts();
addToCart();
showCart();
