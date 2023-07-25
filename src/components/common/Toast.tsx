import { useEffect } from "react";

interface ToastProps {
  type: string;
  message: string;
  ms?: number;
  clearMessage: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = "success",
  ms = 3000,
  clearMessage,
}) => {
  useEffect(() => {
    const timer = setTimeout(clearMessage, ms);

    return () => clearTimeout(timer);
  }, [clearMessage]);

  return (
    <div
      className={`absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
        type === "success" ? "bg-green-600" : "bg-red-700"
      } text-white py-2 px-4 rounded-md`}
    >
      {message}
    </div>
  );
};

export default Toast;
