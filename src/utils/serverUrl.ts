const onNetlify = process.env.NODE_ENV === "production";

const serverUrl = onNetlify
  ? "https://c5c2-study-resources.herokuapp.com"
  : "http://localhost:4000";
export default serverUrl;
