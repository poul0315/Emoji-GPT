import openai from '../../utils/openai';
import Image from 'next/image'

type Data = {
  name: string,
}

export default async function Home() {
  return (
    <body className="prompt">
      "prompt": "who's Bruce Lee."
    </body>
  )
}
