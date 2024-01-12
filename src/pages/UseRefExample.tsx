import { useEffect, useRef } from "react";
import CustomInput from "../Components/CustomInput";

const UseRefExample = () => {
  const myRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    myRef.current?.focus();
  }, []);
  return (
    <div className="p-10 bg-slate-300 rounded-xl">
      <h1 className="text-3xl my-4">useRef</h1>
      <form className="p-10 border rounded-lg">
        <CustomInput
          ref={myRef}
          className="border border-blue-400 p-3  rounded-md mx-2"
        ></CustomInput>
        <button className="btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default UseRefExample;
