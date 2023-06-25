const fun = require("./api");
async function main() {
  const token = await fun.getToken({
    pkey: "35536E1E-65B4-4D96-9D97-6ADB7EFF8147", // The public key
    surl: "https://tcr9i.chat.openai.com ", // OPTIONAL: Some websites can have a custom service URL
    headers: {
      // OPTIONAL
      // You can pass custom headers if you have to, but keep
      // in mind to pass a user agent when doing that
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
    },
    site: "https://chat.openai.com", // OPTIONAL: The site parameter, usually not required
  });
  console.log(token);
}
main();