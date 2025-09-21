import { useState } from "react";

export default function Friends() {
  const [friend, setFriend] = useState({
    name: "",
    image: null,
  });

  const handleNameChange = (e) => {
    setFriend({ ...friend, name: e.target.value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      const imageURL = URL.createObjectURL(imageFile);
      setFriend({ ...friend, image: imageURL });
    }
  };

  return (
    <section className="mt-10 bg-white shadow-lg px-6 py-6 rounded-2xl max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center bg-pink-300 text-white py-3 rounded-lg shadow">
        Friends
      </h2>

      <form className="mt-6 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter your name"
          value={friend.name}
          onChange={handleNameChange}
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />

        <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-pink-400">
          <span className="text-gray-500">Click to upload a photo</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>

        <div className="mt-6 flex flex-col items-center gap-3">
          {friend.name && (
            <p className="text-lg font-medium text-gray-700">{friend.name}</p>
          )}
          {friend.image && (
            <img
              src={friend.image}
              alt="Friend Uploaded"
              className="w-40 h-40 object-cover rounded-xl shadow-md border"
            />
          )}
        </div>
      </form>
    </section>
  );
}
