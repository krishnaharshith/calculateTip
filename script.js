// const calculatePrice = function () {
//   let element = document.querySelector(".total-div");
//   element.classList.remove("hide");
// };

document.querySelector(".button").addEventListener("click", function () {
  let amount = Number(document.querySelector("#amount").value);
  let tip = Number(document.querySelector("#tip").value);
  console.log(amount, tip);
  let total = amount + (tip * amount) / 100;
  console.log(total);
  document.querySelector(".price").textContent = total + 0.0;
  document.querySelector(".total-div").classList.remove("hide");
});
