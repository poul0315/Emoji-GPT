import React from "react";

function Accordion() {
  return (
    <div className="max-w-xl w-full mt-36">
      <div className="flex justify-start flex-col divide-y ">
        <details>
          <summary className="question py-3 px-4 cursor-pointer select-none outline-none text-left">
            About Us
          </summary>
          <div className="flex flex-col space-y-6 max-w-xl w-full mt-5 text-left px-4">
            <p>
              At Caption to Emoji, we believe that communication should be fun,
              expressive, and inclusive. Our application useState the power of
              OpenAI API to transform plain text captions into vibrant and
              engaging emojis. With just a few clicks, you can enhance your
              messages, social media posts, or any other form of written
              communication with a touch of visual flair.
            </p>
            <p>
              Caption to Emoji isn&#39;t just about replacing words with
              pictures; it&#39;s about adding a new dimension to your
              communication. Emojis have become an integral part of modern
              conversations, allowing people to convey emotions and add personal
              touches to their messages. By converting your captions into
              emojis, you can make your texts more engaging, captivating, and
              even more memorable.
            </p>
            <p>
              Whether you&#39;re looking to spice up your social media posts,
              add a dash of humor to your chats, or simply express yourself in a
              unique way, Caption to Emoji is the perfect tool for you. It&#39;s
              incredibly easy to use, with an intuitive user interface that
              guides you through the process. Just enter your caption in the
              provided text box, click the &#39;Convert to Emoji&#39; button,
              and voila! Watch as your text is magically transformed into a
              collection of expressive emojis.
            </p>
            <p>
              Your privacy and data security are of utmost importance to us. We
              ensure that all user information and inputs are handled with the
              strictest confidentiality and adhere to our privacy policy. We do
              not store any personal data beyond what is necessary for the
              functioning of our application.
            </p>
            <p>
              So, what are you waiting for? Try Caption to Emoji today and
              unlock a whole new world of expressive communication. Let your
              words come to life with a splash of color and emotion, and make
              every message truly unforgettable. Start converting your captions
              to emojis now and let the fun begin!
            </p>
            <p>
              If you have any questions, feedback, or suggestions, please
              don&#39;t hesitate to reach out to us. We&#39;re here to make your
              experience with Caption to Emoji the best it can be.
            </p>
            <p>The Caption to Emoji Team</p>
          </div>
        </details>
        <details>
          <summary className="question py-3 px-4 cursor-pointer select-none text-left ">
            How to Use Caption2Emoji?
          </summary>
          <div className="flex flex-col space-y-6 max-w-xl w-full mt-5 text-left px-4">
            <p>
              How does Caption to Emoji work? It&#39;s simple! You provide us
              with a caption or text input, and our intelligent AI engine
              processes it using the state-of-the-art natural language
              processing algorithms. Our system then leverages the capabilities
              of the OpenAI API to analyze the context, sentiment, and emotions
              within your text. Based on this analysis, we generate a set of
              relevant and fitting emojis that capture the essence of your
              words.
            </p>
          </div>
        </details>
      </div>
    </div>
    //   <div className="flex flex-col space-y-6 max-w-xl w-full mt-10">

    //   </div>
  );
}

export default Accordion;
