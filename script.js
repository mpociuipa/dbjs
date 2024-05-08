// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf71wTKKL7pfX6cV0EUoYHj4LQu0yj45o",
  authDomain: "mantasdb-c3296.firebaseapp.com",
  databaseURL: "https://mantasdb-c3296-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mantasdb-c3296",
  storageBucket: "mantasdb-c3296.appspot.com",
  messagingSenderId: "1088047303319",
  appId: "1:1088047303319:web:96958f5f8fae1be13bb7d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// import { getAuth } from "firebase/auth";
import {getDatabase, set, get, update, remove, ref}
from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

const db = getDatabase();

let enterCode = document.getElementById("enterCode");
let enterName = document.getElementById("enterName");
let enterQuantity = document.getElementById("enterQuantity");
let enterPrice = document.getElementById("enterPrice");
let enterDescription = document.getElementById("enterDescription");
let enterImages = document.getElementById("enterImages");

let selectCode = document.getElementById("selectCode");
let selectName = document.getElementById("selectName");
let selectQuantity = document.getElementById("selectQuantity");


let insertBtn = document.getElementById("insert");
let updateBtn = document.getElementById("update");
let removeBtn = document.getElementById("remove");
let selectBtn = document.getElementById("select");


function InsertData(evt) {
  evt.preventDefault();
  //
  const code = enterCode.value.trim();
  const name = enterName.value.trim();
  const quantity = enterQuantity.value.trim();
  const price = enterPrice.value.trim();
  const description = enterDescription.value.trim();
  const images = enterImages.value.trim();
  if (code.length < 3){
    alert("Prekes kodas turi buti bent 3 simboliu ilgio.");
    return;
  }
  if (!code || !name || !quantity || !price || !description || !images){
    alert("Visi laukai turi buti uzpildyti");
    return;
  }

  get(ref(db, "Products/" + code)).then((snapshot)=>{
    if (snapshot.exists()){
      alert("Preke su siuo kodu jau egzistuoja");
    }else 


  console.log(enterCode.value, enterName.value, enterQuantity.value, enterPrice.value, enterDescription.value, enterImages.value);
  set(ref(db, "Products/" + enterCode.value), {
    Name: enterName.value,
    ID: enterCode.value,
    Quantity: enterQuantity.value,
    Price: enterPrice.value,
    Description: enterDescription.value,
    Images: enterImages.value,
  })
    .then(() => {
      alert("Data added successfully!");
      enterCode.value = '';
      enterName.value = '';
      enterQuantity.value = '';
      enterPrice.value = '';
      enterDescription.value = '';
      enterImages.value = '';
    })
    .catch((error) => {
      alert(error);
    });
})};

function UpdateData() {
  const code = enterCode.value;
  const newName = enterName.value;
  const newQuantity = enterQuantity.value;
  const newPrice = enterPrice.value;
  const newDescription = enterDescription.value;
  const newImages = enterImages.value;
  console.log(code, newName, newQuantity, newPrice, newDescription, newImages);
  update(ref(db, "Products/" + code), {
    Name: newName,
    Quantity: newQuantity,
    Price: newPrice,
    Description: newDescription,
    Images: newImages,
  }).then(() => {
    alert("Data updated successfully!");
  }).catch((error) => {
    alert(error);
  });
}

function RemoveData() {
  const code = selectCode.value;
  remove(ref(db, "Products/" + code))
    .then(() => {
      alert("Data removed successfully!");
    })
    .catch((error) => {
      alert(error);
    });
}

function SelectData() {
  const code = selectCode.value;
  console.log(enterCode.value, enterName.value, enterQuantity.value, enterPrice.value, enterDescription.value, enterImages.value);
  
 
  get(ref(db, "Products/" + code)).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      selectName.value = data.Name;
      selectQuantity.value = data.Quantity;
      selectPrice.value = data.Price;
      selectDescription.value = data.Description;
    } else {
      alert("No such document!");
    }
  }).catch((error) => {
    alert(error);
  });
}

insertBtn.addEventListener("click", InsertData);
updateBtn.addEventListener("click", UpdateData);
removeBtn.addEventListener("click", RemoveData);
selectBtn.addEventListener("click", SelectData);

