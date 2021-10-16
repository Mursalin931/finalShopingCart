const productAmount = document.getElementById('product-amount');
const delivery_charge = document.getElementById('delivery-charge')
const totalCostOfProduct = document.getElementById('total-cost-product')

/**-------------------> decrease Action <---------------------------------- */
function decreaseNumber(dec, Product_price) {
    var inputValue = document.getElementById(dec);
    var item_price = document.getElementById(Product_price);

    console.log(item_price)
    if (inputValue.value <= 0) {
        inputValue.value = 0
        alert('negative Number Not Allowed !!')
    } else {
        inputValue.value = parseInt(inputValue.value) - 1
        inputValue.style.background = '#fff'
        inputValue.style.color = 'blue'
        item_price.innerHTML = parseInt(item_price.innerHTML) - 150 + ' Tk';
        productAmount.innerHTML = parseInt(productAmount.innerHTML) - 150;
        totalCostOfProduct.innerHTML = parseInt(productAmount.innerHTML) + parseInt(delivery_charge.innerHTML);


    }
}

/**------------------------------> increase action <-------------------------------------*/

function increaseNumber(inc, Product_price) {
    var inputValue = document.getElementById(inc);
    var item_price = document.getElementById(Product_price);
    console.log(item_price)
    if (inputValue.value >= 5) {
        inputValue.value = 5;
        alert('Maximum 5 Product')
        inputValue.style.background = 'red'
        inputValue.style.color = '#fff'
    } else {
        inputValue.value = parseInt(inputValue.value) + 1;
        item_price.innerHTML = parseInt(item_price.innerHTML) + 150 + " Tk";
        productAmount.innerHTML = parseInt(productAmount.innerHTML) + 150;
        totalCostOfProduct.innerHTML = parseInt(productAmount.innerHTML) + parseInt(delivery_charge.innerHTML);
    }
}


/**----------------------------> discount offer action <-------------------------------- */
const discountCodeInput = document.getElementById('discount-code-input');
const message = document.getElementById('error-throgh');

function discount_code() {

    if (discountCodeInput.value === 'm1234') {
        let newTotalAmount = parseInt(totalCostOfProduct.innerHTML) - 15;
        totalCostOfProduct.innerHTML = newTotalAmount;

        message.style.display = 'block'
        message.classList.add = 'green'
        message.innerHTML = 'Congratulation !! code is valid.'
    } else {
        message.style.display = 'block'
    }
}