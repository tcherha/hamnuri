
import React, { useState, useEffect, useCallback } from 'react';
import { generateIcebreakerQuestion } from './services/geminiService';
import QuestionCard from './components/QuestionCard';
import GenerateButton from './components/GenerateButton';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [question, setQuestion] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchQuestion = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const newQuestion = await generateIcebreakerQuestion();
      setQuestion(newQuestion);
    } catch (err) {
      setError('질문을 가져오는 데 실패했습니다. 잠시 후 다시 시도해주세요.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-yellow-50 to-orange-100 font-sans">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-2xl text-center">
          <QuestionCard question={question} isLoading={isLoading} error={error} />
          <div className="mt-12 flex justify-center">
            <GenerateButton onClick={fetchQuestion} isLoading={isLoading} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
