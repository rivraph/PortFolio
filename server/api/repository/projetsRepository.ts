import type { ResultSetHeader, RowDataPacket } from "mysql2";
import databaseClient from "../../database/client";

import type { Result, Rows } from "../../database/client";

type projectsProps = {
  id: number;
  user_id: number;
  nom: string;
  img: string;
  info: string;
  url: string;
};

class projetsRepository {
  // The C of CRUD - Create operation

  /* async create(item: Omit<UserProps, "id">) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "insert into item (title, user_id) values (?, ?)",
      [item.title, item.user_id],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }
 */
  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific item by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from projets where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as projectsProps;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from projets ");

    // Return the array of items
    return rows as projectsProps[];
  }
  async edit(id: number, updateProj: Partial<projectsProps>) {
    try {
      const query = `
        UPDATE projets SET
          nom = ?,
          img = ?,
          info = ?,
          url = ?
        WHERE id = ?
      `;

      const values = [
        updateProj.nom,
        updateProj.img,
        updateProj.info,
        updateProj.url,
        id,
      ];

      const [result] = await databaseClient.query<ResultSetHeader>(
        query,
        values,
      );

      if (result.affectedRows === 0) {
        console.error(`Certificat avec ID ${id} non trouvé pour mise à jour`);
        return undefined;
      }

      return this.read(id); // Retourner l'élément mis à jour
    } catch (error) {
      console.error("Error updating certificate:", error);
      throw error;
    }
  }

  async delete(id: number) {
    try {
      const [result] = await databaseClient.query<ResultSetHeader>(
        "DELETE FROM projets WHERE id = ?",
        [id],
      );

      if (result.affectedRows === 0) {
        console.error(`Certificat avec ID ${id} non trouvé pour suppression`);
        return undefined;
      }

      console.info("Suppression validée pour certificat ID", id);
      return { id }; // Retourne l'ID du certificat supprimé
    } catch (error) {
      console.error(
        "Erreur lors de la suppression dans projetsRepository.delete :",
        error,
      );
      throw error;
    }
  }

  async find(nom: string) {
    try {
      const [rows] = await databaseClient.query<RowDataPacket[]>(
        "SELECT * FROM projets WHERE nom = ?",
        [nom],
      );

      // Si un nom de projet est trouvé, retourner les résultats, sinon, retourner undefined
      if (rows.length > 0) {
        console.info(`ce porjet ${nom} existe déjà existant`);
        return rows[0] as projectsProps;
      }

      return undefined;
    } catch (error) {
      console.error("Erreur lors de recherche find certRepository :", error);
      throw error;
    }
  }

  // The C of CRUD - Create operation
  async create(u: Omit<projectsProps, "id">): Promise<projectsProps> {
    try {
      const [result] = await databaseClient.query<ResultSetHeader>(
        "INSERT INTO projets ( user_id, nom, img, info, url ) VALUES (?, ?, ?, ?, ?)",
        [u.user_id, u.nom, u.img, u.info, u.url],
      );

      console.info("Données ajoutées dans la base de données projets", result);
      return { ...u, id: result.insertId } as projectsProps;
    } catch (error) {
      console.error("Erreur lors de la création du projet :", error);
      throw error;
    }
  }
}

export default new projetsRepository();
