const LoadingCard = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full aspect-[1/1.7] animate-pulse bg-gray-200 rounded-md" />
      <div className="bg-gray-200 w-full h-4 rounded-md mt-1 animate-pulse" />
      <div className="bg-gray-200 w-[70%] h-4 rounded-md mt-1 animate-pulse" />
    </div>
  );
};

export default LoadingCard;
