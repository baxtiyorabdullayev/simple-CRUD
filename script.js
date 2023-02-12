const QUERY = (param) => document.querySelector(param);

const input = QUERY("#input");
const form = QUERY("#form");
const contener = QUERY("#contener");
const submitBtn = QUERY("#submitBtn");

let ItemID = null;

const MyData = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (submitBtn.value === "Add") {
    MyData.push({ id: new Date().getTime(), text: input.value });
    input.value = "";
  } else {
    MyData.splice(ItemID, 1, { ...MyData[ItemID], text: input.value });
    submitBtn.value = "Add";
  }
  ViewData(MyData);
});

function Delete(index) {
  MyData.splice(index, 1);
  ViewData(MyData);
}
console.log(MyData);

const Edite = (index) => {
  input.value = MyData[index].text;
  submitBtn.value = "Updete";
  ItemID = index;
};
