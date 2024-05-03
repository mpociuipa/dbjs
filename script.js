// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOvNlZBrFpD8QS9ezqA6vdNCZifn_Ypa0",
  authDomain: "mantas-92e1c.firebaseapp.com",
  projectId: "mantas-92e1c",
  storageBucket: "mantas-92e1c.appspot.com",
  messagingSenderId: "789054429829",
  appId: "1:789054429829:web:1fd7b24ef2562b1813e7ec",
  measurementId: "G-3Q55QJT7MP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import {getDatabase} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js";

const db = getDatabase();

let number = document.querySelector("#number");
let name = document.querySelector("#name");
let quantity = document.querySelector("#quantity");
let code = document.querySelector("#code");

let insertBtn = document.getElementById("#insert");
let updateBtn = document.getElementById("#update");
let deleteBtn = document.getElementById("#delete");
let selectBtn = document.getElementById("#select");

function InsertData(){
    setInterval(ref(db, ), {
        Name:
    })
    
}
function UpdateData(){

}
function DeleteData(){

}
function SelectData(){

}

insertBtn.addEventListener("click", InsertData);
updateBtn.addEventListener("click", UpdateData);
deleteBtn.addEventListener("click", DeleteData);
selectBtn.addEventListener("click", SelectData);