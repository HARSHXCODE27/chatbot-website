// import Link from 'next/link'; // Import Link

// export default function About() {
//   return (
//     <div className="text-center max-w-2xl">
//       <h2 className="text-3xl md:text-4xl font-bold mb-4">About Botshykya</h2>
//       <p className="text-lg mb-4">
//         Botshykya is a platform dedicated to showcasing the best chatbots for various use cases. We aim to connect creators and users through innovative chatbot solutions.
//       </p>
//       <p className="text-lg mb-4">
//         Founded in 2025, our mission is to make chatbot technology accessible and useful for everyone.
//       </p>
//       <Link
//         href="/"
//         className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
//       >
//         Back to Home
//       </Link>
//     </div>
//   );
// }


import Link from 'next/link';

export default function About() {
  return (
    <div className="text-center max-w-2xl bg-white text-black p-6 rounded-lg">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">About Botshykya</h2>
      <p className="text-lg mb-4">
        Botshykya is a platform dedicated to showcasing the best chatbots for various use cases. We aim to connect creators and users through innovative chatbot solutions.
      </p>
      <p className="text-lg mb-4">
        Founded in 2025, our mission is to make chatbot technology accessible and useful for everyone.
      </p>
      <Link
        href="/"
        className="inline-block bg-gray-200 hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded"
      >
        Back to Home
      </Link>
    </div>
  );
}