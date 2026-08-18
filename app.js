

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
