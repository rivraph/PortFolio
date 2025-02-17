import databaseClient from "../../database/client";

import type { Result, Rows } from "../../database/client";

type UserProps = {
  id: number;
  prenom: string;
  nom: string;
  adresse: string;
  permis: string;
  ville: string;
  telephone: string;
  email: string;
  password: string;
  date_de_naissance: string;
  nationalite: string;
  github: string;
  linkedin: string;
  facebook: string;
  instagram: string;
  hobbies: string;
  img: string;
};

class UserRepository {
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
      "select * from item where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the item
    return rows[0] as UserProps;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from user");

    // Return the array of items
    return rows as UserProps[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item: Item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new UserRepository();
