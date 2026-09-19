export default {
  name: "certification",
  title: "Certification",
  type: "document",
  fields: [
    { name: "title", type: "string" },
    { name: "issuer", type: "string" },
    { name: "badgeImage", type: "image" },
    { name: "credentialUrl", type: "url" },
    { name: "description", type: "text" },
    { name: "issuedDate", type: "date" },
    { name: "role", type: "array", of: [{ type: "string" }], options: { list: ["software", "data"] } },
  ],
};