import { useState } from "react";
import { useContextProvider } from "../context/userContext";
import "../styles/Formations.css";
import { useNavigate } from "react-router-dom";

function Formations() {
  const { certData, setCertData } = useContextProvider();
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);
  const [add, setAdd] = useState(false);
  const [newRow, setNewRow] = useState({
    diplome: "",
    annee_obtention: "",
    description: "",
    localisation: "",
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
    setCertData((prevData) =>
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
    const updateCert = certData.find((c) => c.id === id);
    if (!updateCert) {
      console.error("erreur : certificat introuvable");
    }

    if (edit) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/cert/${id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateCert),
          },
        );

        if (response.ok) {
          console.info("put validé");
          toggleSwitch();
          fetchCertData();
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
          `${import.meta.env.VITE_API_URL}/api/cert/${id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(certData),
          },
        );

        console.info("données certdata au clic envoyé en PUT =>", certData);

        if (response.ok) {
          const certifData = await response.json();
          console.info(
            "données modifiées reçues et enregistrées du back certData => ",
            certifData,
          );
          setCertData(certifData);
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

  // fonction appel de fetch sur commande de certData
  const fetchCertData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/cert`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const certData = await response.json();
        console.info("données fetchées certData =>", certData);
        setCertData(certData);
        console.info("données fetchées certData =>", certData);
      }
    } catch (err) {
      console.error("Erreur lors de la connexion :", err);
    }
  };

  // fonction de post de nouvelle ligne
  const handleSaveNewRow = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/cert`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: 1,
          diplome: newRow.diplome,
          annee_obtention: newRow.annee_obtention,
          description: newRow.description,
          localisation: newRow.localisation,
        }),
      });

      if (response.ok) {
        setNewRow({
          diplome: "",
          annee_obtention: "",
          description: "",
          localisation: "",
        });
        setAdd(true);
        fetchCertData();
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
        `${import.meta.env.VITE_API_URL}/api/cert/${id}`,
        {
          method: "DELETE",
        },
      );

      if (response.ok) {
        window.alert("certificat supprimé");
        fetchCertData();
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
        {certData
          .sort((a, b) => b.id - a.id)
          .map((c) => (
            <div className="col" key={c.id}>
              <label htmlFor="" id="displayOffLabel">
                1
              </label>
              <input
                type="text"
                id="diplome"
                name="diplome"
                readOnly={!edit}
                value={c.diplome}
                onChange={(e) => handleChange(e, c.id)}
                required
              />
              <input
                type="text"
                id="obtention"
                name="obtention"
                readOnly={!edit}
                value={c.annee_obtention}
                onChange={(e) => handleChange(e, c.id)}
                required
              />
              <input
                type="text"
                id="description"
                name="description"
                readOnly={!edit}
                value={c.description}
                onChange={(e) => handleChange(e, c.id)}
                required
              />
              <input
                type="text"
                id="localisation"
                name="localisation"
                readOnly={!edit}
                value={c.localisation}
                onChange={(e) => handleChange(e, c.id)}
                required
              />
              <button
                type="button"
                onClick={handleEditClick}
                onKeyDown={handleKeyPress}
                aria-label={c.id.toString()}
              >
                {edit ? "✅" : "🖌"}
              </button>
              <button
                type="button"
                onClick={handleRemoveClick}
                onKeyDown={handleKeyPress}
                aria-label={c.id.toString()}
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
            value={newRow.diplome}
            onChange={handleNewRowChange}
            placeholder="Diplôme"
          />
          <input
            type="text"
            name="annee_obtention"
            value={newRow.annee_obtention}
            onChange={handleNewRowChange}
            placeholder="Année d'obtention"
          />
          <input
            type="text"
            name="description"
            value={newRow.description}
            onChange={handleNewRowChange}
            placeholder="Description"
          />
          <input
            type="text"
            name="localisation"
            value={newRow.localisation}
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

export default Formations;
