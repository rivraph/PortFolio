import type { ResultSetHeader, RowDataPacket } from "mysql2";
import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type autreProps = {
  id: number;
  user_id: number;
  intitule: string;
  description: string;
};

class autreRepository {
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
      "select * from autres where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as autreProps;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from autres ");

    // Return the array of items
    return rows as autreProps[];
  }

  async edit(id: number, updateAutre: Partial<autreProps>) {
    try {
      const query = `
        UPDATE autres SET
          intitule = ?,
          description = ?
        WHERE id = ?
      `;

      const values = [updateAutre.intitule, updateAutre.description, id];

      const [result] = await databaseClient.query<ResultSetHeader>(
        query,
        values,
      );

      if (result.affectedRows === 0) {
        console.error(`Information ${id} non trouvé`);
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
        "DELETE FROM autres WHERE id = ?",
        [id],
      );

      if (result.affectedRows === 0) {
        console.error(`Intitulé avec ID ${id} non trouvé pour suppression`);
        return undefined;
      }

      console.info("Suppression validée pour l'intitulé", id);
      return { id }; // Retourne l'ID du certificat supprimé
    } catch (error) {
      console.error(
        "Erreur lors de la suppression dans projetsRepository.delete :",
        error,
      );
      throw error;
    }
  }

  async find(intitule: string) {
    try {
      const [rows] = await databaseClient.query<RowDataPacket[]>(
        "SELECT * FROM projets WHERE nom = ?",
        [intitule],
      );

      // Si un nom de projet est trouvé, retourner les résultats, sinon, retourner undefined
      if (rows.length > 0) {
        console.info(`${intitule} existe déjà `);
        return rows[0] as autreProps;
      }

      return undefined;
    } catch (error) {
      console.error("Erreur lors de recherche find certRepository :", error);
      throw error;
    }
  }

  // The C of CRUD - Create operation
  async create(u: Omit<autreProps, "id">): Promise<autreProps> {
    try {
      const [result] = await databaseClient.query<ResultSetHeader>(
        "INSERT INTO autres ( user_id, intitule, description ) VALUES (?, ?, ?)",
        [u.user_id, u.intitule, u.description],
      );

      console.info("Données ajoutées dans la base de données projets", result);
      return { ...u, id: result.insertId } as autreProps;
    } catch (error) {
      console.error("Erreur lors de la création du projet :", error);
      throw error;
    }
  }
}

export default new autreRepository();
