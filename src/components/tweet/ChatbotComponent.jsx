// import React, { useState } from 'react';
// import { analyzeNewsArticle } from '../../langchain';

// const ChatbotComponent = () => {
//   const [userInput, setUserInput] = useState('');
//   const [response, setResponse] = useState('');

//   const handleInputChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   const handleSend = async () => {
//     const result = await analyzeNewsArticle(userInput);
//     setResponse(result);
//   };

//   return (
//     <div className="p-4 w-full bg-gray-100 flex flex-col gap-4">
//       <textarea
//         value={userInput}
//         onChange={handleInputChange}
//         placeholder="Paste a news article..."
//         className="p-2 border rounded w-full"
//       />
//       <button onClick={handleSend} className="px-4 py-2 bg-blue-500 text-white rounded">
//         Analyze Article
//       </button>
//       {response && (
//         <div className="bg-white p-4 shadow rounded">
//           <h3 className="font-semibold">Analysis Result</h3>
//           <p>{response}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatbotComponent;
