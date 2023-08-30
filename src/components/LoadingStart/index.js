const LoadingStart = ({ message }) => {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <div className="text-4xl">Loading in progress!</div>
        <div>{message}</div>
        <img src="/public/gif/d11.gif" alt="loading..." />
      </div>
    );
  };
  
  export default LoadingStart;