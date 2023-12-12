const cartProductsLoader = async() =>{
    const loadedProducts = await fetch('products.json');
    const product = await loadedProducts.json();
    console.log(product)
}
export default cartProductsLoader;