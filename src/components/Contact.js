import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="pt-[150px] text-3xl font-semibold p-4 m-4">Contact Page</h1>
      <form>
        <input
          className="border border-black-500 m-2 p-2 rounded-lg"
          type="text"
          placeholder="name"
        />
        <input
          className="border border-black-500 m-2 p-2 rounded-lg"
          type="text"
          placeholder="number"
        />
        <button className="bg-red-200 rounded-lg m-2 p-1">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
