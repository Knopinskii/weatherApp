/* eslint-disable react/prop-types */
import { UilCelsius } from "@iconscout/react-unicons";
import { UilTemperatureHalf } from "@iconscout/react-unicons";
import { UilTear } from "@iconscout/react-unicons";
import { UilWind } from "@iconscout/react-unicons";

// eslint-disable-next-line react/prop-types
function TempDetails({ weatherData }) {
  return (
    <div>
      <div className="flex justify-center items-center py-6 text-center text-cyan-300 ">
        <p>{weatherData.description}</p>
      </div>

      <div className="flex flex-row justify-between items-center py-3 text-white ">
        <div className="flex justify-center items-center">
          <p className="text-5xl">{weatherData.temp}</p>
          <UilCelsius size={47} />
        </div>

        <div className="flex flex-col ">
          <div className="flex font-light text-m justify-center items-center">
            <UilTemperatureHalf size={20} className="mr-1" />
            Real feel:
            <span>{weatherData.feels}</span>
            <UilCelsius size={14} />
          </div>

          <div className="flex font-light text-m justify-center items-center">
            <UilTear size={20} className="mr-1" />
            Humidity:
            <span>{weatherData.humidity}%</span>
          </div>
          <div className="flex font-light text-m justify-center items-center">
            <UilWind size={20} className="mr-1" />
            Wind:
            <span>{weatherData.wind} km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TempDetails;
