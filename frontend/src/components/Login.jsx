// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Eye, EyeOff } from "lucide-react";

// const Login = () => {
//     const [userID, setUserID] = useState('');
//     const [password, setPassword] = useState('');
//     const [newPassword, setNewPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const [step, setStep] = useState('enterUserID'); // Steps: enterUserID, enterPassword, setNewPassword
//     const [showPassword, setShowPassword] = useState(false);
//     const [hasPassword, setHasPassword] = useState(false);
//     const [userDetails, setUserDetails] = useState(null);

//     const navigate = useNavigate(); // For redirection

//     const handleUserIDSubmit = async (e) => {
//         e.preventDefault();
//         setMessage('');

//         try {
//             const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/check-user-details`, { userID });


//             if (response.data.hasPassword) {
//                 setHasPassword(true);
//                 setStep('enterPassword'); // Show password field
//             } else {
//                 setHasPassword(false);
//                 setStep('setNewPassword'); // Show new password fields
//             }
//         } catch (error) {
//             setMessage(error.response?.data?.error || 'Error checking user');
//         }
//     };

//     const handleLogin = async (event) => {
//         event.preventDefault();

//         try {
//             const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login-user-details`, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ userID, password }),
//             });
            

//             const data = await response.json();
//             console.log("Full API Response:", data);

//             if (data.username) {
//                 console.log("Login Successful:", data);

//                 // ✅ Store user details in localStorage
//                 localStorage.setItem(
//                     "userDetails",
//                     JSON.stringify({
//                         message: "Login successful",
//                         username: data.username,
//                         userID: data.userID,  // ✅ Make sure this is included
//                         coins: data.coins
//                     })
//                 );

//                 navigate("/dashboard");  // Redirect to dashboard
//             } else {
//                 console.error("Error: User not found in response");
//             }
//         } catch (error) {
//             console.error("Login Fetch Error:", error);
//         }
//     };




//     const handleSetPassword = async (e) => {
//         e.preventDefault();
//         setMessage('');

//         try {
//             await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/set-user-password`, {
//                 userID,
//                 newPassword,
//                 confirmPassword
//             });

//             setMessage('Password set successfully! Please login.');
//             setStep('enterPassword'); // Now user can log in
//             setPassword('');
//         } catch (error) {
//             setMessage(error.response?.data?.error || 'Failed to set password');
//         }
//     };

//     return (
//         <div className="place-items-center mt-72 p-5">
//             <div className="">
//                 <h2 className="text-2xl font-bold text-indigo-800 ml-11">
//                     {step === 'enterUserID' ? 'Enter User ID' :
//                         step === 'enterPassword' ? 'Login' : 'Set New Password'}
//                 </h2>

//                 {step === 'enterUserID' && (
//                     <form onSubmit={handleUserIDSubmit} className="">
//                         <div className='mt-6 space-x-5'>
//                             <label className="text-indigo-800 font-semibold text-2xl">User ID:</label>
//                             <input
//                                 type="text"
//                                 className="outline rounded-sm outline-indigo-800 p-2 text-indigo-600 font-semibold"
//                                 value={userID}
//                                 onChange={(e) => setUserID(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <button type="submit" className="w-52 ml-16 bg-indigo-500 text-white p-2 rounded mt-10">
//                             Next
//                         </button>
//                     </form>
//                 )}

//                 {step === 'enterPassword' && (
//                     <form onSubmit={handleLogin} className="space-y-4 mt-7">
//                     <div className="relative">
//                         <label className="block text-indigo-800 text-2xl font-semibold">Password:</label>
//                         <input
//                             type={showPassword ? "text" : "password"}
//                             className="w-full p-2 rounded mt-2 outline outline-indigo-800 text-indigo-800 font-semibold pr-10"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                         <span
//                             onClick={() => setShowPassword(!showPassword)}
//                             className="absolute right-3 top-12 cursor-pointer text-indigo-800"
//                         >
//                             {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                         </span>
//                     </div>
//                         <button type="submit" className="w-full bg-indigo-500 text-white p-2 rounded">
//                             Login
//                         </button>
//                     </form>
//                 )}

//                 {step === 'setNewPassword' && (
//                     <form onSubmit={handleSetPassword} className="space-y-4 mt-5">
//                         <div>
//                             <label className="block text-indigo-800 font-semibold text-1xl ">New Password:</label>
//                             <input
//                                 type="password"
//                                 className="w-full rounded-sm outline outline-indigo-800 mt-2 p-2 text-indigo-700 font-semibold"
//                                 value={newPassword}
//                                 onChange={(e) => setNewPassword(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-indigo-800 font-semibold text-1xl">Confirm Password:</label>
//                             <input
//                                 type="password"
//                                 className="w-fullrounded-sm outline outline-indigo-800 mt-2 p-2 text-indigo-700 font-semibold"
//                                 value={confirmPassword}
//                                 onChange={(e) => setConfirmPassword(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <button type="submit" className="w-full bg-indigo-500 text-white p-2 rounded">
//                             Save Password
//                         </button>
//                     </form>
//                 )}

//                 {message && <p className="mt-4 text-center text-red-500">{message}</p>}
//             </div>
//         </div>
//     );
// };

// export default Login;




import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [step, setStep] = useState('enterUserID');
    const [hasPassword, setHasPassword] = useState(false);
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();

    const handleUserIDSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/check-user-details`, { userID });

            if (response.data.hasPassword) {
                setHasPassword(true);
                setStep('enterPassword');
            } else {
                setHasPassword(false);
                setStep('setNewPassword');
            }
        } catch (error) {
            setMessage(error.response?.data?.error || 'Error checking user');
        }
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login-user-details`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userID, password }),
            });

            const data = await response.json();

            if (data.username) {
                localStorage.setItem(
                    "userDetails",
                    JSON.stringify({
                        message: "Login successful",
                        username: data.username,
                        userID: data.userID,
                        coins: data.coins
                    })
                );

                navigate("/dashboard");
            } else {
                setMessage("Login failed: Invalid credentials");
            }
        } catch (error) {
            console.error("Login Error:", error);
            setMessage("Login failed. Please try again.");
        }
    };

    const handleSetPassword = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/set-user-password`, {
                userID,
                newPassword,
                confirmPassword
            });

            setMessage('Password set successfully! Please login.');
            setStep('enterPassword');
            setPassword('');
        } catch (error) {
            setMessage(error.response?.data?.error || 'Failed to set password');
        }
    };

    return (
        <div className="place-items-center mt-72 p-5">
            <div>
                <h2 className="text-2xl font-bold text-indigo-800 ml-11">
                    {step === 'enterUserID' ? 'Enter User ID' :
                        step === 'enterPassword' ? 'Login' : 'Set New Password'}
                </h2>

                {/* Enter User ID */}
                {step === 'enterUserID' && (
                    <form onSubmit={handleUserIDSubmit}>
                        <div className='mt-6 space-x-5'>
                            <label className="text-indigo-800 font-semibold text-2xl">User ID:</label>
                            <input
                                type="text"
                                className="outline rounded-sm outline-indigo-800 p-2 text-indigo-600 font-semibold"
                                value={userID}
                                onChange={(e) => setUserID(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="w-52 ml-16 bg-indigo-500 text-white p-2 rounded mt-10">
                            Next
                        </button>
                    </form>
                )}

                {/* Login */}
                {step === 'enterPassword' && (
                    <form onSubmit={handleLogin} className="space-y-4 mt-7">
                        <div className="relative">
                            <label className="block text-indigo-800 text-2xl font-semibold">Password:</label>
                            <input
                                type={showLoginPassword ? "text" : "password"}
                                className="w-full p-2 rounded mt-2 outline outline-indigo-800 text-indigo-800 font-semibold pr-10"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span
                                onClick={() => setShowLoginPassword(!showLoginPassword)}
                                className="absolute right-3 top-12 cursor-pointer text-indigo-800"
                            >
                                {showLoginPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </span>
                        </div>
                        <button type="submit" className="w-full bg-indigo-500 text-white p-2 rounded">
                            Login
                        </button>
                    </form>
                )}

                {/* Set New Password */}
                {step === 'setNewPassword' && (
                    <form onSubmit={handleSetPassword} className="space-y-4 mt-5">
                        <div className="relative">
                            <label className="block text-indigo-800 font-semibold text-1xl">New Password:</label>
                            <input
                                type={showNewPassword ? "text" : "password"}
                                className="w-full rounded-sm outline outline-indigo-800 mt-2 p-2 text-indigo-700 font-semibold pr-10"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                            <span
                                onClick={() => setShowNewPassword(!showNewPassword)}
                                className="absolute right-3 top-12 cursor-pointer text-indigo-800"
                            >
                                {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </span>
                        </div>

                        <div className="relative">
                            <label className="block text-indigo-800 font-semibold text-1xl">Confirm Password:</label>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                className="w-full rounded-sm outline outline-indigo-800 mt-2 p-2 text-indigo-700 font-semibold pr-10"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <span
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-12 cursor-pointer text-indigo-800"
                            >
                                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </span>
                        </div>

                        <button type="submit" className="w-full bg-indigo-500 text-white p-2 rounded">
                            Save Password
                        </button>
                    </form>
                )}

                {message && <p className="mt-4 text-center text-red-500">{message}</p>}
            </div>
        </div>
    );
};

export default Login;
