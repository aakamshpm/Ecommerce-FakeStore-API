import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth"; // ✅ Correct import
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../slices/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);

      const user = response.user;
      const idToken = await user.getIdToken();

      // set token and user details in local storage
      localStorage.setItem("token", idToken);
      localStorage.setItem(
        "user",
        JSON.stringify({ email: user.email, uid: user.uid })
      );

      dispatch(
        setCredentials({
          token: idToken,
          user: { email: user.email, uid: user.uid },
        })
      );

      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen font-[Poppins] flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md border border-black rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-black mb-6 text-center">
          Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-black mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm text-black mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-sm text-red-600 text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
