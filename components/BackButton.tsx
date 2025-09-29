import React from 'react';
import { Link } from 'react-router-dom';

interface BackButtonProps {
  to?: string;
  text?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ to = '/', text = 'Back to Home' }) => {
  return (
    <Link to={to} className="text-sm text-gray-400 hover:text-white transition-colors duration-300 inline-block mb-8">
      <i className="fa-solid fa-arrow-left mr-2"></i>
      {text}
    </Link>
  );
};

export default BackButton;
