import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActivities, getCountries } from "../../redux/actions";
import validation from "./validation";
import Navbar from "../../components/NavBar/navbar";
import styles from "./form.module.css";
//importo lo de react, los estilos, las funciones y los componentes

export default function Form() {
  const allCountries = useSelector((state) => state.allCountries);
  const dispatch = useDispatch();
  //obtengo  la info de los paises y defino la función dispatch para interactuar con el almacenamiento de Redux

  const [activitie, setActivitie] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryId: [],
  });
  //Defino el estado inicial de las actividades y sus propiedades

  const [error, setError] = useState({});
  //el estado error para cuando hay errores de validación

  const handleChange = (event) => {
    const { name, value } = event.target;
    let newValue = value;
    //para manejar los cambios en el formulario y validarlos para actualizarlo como actividad o error como lo defino aqui en lo que sigue

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
  //el handleSubmit es para enviar la actividad al servidor con postActivities y tambien muestra el caso de exito

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
  //para seleccionar o sacar la seleccion

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);
  //para cargar la lista de paises una vez que se monta el componente
  return (
    <>
      <Navbar />
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div>
            <label className={styles.formLabel}>Name:</label>
            <input
              className={styles.formInput}
              name="name"
              onChange={handleChange}
              value={activitie.name}
              placeholder="Name of the Activity.."
            />
            <p className={styles.formErrorMessage}>
              {error.name && error.name}
            </p>
          </div>
          <div>
            <label className={styles.formLabel}>Difficulty:</label>
            <select
              className={styles.formSelect}
              onChange={handleChange}
              name="difficulty"
            >
              <option value="0">None</option>
              <option value="1">Very Easy</option>
              <option value="2">Easy</option>
              <option value="3">Moderate</option>
              <option value="4">Difficult</option>
              <option value="5">Very Difficult</option>
            </select>
            <p className={styles.formErrorMessage}>
              {error.difficulty && error.difficulty}
            </p>
          </div>
          <div>
            <label className={styles.formLabel}>Duration:</label>
            <input
              className={styles.formInput}
              placeholder="Duration in hours.."
              name="duration"
              onChange={handleChange}
              value={activitie.duration}
            />
            <p className={styles.formErrorMessage}>
              {error.duration && error.duration}
            </p>
          </div>
          <div>
            <label className={styles.formLabel}>Season:</label>
            <select
              className={styles.formSelect}
              onChange={handleChange}
              name="season"
            >
              <option>None</option>
              <option value="Summer">Summer</option>
              <option value="Winter">Winter</option>
              <option value="Fall">Fall</option>
              <option value="Spring">Spring</option>
            </select>
            <p className={styles.formErrorMessage}>
              {error.season && error.season}
            </p>
          </div>
          <div>
            <label className={styles.formLabel}>Country:</label>
            <fieldset className={styles.formFieldset}>
              {allCountries
                ?.sort((a, b) => a.name.localeCompare(b.name))
                .map((country) => (
                  <label key={country.id} className={styles.formCheckboxLabel}>
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
            <p className={styles.formErrorMessage}>
              {error.countryId && error.countryId}
            </p>
          </div>
          {Object.keys(error).length > 0 || activitie.countryId.length === 0 ? (
            <button className={styles.formSubmitButtonDisabled} type="submit">
              Submit
            </button>
          ) : (
            <button className={styles.formSubmitButton} type="submit">
              Submit
            </button>
          )}
        </form>
      </div>
    </>
  );
}
//input. select y  checkbox son para recopilar la info de la actividad
