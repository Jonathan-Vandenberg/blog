import { motion, useAnimationControls } from "framer-motion";

export default function App({
  content,
  handleAddMorePosts,
  disable,
}: {
  content: string;
  handleAddMorePosts: () => void;
  disable: boolean;
}) {
  const controls = useAnimationControls();

  function clickAnimation() {
    controls.start({ x: 115 });
  }

  return (
    <div className="flex justify-center">
      <button
        type="button"
        className={`px-6 py-3 relative text-sm border-2 font-semibold ${
          disable
            ? "text-gray-300 border-gray-300"
            : "text - gray - 700 border-gray-600"
        }`}
        onClick={() => {
          clickAnimation();
          handleAddMorePosts();
        }}
        disabled={disable}
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
        {content}
      </button>
    </div>
  );
}
