import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Friends() {
  const MAX_FRIENDS = 6;
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
    if (friends.length === 0) return;

    // Try to save, and if quota is exceeded, remove oldest friend and retry up to 3 times
    const trySave = (arr, attempts = 3) => {
      try {
        localStorage.setItem("friends", JSON.stringify(arr));
        return true;
      } catch (err) {
        // QuotaExceededError handling
        const isQuota =
          err &&
          (err.name === "QuotaExceededError" ||
            err.code === 22 ||
            err.code === 1014);
        if (isQuota && arr.length > 0 && attempts > 0) {
          // remove oldest entry and retry
          const newArr = arr.slice(1);
          setFriends(newArr);
          return trySave(newArr, attempts - 1);
        }
        console.error("Failed to save friends to localStorage:", err);
        toast.error("Could not save friend: storage full.");
        return false;
      }
    };

    trySave(friends, 3);
  }, [friends]);

  const handleNameChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    if (imageFile) {
      // Compress image using canvas to reduce storage size before saving as data URL
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          const MAX_WIDTH = 900;
          const MAX_HEIGHT = 900;
          let width = img.width;
          let height = img.height;

          if (width > MAX_WIDTH) {
            height = Math.round((height * MAX_WIDTH) / width);
            width = MAX_WIDTH;
          }
          if (height > MAX_HEIGHT) {
            width = Math.round((width * MAX_HEIGHT) / height);
            height = MAX_HEIGHT;
          }

          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);

          // quality 0.7 to reduce size; change to 0.8 if you want better quality
          const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.7);
          setFormData({ ...formData, image: compressedDataUrl });
          setImageUpdated(true);
          setTimeout(() => setImageUpdated(false), 5000);
        };
        img.onerror = (err) => {
          console.error("Image load error:", err);
          // fallback: use original data url
          setFormData({ ...formData, image: reader.result });
          setImageUpdated(true);
          setTimeout(() => setImageUpdated(false), 5000);
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(imageFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // limit number of friends
    if (friends.length >= MAX_FRIENDS) {
      toast.info(
        `Thank you so much for being my friend..! Can only add up to ${MAX_FRIENDS} friends at this time.`,
        {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      // do not clear previous friends; just prevent adding more
      setFormData({ name: "", image: null });
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
          placeholder="Enter your name"
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
      <ToastContainer />
    </section>
  );
}
