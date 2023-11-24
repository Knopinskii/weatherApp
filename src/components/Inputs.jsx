import { UilSearch } from "@iconscout/react-unicons";

// eslint-disable-next-line react/prop-types
function Inputs({ setCity, searchWeather }) {
  return (
    <div className="flex flex-row justify-center my-6 ">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search for city..."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none rounded-lg"
          onChange={(e) => {
            setCity(e.target.value);
            console.log(e.target.value);
          }}
        ></input>
        <button onClick={searchWeather}>
          <UilSearch
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
          />
        </button>
      </div>
    </div>
  );
}

export default Inputs;
