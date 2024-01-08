import React, { useState } from "react";

const UseStateExample2 = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  const [user, setUser] = useState({ name: "", email: "" });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    // console.log({ name, email });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-400 p-10 mt-5 rounded-xl">
      <input
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        className="mx-4 p-2 rounded-lg"
        type="text"
        name="name"
        id="name"
        placeholder="Your Name"
      />
      <input
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="mx-4 p-2 rounded-lg"
        type="email"
        name="email"
        id="email"
        placeholder="E-mail"
      />
      <button className="btn-primary">Submit</button>
    </form>
  );
};

export default UseStateExample2;
