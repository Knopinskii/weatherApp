/* eslint-disable react/prop-types */
function TopButtons({ setCity }) {
  const cities = [
    { title: "London", id: 1 },
    { title: "Paris", id: 2 },
    { title: "Helsinki", id: 3 },
    { title: "Saint-Petersburg", id: 4 },
    { title: "New-York", id: 5 },
  ];
  return (
    <div className="flex items-center justify-around my-4">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium transition ease-out hover:scale-125"
          onClick={() => setCity({ title: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
