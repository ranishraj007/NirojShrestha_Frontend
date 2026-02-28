import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full animate-fade-in-up">
        <h1 className="text-9xl font-extrabold text-blue-600 tracking-tight">404</h1>
        <div className="bg-white rounded-2xl shadow-xl p-10 mt-8 border border-gray-100 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-blue-400 to-blue-600"></div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            This Page is Under Construction
          </p>
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 gap-2 cursor-pointer shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <Home size={20} />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
