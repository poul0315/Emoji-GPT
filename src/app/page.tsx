import openai from '../../utils/openai';
import Image from 'next/image'

type Data = {
  name: string,
}

export default async function Home() {
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: "I want you to translate the sentences I wrote into emojis. " +
     "I will write the sentence, and you will express it with emojis. " + 
     "I just want you to express it with emojis. I don't want you to reply with anything but emoji. " + 
     "When I need to tell you something in English, I will do it by wrapping it in curly brackets like {like this}"
  });

  return (
    <div>
      
    </div>
  )
}
