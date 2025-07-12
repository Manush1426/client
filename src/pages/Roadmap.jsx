import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { roadmaps } from './roadmaps';
import { quizzes } from './quizzes';
import Navbar from '../components/Navbar';

const Roadmap = () => {
  const { name } = useParams();
  const steps = roadmaps[name];
  const hasQuiz = !!quizzes[name];

  if (!steps) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-2xl">No roadmap found for this topic.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center py-10 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">{name} Roadmap</h1>
        {hasQuiz && (
          <Link
            to={`/quiz/${encodeURIComponent(name)}`}
            className="mb-8 inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors"
          >
            Take Quiz
          </Link>
        )}
        <div className="w-full max-w-2xl space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-slate-800 rounded-xl p-6 shadow flex flex-col gap-2">
              <div className="font-bold text-lg">{step.title}</div>
              <div className="text-slate-300">{step.description}</div>
              {step.resource && (
                <a
                  href={step.resource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline mt-1"
                >
                  Official Resource
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
