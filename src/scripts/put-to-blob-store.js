require("dotenv").config({ path: ".env.development.local" });
const { put } = require("@vercel/blob");
const fs = require("fs/promises");

const FILE_NAME = "avatars/bearbug_snowman.jpg";
const FILE_PATH = "/Users/dennisyeh/Downloads/bearbug_snowman.jpg";

function logEnv() {
  console.log(JSON.stringify(process.env, null, 2));
}

async function main() {
  const buffer = await fs.readFile(FILE_PATH);
  const { url } = await put(FILE_NAME, buffer, {
    access: "public",
  });
  console.log("url:", url);
}

main();
