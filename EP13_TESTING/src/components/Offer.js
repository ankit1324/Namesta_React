const Offer = () => {
  return (
    <>
      <div className="container bg-yellow-50 text-center">
        <h1 className="m-4 p-4 font-bold text-2xl">Offer</h1>
        <form action="">
          <input
            type="text"
            className="border border-black"
            placeholder="offer"
          />

          <button
            type="submit"
            className="ml-4 p-1 rounded-xl border border-black"
          >
            Submit
          </button>
          <input
            name="2"
            type=""
            className="border ml-2 border-black"
            placeholder="offers"
          />
        </form>
      </div>
    </>
  );
};

export default Offer;
