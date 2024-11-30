import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { onAuthStateChanged } from 'firebase/auth'


function Profile() {
    const [userDetails, setUserDetails] = useState(null)
    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);

            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetails(docSnap.data());
                console.log(docSnap.data());
            } else {
                console.log("User is not logged in")
            }

            // const docRef = doc(db, "Users", user.uid); 
            // const docSnap = await getDoc(docRef);
            // if(docSnap.exists){
            //     setUserDetails(docSnap.data());
            //     console.log(docSnap.data());
            //     console.log("logged in")
            // }else{
            //     console.log("User is not Logged in");

            // }

        })
    }
    useEffect(() => {
        fetchUserData()
    }, [])

    async function handleLogOut() {
        try {
            await auth.signOut();
            window.location.href = "/login"
            console.log("User logged out successfully")
        } catch (error) {
            console.error("Error logging out:", error.message)
        }
    }
    return (
        <div>
            {userDetails ? (
                <>
                    <div>
                        <img src={userDetails.photo} alt="" />
                    </div>
                    <h3>Welcome {userDetails.firstName}</h3>
                    <div>
                        <p>Email: {userDetails.email}</p>
                        <p>First Name: {userDetails.firstName}</p>
                        <p>Last Name: {userDetails.lastName}</p>
                    </div>
                    <button onClick={handleLogOut}>
                        Logout
                    </button>
                </>
            ) : (
                <p>Loading...</p>
            )}
            Welcome Kaosiso
        </div>
    )
}

export default Profile
