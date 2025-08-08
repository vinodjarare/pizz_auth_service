import http from "http";
import { Config } from "./config";
import app from "./app";
import logger from "./config/logger";

const startServer = () => {
  const PORT = Config.PORT || 3000;
  try {
    const server = http.createServer(app);
    server.listen(PORT, () => {
      logger.info(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    logger.error("Error starting server:", error);
    process.exit(1);
  }
};

startServer();
