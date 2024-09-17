// import { OpenAI } from 'langchain/llms';

// const openai = new OpenAI({
//   modelName: 'gpt-4',
//   openAIApiKey: process.env.REACT_APP_OPENAI_API_KEY,
// });

// export const analyzeNewsArticle = async (text) => {
//   try {
//     const prompt = `
//       Analyze the following text and determine if it describes a disaster event. 
//       Provide details on the type of disaster, location, and severity:

//       "${text}"
//     `;
//     const response = await openai.call(prompt);
//     return response.text;
//   } catch (error) {
//     console.error("Error analyzing the article:", error);
//     return "Sorry, I couldn't analyze the article.";
//   }
// };
