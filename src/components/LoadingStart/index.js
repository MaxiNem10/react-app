const LoadingStart = ({ message }) => {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <div className="text-4xl">Идет загрузка!</div>
        <div>{message}</div>
        <img src="https://ruseller.com/lessons/les2559/images/free-gif-preloaders-psds-03.gif" alt="loading..." />
      </div>
    );
  };
  
  export default LoadingStart;
  