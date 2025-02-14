import { useState } from "react";
import { useContextProvider } from "../context/userContext";
import "../styles/Autres.css";
import { useNavigate } from "react-router-dom";

function Autres() {
  const { autreData, setAutreData } = useContextProvider();
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);
  const [add, setAdd] = useState(false);
  const [newRow, setNewRow] = useState({
    intitule: "",
    description: "",
  });
  console.info(setRemove);
  const navigate = useNavigate();

  // fonction pour naviguer entre les 3 pages admin
  const onChangePage = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = (
      event.currentTarget as HTMLButtonElement
    ).innerText.toLowerCase();
    console.info(value);
    navigate(`/admin/${value}`);
  };

  // fonction pour rendre editable
  const toggleSwitch = () => {
    setEdit(!edit);
  };

  //fonction pour rendre le texte modifiable
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const { name, value } = e.target;
    setAutreData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, [name]: value } : item,
      ),
    );
  };

  //fonction pour modifier les données d'une ligne
  const handleEditClick = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const id = Number(event.currentTarget.ariaLabel);
    console.info(id);
    const updateAutre = autreData.find((a) => a.id === id);
    if (!updateAutre) {
      console.error("erreur : certificat introuvable");
    }

    if (edit) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/autres/${id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateAutre),
          },
        );

        if (response.ok) {
          console.info("put validé");
          toggleSwitch();
          fetchAutreData();
        } else {
          console.error("Error fetching user data:", await response.json());
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    if (edit === false) {
      toggleSwitch();
    }
  };

  const handleEditKeyPressClick = async (id: number) => {
    if (edit === true) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/autres/${id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(autreData),
          },
        );

        console.info("données certdata au clic envoyé en PUT =>", autreData);

        if (response.ok) {
          const autresData = await response.json();
          console.info(
            "données modifiées reçues et enregistrées du back certData => ",
            autresData,
          );
          setAutreData(autresData);
          toggleSwitch();
        } else {
          console.error(
            "Erreur lors de la modification des données utilisateur :",
            await response.json(),
          );
        }
      } catch (error) {
        console.error(
          "Erreur lors de la modification des données utilisateur :",
          error,
        );
      }
    } else {
      toggleSwitch();
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter") {
      const id = Number(event.currentTarget.ariaLabel);
      handleEditKeyPressClick(id);
    }
  };

  // fonction ajout de nouvelle ligne
  const handleAddClick = () => {
    setAdd(true);
  };

  // fonction pour accepté l'update de nouvelle ligne
  const handleNewRowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewRow((prevRow) => ({
      ...prevRow,
      [name]: value,
    }));
  };

  // fonction appel de fetch sur commande de expData
  const fetchAutreData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/autres`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        },
      );

      if (response.ok) {
        const autresData = await response.json();
        setAutreData(autresData);
        console.info("données fetchées certData =>", autresData);
      }
    } catch (err) {
      console.error("Erreur lors de la connexion :", err);
    }
  };

  // fonction de post de nouvelle ligne
  const handleSaveNewRow = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/autres`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_id: 1,
            intitule: newRow.intitule,
            description: newRow.description,
          }),
        },
      );

      if (response.ok) {
        setNewRow({ intitule: "", description: "" });
        setAdd(true);
        fetchAutreData();
      } else {
        console.error(
          "Erreur lors de l'ajout du certificat:",
          await response.json(),
        );
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du certificat:", error);
    }
  };

  // fonction suppression de ligne
  const handleRemoveClick = async (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    const id = Number(event?.currentTarget.ariaLabel);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/autres/${id}`,
        {
          method: "DELETE",
        },
      );

      if (response.ok) {
        window.alert("certificat supprimé");
        fetchAutreData();
      } else {
        console.error(
          "Erreur lors de l'ajout du certificat:",
          await response.json(),
        );
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du certificat:", error);
    }
  };

  return (
    <div className="autrescontener">
      <div className="buttonpage">
        <button type="button" onClick={onChangePage}>
          formations
        </button>
        <button type="button" onClick={onChangePage}>
          experiences
        </button>
        <button type="button" onClick={onChangePage}>
          projets
        </button>
        <button type="button" onClick={onChangePage}>
          autres
        </button>
      </div>

      <form className="tableauautres">
        {autreData.map((a) => (
          <div className="col" key={a.id}>
            <label htmlFor="" id="displayOffLabel">
              {a.user_id}
            </label>
            <input
              type="text"
              id="intitule"
              name="intitule"
              readOnly={!edit}
              value={a.intitule}
              onChange={(e) => handleChange(e, a.id)}
              required
            />
            <input
              type="text"
              id="description"
              name="description"
              readOnly={!edit}
              value={a.description}
              onChange={(e) => handleChange(e, a.id)}
              required
            />

            <button
              type="button"
              onClick={handleEditClick}
              onKeyDown={handleKeyPress}
              aria-label={a.id.toString()}
            >
              {edit ? "✅" : "🖌"}
            </button>
            <button
              type="button"
              onClick={handleRemoveClick}
              onKeyDown={handleKeyPress}
              aria-label={a.id.toString()}
            >
              {remove ? "🗑" : "🗑"}
            </button>
          </div>
        ))}
      </form>

      {add && (
        <div className="col">
          <input
            type="text"
            name="intitule"
            value={newRow.intitule}
            onChange={handleNewRowChange}
            placeholder="Diplôme"
          />
          <input
            type="text"
            name="description"
            value={newRow.description}
            onChange={handleNewRowChange}
            placeholder="Année d'obtention"
          />

          <button type="button" onClick={handleSaveNewRow}>
            Sauvegarder
          </button>
          <button type="button" onClick={() => setAdd(false)}>
            Annuler
          </button>
        </div>
      )}

      {!add && (
        <button
          type="button"
          id="buttonAdd"
          onClick={handleAddClick}
          onKeyDown={handleKeyPress}
          aria-label="Toggle add mode"
        >
          {" "}
          Ajouter un certificat
        </button>
      )}
    </div>
  );
}

export default Autres;
