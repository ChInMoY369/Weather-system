const ErrorMessage = ({ message }) => {
  if (!message) return null;
  
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative w-full max-w-md mb-6 dark:bg-red-900 dark:border-red-800 dark:text-red-200" role="alert">
      <strong className="font-bold mr-1">Error:</strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

export default ErrorMessage; 