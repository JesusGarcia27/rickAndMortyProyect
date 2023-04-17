import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Location from "./components/Location";
import ResidentList from "./components/ResidentList";
import { getRandomDimension } from "./helpers/random";

function App() {

  const [location, setLocation] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.locationId.value

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`;

    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/location/${getRandomDimension()}`;

    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <div className="App max-h-min bg-[url('/public/images/bg.png')]  bg-cover">
      <div className="w-full bg-cover ">
      <form onSubmit={handleSubmit}>
        <div className=" text-center border-solid border-3 border-[#8EFF8B] ">
          <div className="flex min-h-0 justify-center">
          
            <img className=" h-1/5  bg-cover opacity-25 " src="/public/images/Ellipse.png" alt="" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 ">
              <img className="max-w-5xl sm:max-w-7xl " src="/public/images/img4.png" alt="" />
              <div className="flex justify-center">
                <img className=" " src="/public/images/img3.png" alt="" />
              </div>
            </div>
          
          </div>
          <input id="locationId"
            placeholder="Type a location id ..."
            className="border-solid border-2 border-[#8EFF8B] rounded-md bg-gray-500 opacity-40 shadow-lg shadow-[#8EFF8B]/70 text-white"
            type="text"
          />
          <button className="px-4 bg-[#23b81ecc] text-white shadow-lg shadow-[#8EFF8B]/70 rounded-sm ">
            Search <i className='bx bx-search px-1 bg'></i>
          </button>
        </div>

        <h2 className="text-center text-3xl p-10 text-[#8EFF8B] sm:text-4xl ">Welcome to the crazy universe!</h2>
      </form>
      <Location location={location} />
      <ResidentList location={location} />
      </div>
    </div>
    </>
  );
}

export default App;
