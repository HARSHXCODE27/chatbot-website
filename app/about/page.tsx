// export const metadata = {
//   title: 'About Us - Botshyka',
//   description: 'Learn about the Botshyka chatbot platform.',
// };

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen px-8 py-12">
//       <h1 className="text-4xl font-bold mb-4">About Botshyka</h1>
//       <p>Welcome to our intelligent chatbot experience.</p>
//     </div>
//   );
// }

export default function About() {
  return (
    <div className="text-center max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">About Botshykya</h2>
      <p className="text-lg mb-4">
        Botshykya is a platform dedicated to showcasing the best chatbots for various use cases. We aim to connect creators and users through innovative chatbot solutions.
      </p>
      <p className="text-lg mb-4">
        Founded in 2025, our mission is to make chatbot technology accessible and useful for everyone.
      </p>
      <a
        href="/"
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Back to Home
      </a>
    </div>
  );
}