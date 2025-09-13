import { useState } from "react";
import Image from "./Image";
import ContactInfo from "./ContactInfo";
import DavonnesInterests from "./DavonnesInterests";

export default function AboutMe() {
  const [user, setUser] = useState({
    name: "Davonne Vigil",
    gender: "Female",
    age: 31,
    city: "Arlington",
    state: "Texas",
    country: "United States",
    image: "./images/davonne.png",
  });

  const todaysDate = new Date().toLocaleDateString();

  return (
    <section className="p-8 w-full">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-3xl">{user.name}</h1>
          <Image image={user.image} className="max-w-xs rounded-xl" />
        </div>

        <div className="flex flex-col max-w-lg md:mt-12">
          <p>{user.gender}</p>
          <p>{user.age} years old</p>
          <br />
          <p>{user.city}</p>
          <p>{user.state}</p>
          <p>{user.country}</p>
          <br />

          <p>Last Login: {todaysDate}</p>
        </div>
      </div>
      <ContactInfo />
      <DavonnesInterests />
    </section>
  );
}
