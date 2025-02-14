import { useState } from "react";
import { useContextProvider } from "../context/userContext";
import "../styles/Myprojects.css";
import { useNavigate } from "react-router-dom";

function Experiences() {
  const { expData, setExpData } = useContextProvider();
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);
  const [add, setAdd] = useState(false);
  const [newRow, setNewRow] = useState({
    entreprise: "",
    lieu: "",
    date_debut: "",
    date_fin: "",
    poste: "",
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
    setExpData((prevData) =>
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
    const updateExp = expData.find((c) => c.id === id);
    if (!updateExp) {
      console.error("erreur : certificat introuvable");
    }

    if (edit) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/exp/${id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateExp),
          },
        );

        if (response.ok) {
          console.info("put validé");
          toggleSwitch();
          fetchExpData();
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
          `${import.meta.env.VITE_API_URL}/api/users/${id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(expData),
          },
        );

        console.info("données certdata au clic envoyé en PUT =>", expData);

        if (response.ok) {
          const expsData = await response.json();
          console.info(
            "données modifiées reçues et enregistrées du back certData => ",
            expsData,
          );
          setExpData(expsData);
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
  const fetchExpData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/exp`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const expsData = await response.json();
        setExpData(expsData);
        console.info("données fetchées certData =>", expsData);
      }
    } catch (err) {
      console.error("Erreur lors de la connexion :", err);
    }
  };

  // fonction de post de nouvelle ligne
  const handleSaveNewRow = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/exp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: 1,
          entreprise: newRow.entreprise,
          lieu: newRow.lieu,
          date_debut: newRow.date_debut,
          date_fin: newRow.date_fin,
          poste: newRow.poste,
          description: newRow.description,
        }),
      });

      if (response.ok) {
        setNewRow({
          entreprise: "",
          lieu: "",
          date_debut: "",
          date_fin: "",
          poste: "",
          description: "",
        });
        setAdd(true);
        fetchExpData();
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
        `${import.meta.env.VITE_API_URL}/api/exp/${id}`,
        {
          method: "DELETE",
        },
      );

      if (response.ok) {
        window.alert("certificat supprimé");
        fetchExpData();
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
    <div className="formationspagecontener">
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

      <form className="tableauformations">
        {expData.map((exp) => (
          <div className="col" key={exp.id}>
            <label htmlFor="" id="displayOffLabel">
              {exp.user_id}
            </label>
            <input
              type="text"
              id="entreprise"
              name="entreprise"
              readOnly={!edit}
              value={exp.entreprise}
              onChange={(e) => handleChange(e, exp.id)}
              required
            />
            <input
              type="text"
              id="lieu"
              name="lieu"
              readOnly={!edit}
              value={exp.lieu}
              onChange={(e) => handleChange(e, exp.id)}
              required
            />
            <input
              type="text"
              id="date debut"
              name="date debut"
              readOnly={!edit}
              value={exp.date_debut}
              onChange={(e) => handleChange(e, exp.id)}
              required
            />
            <input
              type="text"
              id="date fin"
              name="date fin"
              readOnly={!edit}
              value={exp.date_fin}
              onChange={(e) => handleChange(e, exp.id)}
              required
            />
            <input
              type="text"
              id="poste"
              name="poste"
              readOnly={!edit}
              value={exp.poste}
              onChange={(e) => handleChange(e, exp.id)}
              required
            />
            <input
              type="text"
              id="description"
              name="description"
              readOnly={!edit}
              value={exp.description}
              onChange={(e) => handleChange(e, exp.id)}
              required
            />
            <button
              type="button"
              onClick={handleEditClick}
              onKeyDown={handleKeyPress}
              aria-label={exp.id.toString()}
            >
              {edit ? "✅" : "🖌"}
            </button>
            <button
              type="button"
              onClick={handleRemoveClick}
              onKeyDown={handleKeyPress}
              aria-label={exp.id.toString()}
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
            name="diplome"
            value={newRow.entreprise}
            onChange={handleNewRowChange}
            placeholder="Diplôme"
          />
          <input
            type="text"
            name="annee_obtention"
            value={newRow.lieu}
            onChange={handleNewRowChange}
            placeholder="Année d'obtention"
          />
          <input
            type="text"
            name="description"
            value={newRow.date_debut}
            onChange={handleNewRowChange}
            placeholder="Description"
          />
          <input
            type="text"
            name="localisation"
            value={newRow.date_fin}
            onChange={handleNewRowChange}
            placeholder="Localisation"
          />
          <input
            type="text"
            name="description"
            value={newRow.poste}
            onChange={handleNewRowChange}
            placeholder="Description"
          />
          <input
            type="text"
            name="localisation"
            value={newRow.description}
            onChange={handleNewRowChange}
            placeholder="Localisation"
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

export default Experiences;
