import type { NextApiRequest, NextApiResponse } from 'next'
// import openai from '../../utils/openai'

// type Data = {
//   text: string;
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json({ name: 'John Doe '})
}

//   const response = await openai.createCompletion({
//     model: 'gpt-3.5-turbo',
//     messages: [
//       { role: "system", content: "You are a helpful assistant"},
//       { role: "user", content: "Hello?"},
//     ],
//     max_tokens: 50,
//     temperature: 0.8,
//   });

//   res.status(200).json(response.data.choices[0].message.content);
// }

// // api/chat shouldn't throw 404, but its throwing 404.

