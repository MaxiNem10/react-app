const LoadingStart = ({ message }) => {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <div className="text-4xl">Идет загрузка!</div>
        <div>{message}</div>
        <img src="C:/Education/new-react-version-app/public/gif/d11.gif" alt="loading..." />
      </div>
    );
  };
  
  export default LoadingStart;