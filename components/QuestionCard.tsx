import React from 'react';
import LoadingSpinner from './icons/LoadingSpinner';
import ErrorIcon from './icons/ErrorIcon';

interface QuestionCardProps {
    question: string;
    isLoading: boolean;
    error: string | null;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, isLoading, error }) => {
    return (
        <div className="relative bg-white/80 backdrop-blur-sm shadow-2xl rounded-2xl p-8 min-h-[250px] flex items-center justify-center transition-all duration-500 ease-in-out">
            <div className="absolute top-4 left-4 text-4xl text-yellow-400 font-heading">“</div>
            <div className="absolute bottom-4 right-4 text-4xl text-yellow-400 font-heading">”</div>
            {isLoading && <LoadingSpinner />}
            {error && !isLoading && (
                <div className="text-center text-red-600">
                    <ErrorIcon className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-semibold text-lg">{error}</p>
                </div>
            )}
            {!isLoading && !error && question && (
                <p className="text-3xl md:text-4xl font-semibold text-gray-800 leading-relaxed px-4 break-keep">
                    {question}
                </p>
            )}
        </div>
    );
};

export default QuestionCard;
