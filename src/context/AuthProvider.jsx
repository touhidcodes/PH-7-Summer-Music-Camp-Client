import React, { createContext, useEffect, useState } from "react";
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axiosBase from "../pages/hooks/useAxios/axiosBase";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState([]);
	const [loading, setLoading] = useState(true);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};
	const signInUser = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	};
	const logOut = () => {

		return signOut(auth);
	};
	const googleSignIn = () => {
		return signInWithPopup(auth, googleProvider);
	};
	const updateUserProfile = (name, photo) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			// console.log("auth state changed", currentUser)
			setUser(currentUser);
			setLoading(false);
			// Set JWT to Backend
			if (currentUser) {
				axiosBase.post("/jwt", { email: currentUser.email }).then((data) => {
					localStorage.setItem("access_token", data.data.token);
				});
			} else {
				localStorage.removeItem("access_token");
			}
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const authInfo = {
		auth,
		user,
		loading,
		createUser,
		signInUser,
		logOut,
		googleSignIn,
		updateUserProfile,
	};
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
