// import Link from 'next/link'; // Import Link

// export default function Home() {
//   return (
//     <div className="text-center">
//       <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Botshykya</h2>
//       <p className="text-lg md:text-xl mb-6">Your smart chatbot showcase platform.</p>
//       <Link
//         href="/about"
//         className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
//       >
//         Learn More About Us
//       </Link>
//     </div>
//   );
// }



import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Botshykya</h2>
      <p className="text-lg md:text-xl mb-6">Your smart chatbot showcase platform.</p>
      <Link
        href="/about"
        className="inline-block bg-gray-200 hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded"
      >
        Learn More About Us
      </Link>
    </div>
  );
}