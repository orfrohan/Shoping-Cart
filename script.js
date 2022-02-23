function handleProductChange(product, isIncrease) {
  const productCount = getInputValue(product);
  let productNewCount = productCount;
  if (isIncrease == true) {
    productNewCount = productCount + 1;
  }
  if (isIncrease == false && productCount > 0) {
    productNewCount = productCount - 1;
  }
  document.getElementById(product + "Count").value = productNewCount;

  let productPrice = 0;
  if (product == "phone") {
    productPrice = productNewCount * 1219;
  }
  if (product == "case") {
    productPrice = productNewCount * 59;
  }
  document.getElementById(product + "Price").innerText = "$ " + productPrice;

  calculateTotal();
}

function calculateTotal() {
  const phoneCount = getInputValue("phone");

  const caseCount = getInputValue("case");

  const SubTotal = phoneCount * 1219 + caseCount * 59;
  document.getElementById("subTotal").innerText = "$ " + SubTotal;

  const tax = Math.round(SubTotal * 0.1);
  document.getElementById("taxAmount").innerText = "$ " + tax;

  const total = SubTotal + tax;
  document.getElementById("total").innerText = "$ " + total;
}

function getInputValue(product) {
  const productInput = document.getElementById(product + "Count");
  const productCount = parseInt(productInput.value);
  return productCount;
}

// function handleProductChange(isIncrease) {
//   const caseInput = document.getElementById("caseCount");
//   const caseCount = parseInt(caseInput.value);
//   let caseNewCount = caseCount;
//   if (isIncrease == true) {
//     caseNewCount = caseCount + 1;
//   }
//   if (isIncrease == false && caseCount > 0) {
//     caseNewCount = caseCount - 1;
//   }
//   caseInput.value = caseNewCount;
//   const casePrice = caseNewCount * 59;
//   document.getElementById("casePrice").innerText = "$ " + casePrice;
// }

// // phone part

// function phoneHandleChange(isIncrease) {
//   const phoneInput = document.getElementById("phoneCount");
//   const phoneCount = parseInt(phoneInput.value);
//   let phoneNewCount = phoneCount;
//   if (isIncrease == true) {
//     phoneNewCount = phoneCount + 1;
//   }
//   if (isIncrease == false && phoneCount > 0) {
//     phoneNewCount = phoneCount - 1;
//   }
//   phoneInput.value = phoneNewCount;
//   const phonePrice = phoneNewCount * 1219;
//   document.getElementById("phonePrice").innerText = "$ " + phonePrice;
// }

// document.getElementById("phoneIncrease").addEventListener("click", function () {
//   const phoneInput = document.getElementById("phoneCount");
//   const phoneCount = parseInt(phoneInput.value);
//   const phoneNewCount = phoneCount + 1;
//   phoneInput.value = phoneNewCount;
//   const phonePrice = phoneNewCount * 1219;
//   document.getElementById("phonePrice").innerText = "$ " + phonePrice;
// });

// document.getElementById("phoneDecrease").addEventListener("click", function () {
//   const phoneInput = document.getElementById("phoneCount");
//   const phoneCount = parseInt(phoneInput.value);
//   const phoneNewCount = phoneCount - 1;
//   phoneInput.value = phoneNewCount;
//   const phonePrice = phoneNewCount * 1219;
//   document.getElementById("phonePrice").innerText = phonePrice;
// });

// document.getElementById("case-increase").addEventListener("click", function () {
//   const caseInput = document.getElementById("case-count");
//   const caseCount = parseInt(caseInput.value);
//   const caseNewCount = caseCount + 1;
//   caseInput.value = caseNewCount;
//   const casePrice = caseNewCount * 59;
//   document.getElementById("casePrice").innerText = "$ " + casePrice;
// });

// document.getElementById("case-decrease").addEventListener("click", function () {
//   const caseInput = document.getElementById("case-count");
//   const caseCount = parseInt(caseInput.value);
//   const caseNewCount = caseCount - 1;
//   caseInput.value = caseNewCount;
//   const casePrice = caseNewCount * 59;
//   document.getElementById("casePrice").innerText = "$ " + casePrice;
// });
