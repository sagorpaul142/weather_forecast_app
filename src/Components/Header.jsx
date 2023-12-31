const Header = ({setQuery}) => {
  const cities = [
    {
      id: 1,
      title: 'Mymensingh'
    },
    {
      id: 2,
      title: 'Netrokona'
    },
    {
      id: 3,
      title: 'Khulna'
    },
    {
      id: 4,
      title: 'Rangpur'
    },
  ]
  return (
    <ul className="nav pt-3">
      {
        cities.map((city) => (
          <li className="nav-item" key={city.id}>
            <a
              className="nav-link cursor-pointer"
              aria-current="page"
              href={void 0}
              onClick={() => setQuery(city.title)}
            >
              {city.title}
            </a>
          </li>
        ))
      }

    </ul>
  );
};

export default Header;
