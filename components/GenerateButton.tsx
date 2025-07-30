import React from 'react';
import SparklesIcon from './icons/SparklesIcon';

interface GenerateButtonProps {
    onClick: () => void;
    isLoading: boolean;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({ onClick, isLoading }) => {
    return (
        <button
            onClick={onClick}
            disabled={isLoading}
            className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xl rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none font-heading"
        >
            <SparklesIcon className="w-6 h-6 mr-3" />
            {isLoading ? '생성 중...' : '새로운 질문 뽑기'}
        </button>
    );
};

export default GenerateButton;