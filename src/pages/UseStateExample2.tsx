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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(user);
    const inputName = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [inputName]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-400 p-10 mt-5 rounded-xl">
      <input
        onChange={handleChange}
        className="mx-4 p-2 rounded-lg"
        type="text"
        name="name"
        id="name"
        placeholder="Your Name"
      />
      <input
        onChange={handleChange}
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
