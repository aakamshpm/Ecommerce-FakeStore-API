const Error = ({ error }) => {
  console.log(error);
  return (
    <div className="flex flex-col items-center justify-center h-full py-10 text-center">
      <h2 className="text-xl font-semibold text-red-600 mb-2">
        Something went wrong
      </h2>
      <p className="text-sm text-gray-700 bg-gray-100 px-4 py-2 rounded">
        {error?.message || error?.data?.message || "Unknown error occurred."}
      </p>
    </div>
  );
};

export default Error;
