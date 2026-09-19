export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    { name: "name", type: "string" },
    { name: "category", type: "string" },
    { name: "role", type: "array", of: [{ type: "string" }], options: { list: ["software", "data"] } },
  ],
};