import React from 'react';

const UserSection = () => {
  return (
    <div className=" max-w-7xl mx-auto px-8 grid grid-cols-2 min-h-[570px] gap-5 ">
      <div className="card-1 flex flex-col gap-1 bg-[#F5F5F5] rounded-3xl p-5">
        <h4>USD Bloom in Action</h4>
        <h1 className="text-5xl font-semibold">Use Cases</h1>
        <p className="mt-3 max-w-[500px] text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
          excepturi minus mollitia rem repellendus quia explicabo praesentium
          aspernatur perferendis tempore!
        </p>
      </div>
      <div className="card-2 bg-[#FDFDFF] rounded-3xl p-5">
        <h2 className="text-4xl font-semibold">Business</h2>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          numquam cumque maiores distinctio consequuntur. Error quisquam cum
          aliquid quis tenetur.
        </p>
        <button className="mt-5 px-4 py-2 bg-[#8f8888] rounded-3xl font-semibold text-white">
          → Learn More
        </button>
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="h-80 w-full mt-7 rounded-3xl"
        />
      </div>
    </div>
  );
};

export default UserSection;
