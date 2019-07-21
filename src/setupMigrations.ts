import { Client, query as q } from "faunadb";
import chalk from "chalk";

const setupMigrations = async (client: Client) => {
  try {
    console.log("Setup migrations...");
    await client.query(q.CreateClass({ name: "Migration" }));
    await client.query(
      q.CreateIndex({ name: "all_migrations", source: q.Class("Migration") })
    );
    console.log(chalk.green("Migration setup completed"));
  } catch (error) {
    console.error(chalk.red(`${chalk.bold("Error")}: ${error.message}`));
  }
};

export default setupMigrations;