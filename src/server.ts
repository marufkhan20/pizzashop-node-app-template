import app from "./app.ts";
import { Config } from "./config/index.ts";
import logger from "./config/logger.ts";

const startServer = () => {
  const PORT = Config.PORT;
  try {
    app.listen(PORT, () => logger.info("Listening on PORT", { port: PORT }));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
