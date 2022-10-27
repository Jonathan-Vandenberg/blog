import { useEffect, useState } from "react";
import { useAddUserMessageMutation } from "../types";
import { motion, useAnimationControls } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [addUserMessage] = useAddUserMessageMutation();

  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setTimeout(() => setSubmitted(false), 2000);
  }, [submitted]);

  let form = {
    variables: {
      input: {
        id: uuidv4(),
        name: name,
        email: email,
        message: message,
      },
    },
  };

  const onFinish = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    function sendForm() {
      if (name !== "" && email !== "" && message !== "") {
        addUserMessage(form), setSubmitted(true);
      }
    }

    sendForm();

    setName("");
    setMessage("");
    setEmail("");
  };

  const controls = useAnimationControls();

  function clickAnimation() {
    controls.start({ x: 115 });
  }

  return (
    <div className="max-w-[678px] md:max-w-[900px] mx-auto flex flex-col items-center juistify-center container">
      <form onSubmit={onFinish} className="space-y-3 pb-12 w-full">
        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-3">
          <input
            required
            id="name"
            value={name as string}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-3">
          <input
            required
            id="email"
            value={email as string}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>

        <div className="px-8 flex items-start space-y-3 justify-center flex-col pt-3">
          <input
            required
            id="message"
            value={message as string}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            className="border-2 border-gray-200 p-3 rounded-xl w-full"
          />
        </div>
        <motion.div
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center border-green-600 pt-10"
        >
          <button
            type="submit"
            className={`px-16 text-gray-800 py-3 relative text-sm border-2 font-semibold border-gray-800 ${
              submitted
                ? "border-gray-300 text-gray-300"
                : "border-gray-800 text-gray-800"
            }`}
            onClick={() => {
              clickAnimation();
            }}
          >
            <motion.span
              animate={controls}
              initial={{ x: 0 }}
              transition={{
                repeat: 1,
                repeatType: "reverse",
                duration: 1,
              }}
              className="absolute -top-1 left-4 z-10 bg-white w-2 h-2"
            />
            <motion.span
              animate={controls}
              initial={{ x: 0 }}
              transition={{
                repeat: 1,
                repeatType: "reverse",
                duration: 1,
              }}
              className="absolute -top-1 left-8 z-10 bg-white w-2 h-2"
            />
            {submitted ? <p>Sent</p> : <p>Send</p>}
          </button>
        </motion.div>
      </form>
    </div>
  );
};

export default App;
