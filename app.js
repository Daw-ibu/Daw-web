import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCsLFZCN6MwPiUd6TU6VhvSSPSLh4zzWPg",
    authDomain: "skydaw-8318d.firebaseapp.com",
    databaseURL: "https://skydaw-8318d-default-rtdb.firebaseio.com",
    projectId: "skydaw-8318d",
    storageBucket: "skydaw-8318d.firebasestorage.app",
    messagingSenderId: "396373384516",
    appId: "1:396373384516:web:cef5b2254043b12fad0b11",
    measurementId: "G-7B5CEZBHTN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
  const analytics = getAnalytics(app);

window.addComment = async function() {
    

  const NAME =
    document.getElementById("NAME").value;

  const comment =
    document.getElementById("comment").value;
alert("Comment saved!");
  await addDoc(
    collection(db, "comments"),
    {
      name: name,
      comment: comment
    }
  );
}
import {
  getFirestore,
  collection,
  addDoc,
    await loadComments();
  getDocs
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
async function loadComments() {

  const commentsDiv =
    document.getElementById("comments");

  commentsDiv.innerHTML = "";

  const snapshot =
    await getDocs(collection(db, "comments"));

  snapshot.forEach((doc) => {

    const data = doc.data();

    commentsDiv.innerHTML += `
      <div class="comment">
        <b>${data.name}</b><br>
        ${data.comment}
        <hr>
      </div>
    `;
  });
}loadComments();


    