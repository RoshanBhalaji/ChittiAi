import axios from 'axios';
import React, { useState } from 'react';

const Content = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  async function getAnswer() {
    if (!question.trim()) {
      setAnswer('Please enter a valid question.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBmADlaGetpoKH0C0CAEJy201HGaqy5nHU",
        method: 'post',
        data: { "contents": [{ "parts": [{ "text": question }] }] }
      });

      let result = response.data.candidates[0].content.parts[0].text;
      console.log(result);
      setAnswer(result);
    } catch (error) {
      console.error('Error fetching the answer:', error);
      setAnswer('An error occurred while fetching the answer.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center py-8"> {/* Dark background, centered content */}
      <div className="max-w-2xl w-full md:w-3/4 lg:w-1/2 bg-white rounded-lg shadow-lg p-8"> {/* Increased main container size */}
        <h1 className="text-3xl font-bold mb-4  text-gray-900 ">AI Chat Assistant</h1> {/* Title */}
        <textarea
          cols={10}
          rows={6}
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none mb-4" // Text area for input
          placeholder="Enter your question here..."
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          className="w-full bg-gray-900  text-white py-2 rounded-lg shadow hover:bg-gray-00 transition-colors duration-300 mb-4" // Submit button
          onClick={getAnswer}
        >
          Submit
        </button>
        <div className="border text-lg font-pops font-bold border-gray-300 rounded-lg p-8 bg-gray-100 overflow-x-auto max-h-84"> {/* Result container with horizontal scroll */}
          {loading ? (
            <p className='text-gray-800'>Loading results...</p>  
          ) : (
            <p className='text-gray-800 break-words tracking-wide typewriter text-xs'>{answer ? answer : "No results yet."}</p>  
          )}
        </div>
      </div>
    </div>
  );
};

export default Content;
