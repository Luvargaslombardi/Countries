import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActivities } from "../../redux/actions";
import validation from "./validation";
import Navbar from "../../components/NavBar/navbar";
import { getCountries } from "../../redux/actions";

export default function Form() {
  const allCountries = useSelector((state) => state.allCountries);
  const dispatch = useDispatch();

  const [activitie, setActivitie] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryId: [],
  });

  const [error, setError] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    let newValue = value;

    if (name === "name") {
      newValue = value.toLowerCase();
    } else if (name === "duration" || name === "difficulty") {
      newValue = parseFloat(value);
    }

    setActivitie({
      ...activitie,
      [name]: newValue,
    });

    setError(
      validation({
        ...activitie,
        [name]: newValue,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postActivities(activitie));
    setActivitie({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countryId: [],
    });
    window.alert("Activity successfully created");
  };

  const handleCheck = (event) => {
    const checkCountry = event.target.value;
    if (activitie.countryId.includes(checkCountry)) {
      const nuevaCountryId = activitie.countryId.filter(
        (id) => id !== checkCountry
      );
      setActivitie({ ...activitie, countryId: nuevaCountryId });
    } else {
      setActivitie({
        ...activitie,
        countryId: [...activitie.countryId, checkCountry],
      });
    }
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name: </label>
            <input
              name="name"
              onChange={handleChange}
              value={activitie.name}
              placeholder="Name of the Activity.."
            />
            <p>{error.name && error.name}</p>
          </div>
          <div>
            <label>Difficulty: </label>
            <select onChange={handleChange} name="difficulty">
              <option value="0">None</option>
              <option value="1">Very Easy</option>
              <option value="2">Easy</option>
              <option value="3">Moderate</option>
              <option value="4">Difficult</option>
              <option value="5">Very Difficult</option>
            </select>
            <p>{error.difficulty && error.difficulty}</p>
          </div>
          <div>
            <label>Duration: </label>
            <input
              placeholder="Duration in hours.."
              name="duration"
              onChange={handleChange}
              value={activitie.duration}
            />
            <p>{error.duration && error.duration}</p>
          </div>
          <div>
            <label>Season: </label>
            <select onChange={handleChange} name="season">
              <option>None</option>
              <option value="Summer">Summer</option>
              <option value="Winter">Winter</option>
              <option value="Fall">Fall</option>
              <option value="Spring">Spring</option>
            </select>
            <p>{error.season && error.season}</p>
          </div>
          <div>
            <label>Country: </label>
            <fieldset>
              {allCountries
                ?.sort((a, b) => a.name.localeCompare(b.name))
                .map((country) => (
                  <label key={country.id}>
                    <input
                      type="checkbox"
                      onChange={(e) => handleCheck(e)}
                      name={country.name}
                      value={country.id}
                      checked={activitie.countryId.includes(country.id)}
                    />
                    {country.name}
                  </label>
                ))}
            </fieldset>
            <p>{error.countryId && error.countryId}</p>
          </div>
          {Object.keys(error).length > 0 ||
          activitie.countryId.length === 0 ? null : (
            <button type="submit">Submit</button>
          )}
        </form>
      </div>
    </>
  );
}
