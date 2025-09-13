import React from "react";

export default function MyStory() {
  const myStory = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed cursus lectus. Phasellus faucibus eget magna at vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget mollis sem. Etiam tempus suscipit sagittis. Suspendisse tempor est non ipsum dictum interdum. Duis nec eros nunc. Integer velit nisi`;
  return (
    <section className="w-full mt-8">
      <h2 className="bg-blue-400 text-xl w-full font-mono mb-4 p-2">
        From Sales to Coding
      </h2>

      <h3 className="font-mono text-xl">About Me:</h3>
      <p>{myStory}</p>

      <div className="mt-8">
        <h3 className="font-mono text-xl">Education:</h3>
        <p>{myStory}</p>
      </div>

      <div className="mt-8">
        <h3 className="font-mono text-xl">Goals:</h3>
        <p>{myStory}</p>
      </div>
    </section>
  );
}
