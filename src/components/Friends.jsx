import { useState, useEffect } from "react";

export default function Friends() {
  const [friends, setFriends] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    image: null,
  });
  const [imageUpdated, setImageUpdated] = useState(false);

  // Load saved friends from localStorage
  useEffect(() => {
    const savedFriends = localStorage.getItem("friends");
    if (savedFriends) {
      setFriends(JSON.parse(savedFriends));
    }
  }, []);

  // Save friends list whenever it changes
  useEffect(() => {
    if (friends.length > 0) {
      localStorage.setItem("friends", JSON.stringify(friends));
    }
  }, [friends]);

  const handleNameChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, image: reader.result });
        setImageUpdated(true);
        setTimeout(() => setImageUpdated(false), 5000);
      };
      reader.readAsDataURL(imageFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //limit 2 images
    if (friends.length >= 2) {
      alert("You can only add up to 2 friends, working on the logic!");
      setFriends([]);
      setFormData({ name: "", image: null });
      localStorage.removeItem("friends");
      return;
    }

    if (!formData.name || !formData.image) return; // require both fields

    setFriends([...friends, formData]); // add new friend
    setFormData({ name: "", image: null }); // clear form
  };

  return (
    <section className="mt-10 bg-white shadow-lg px-6 py-6 rounded-2xl max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center bg-pink-300 text-white py-3 rounded-lg shadow">
        Friends
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter your friend's name"
          value={formData.name}
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

        {imageUpdated && (
          <p className="text-green-600 text-sm font-medium text-center">
            Image updated ✅
          </p>
        )}

        <button
          type="submit"
          className="bg-pink-400 text-white py-2 px-4 rounded-lg font-medium hover:bg-pink-500 transition"
        >
          Save Friend
        </button>
      </form>

      {/* Show Friends List */}
      {friends.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {friends.map((f, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-50 rounded-lg shadow p-4"
            >
              <p className="text-lg font-medium text-gray-700">{f.name}</p>
              <img
                src={f.image}
                alt={`${f.name}'s upload`}
                className="w-32 h-32 object-cover rounded-xl shadow-md border mt-2"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-6 text-gray-400 text-center">
          No friends saved yet. Add one above!
        </p>
      )}

      {friends.length > 0 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => {
              setFriends([]);
              localStorage.removeItem("friends");
            }}
            className="bg-pink-300 text-white py-2 px-4 rounded-lg font-medium hover:bg-pink-500 transition-all duration-300"
          >
            Clear Friends
          </button>
        </div>
      )}
    </section>
  );
}
