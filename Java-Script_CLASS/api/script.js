// let product = document.querySelector('.product')
// var category = document.querySelector('category-list')


// let display = async() =>{

//     product.innerHtml='';

//     let product1 = await fetch('https://fakestoreapi.com/products');
    
//     let finalProduct = await product1.json();
//     console.log(finalProduct);
//     finalProduct.forEach(data => {
//         product.innerHTML += 
//         `<div class="product-item">
//             <img src="${data.image}">
//             <h4>${data.category}</h4>
//             <p>Price Rs. ${data.price}</p>
//             <h3>${data.title}</h3>
//         </div>`;
//     });
// }
// display();





let display =  async()=> {
  let apidata = "https://fakestoreapi.com/products"; 
 console.log(apidata);

 await fetch(apidata)
     .then(response => response.json())
    .then(json => {
         console.log(json);
        const pList = document.querySelector('.product');
        const products = json.map(data => {
            return `
                <div class="product-item">
                <img src="${data.image}">
                <h4>${data.category}</h4>
                <p>Price Rs. ${data.price}</p>
                <h3>${data.title}</h3>
        </div>
            `;
        }).join(''); 
        pList.innerHTML = products; 
    })
    .catch(error => console.log(error));

}

  
display()


