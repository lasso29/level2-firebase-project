
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
        import { onAuthStateChanged, getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyCCvgZNa_j6r4BrKoBcyV4B_BNZozriMLg",
            authDomain: "createaccount-deda7.firebaseapp.com",
            projectId: "createaccount-deda7",
            storageBucket: "createaccount-deda7.appspot.com",
            messagingSenderId: "434288855163",
            appId: "1:434288855163:web:3df23d7480c6c802f67ade"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);

        onAuthStateChanged(auth, ((user) => {

            if (user) {
                console.log(user);
                disp.innerHTML= `
                <div>
                <div>
                <img src="${user.photoURL}" alt="">
                <h6>Welcome ${user.displayName}</h6>
                </div>
                </div>
                
                `
            }
        }))
    