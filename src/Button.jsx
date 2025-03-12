// import './button.css'
function Button() {
  // const styles={
  //     backgroundColor: "hsl(200, 100%, 50%)",
  //     color:"white",
  //     padding: "10px 20px",
  //     borderRadius: "5px",
  //     border: "none",
  //     cursor: "pointer",
  // }

  //flex
  //   return (
  //     <div className="parent">
  //       <div>Header</div>
  //       <div className="flex items-baseline ...">
  //         <div className="bg-sky-500 pt-2 pb-6">01</div>
  //         <div className="bg-amber-500 pt-8 pb-12">02</div>
  //         <div className="bg-green-500  pt-12 pb-4">03</div>
  //       </div>
  //     </div>
  //   );
  //grid
  //   return (
  //     <div className="min-h-screen text-white Parent bg-slate-900">
  //       <div className="container mx-auto"></div>
  //       <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-4 p-4">
  //         <div className="bg-sky-500 p-6 rounded-lg">1</div>
  //         <div className="bg-sky-500 p-6 rounded-lg">2</div>
  //         <div className="bg-sky-500 p-6 rounded-lg">3</div>
  //         <div className="col-span-2 bg-red-500 p-6 rounded-lg">4</div>
  //         <div className="bg-sky-500 p-6 rounded-lg">5</div>
  //         <div className="bg-sky-500 p-6 rounded-lg">6</div>
  //       </div>
  //     </div>
  //   );
  return (
    <button className=" cursor-pointer border-2 p-2 rounded-2xl bg-gray-300">
      Click me
    </button>
  );
}
export default Button;
