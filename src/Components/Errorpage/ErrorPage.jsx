import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-gray-200 px-6">
      {/* Animated Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <AlertTriangle className="w-20 h-20 text-amber-500" />
      </motion.div>

      {/* Error Code */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-7xl font-extrabold text-gray-800 mb-4"
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg md:text-xl text-gray-600 text-center max-w-md mb-8"
      >
        Oops! The page you are looking for doesn’t exist. It might have been
        moved or deleted.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <Link
          to="/"
          className="px-6 py-3 rounded-2xl bg-amber-500 text-white font-semibold shadow-lg hover:bg-amber-600 transition-all duration-300"
        >
          ⬅ Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default ErrorPage;
