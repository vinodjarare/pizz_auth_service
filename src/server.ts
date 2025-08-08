import http from "http";
import { Config } from "./config";
import app from "./app";

const startServer = () => {
  const PORT = Config.PORT || 3000;
  try {
    const server = http.createServer(app);
    server.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error starting server:", error);
  }
};

startServer();
