import type { NextApiRequest, NextApiResponse } from 'next'
import openai from '../../utils/openai'

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  const completion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: 'Say hi back to me.',
      },
    ],
    max_tokens: 50,
    temperature: 0.8,
  });

  const response = completion.data.choices[0].message.content;

  res.status(200).json({ response });

  // res.status(200).json({ pageName: "Home Page"});
;}
