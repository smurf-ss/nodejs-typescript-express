import dotenv from "dotenv";
import path from "path";

const config = () => {
  const nodeEnv = process.env.NODE_ENV?.trim();

  let envPath = null;

  switch (nodeEnv) {
    case "test":
      envPath = path.resolve(__dirname, "../../.env.test");
      break;
    case "production":
      envPath = path.resolve(__dirname, "../../.env.production");
      break;
    case "staging":
      envPath = path.resolve(__dirname, "../../.env.staging");
      break;
    case "development":
      envPath = path.resolve(__dirname, "../../.env.development");
      break;

    default:
      throw new Error("Specify the NODE_ENV variable");
  }

  const envConfig = dotenv.config({ path: envPath });

  if (envConfig.error) {
    throw envConfig.error;
  }

  return envConfig.parsed;
};

export default config;
