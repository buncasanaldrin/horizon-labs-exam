const Spinner: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-gray-800 bg-opacity-30 flex justify-center items-center z-50">
      <div
        className="w-16 h-16 border-t-4 border-tanhide rounded-full animate-spin"
        data-testid="spinner"
      />
    </div>
  );
};

export default Spinner;
