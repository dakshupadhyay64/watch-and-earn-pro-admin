
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import { firebaseConfig } from './firebase-config.js';

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const userList = document.getElementById('userList');

onValue(ref(db, 'users'), (snapshot) => {
    userList.innerHTML = '';
    snapshot.forEach((userSnap) => {
        const user = userSnap.val();
        const div = document.createElement('div');
        div.textContent = `User: ${user.email || 'Unknown'}, Daily Ads: ${user.dailyAds || 0}, Monthly Ads: ${user.monthlyAds || 0}`;
        userList.appendChild(div);
    });
});
