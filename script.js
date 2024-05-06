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


import {getDatabase, set, get, update, remove, ref, child}
from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

const db = getDatabase();

let enterCode = document.getElementById("enterCode");
let enterName = document.getElementById("enterName");
let enterQuantity = document.getElementById("enterQuantity");
let selectCode = document.getElementById("selectCode");
let selectName = document.getElementById("selectName");
let selectQuantity = document.getElementById("selectQuantity");

let insertBtn = document.getElementById("insert");
let updateBtn = document.getElementById("update");
let removeBtn = document.getElementById("remove");
let selectBtn = document.getElementById("select");

function InsertData(evt) {
  evt.preventDefault();
  console.log(enterCode.value, enterName.value, enterQuantity.value);
  set(ref(db, "Products/" + enterCode.value), {
    Name: enterName.value,
    ID: enterCode.value,
    Quantity: enterQuantity.value,
  })
    .then(() => {
      alert("Data added successfully!");
    })
    .catch((error) => {
      alert(error);
    });
}

function UpdateData() {
  const code = selectCode.value;
  const newName = selectName.value;
  const newQuantity = selectQuantity.value;
  console.log(enterCode.value, enterName.value, enterQuantity.value);
  update(ref(db, "Products/" + code), {
    Name: newName,
    Quantity: newQuantity
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
  console.log(enterCode.value, enterName.value, enterQuantity.value);
  get(ref(db, "Products/" + code)).then((snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      selectName.value = data.Name;
      selectQuantity.value = data.Quantity;
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