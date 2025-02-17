import React from "react";

interface ButtonProps {
    text?: string;
    icon?: string;
    onClick?: () => void;
}

const Button = ({ text, icon, onClick }: ButtonProps) => {
    return (
        <button 
            onClick={onClick} 
            className="w-full flex items-center justify-center gap-2 py-3 px-4 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md"
        >
            {icon && <img className="w-5 h-5 object-cover" src={icon} alt={text || "icon"} />}
            {text && <span className="font-medium">{text}</span>}
        </button>
    );
};

export default Button;