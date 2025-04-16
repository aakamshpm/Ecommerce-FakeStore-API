import { useSelector } from "react-redux";

const MyAccount = () => {
  const { token, user } = useSelector((state) => state.auth);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 h-screen">
      <div className="bg-white p-6 rounded-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">My Account</h1>

        {token ? (
          <div className="text-gray-700">
            <p className="text-lg">Welcome,</p>
            <p className="text-xl font-semibold">{user.email}</p>
          </div>
        ) : (
          <p className="text-lg text-red-500">Not Logged In</p>
        )}
      </div>
    </div>
  );
};

export default MyAccount;
