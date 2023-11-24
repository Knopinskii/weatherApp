/* eslint-disable react/prop-types */
import { DateTime } from "luxon";

function LocoTIme({ weatherData }) {
  const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

  return (
    <div>
      <div className="flex items-center justify-center my-4">
        <p className="text-white font-extralight text-xl">
          {formatToLocalTime(weatherData.timezone, weatherData.dt)}
        </p>
      </div>

      <div className="flex items-center justify-center my-6">
        <p className="text-white font-medium text-3xl">
          {weatherData.name} {weatherData.country}
        </p>
      </div>
    </div>
  );
}

export default LocoTIme;
