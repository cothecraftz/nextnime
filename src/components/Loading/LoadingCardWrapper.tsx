import LoadingCard from "./LoadingCard";

const LoadingCardWrapper = () => {
  return (
    <div className="grid-card">
      {Array.from({ length: 14 }).map((_, i) => (
        <LoadingCard key={i} />
      ))}
    </div>
  );
};

export default LoadingCardWrapper;
