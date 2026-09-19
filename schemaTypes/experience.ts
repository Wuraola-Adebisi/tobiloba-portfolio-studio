export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    { name: "company", type: "string" },
    { name: "title", title: "Job title", type: "string" },
    { name: "roles", type: "array", of: [{ type: "string" }], options: { list: ["software", "data"] } },
    { name: "startDate", type: "date" },
    { name: "endDate", type: "date" },
    {
      name: "description",
      title: "Role summary",
      type: "text",
      rows: 8,
      description:
        "What the role involved and what it produced. A blank line starts a new paragraph. No em dashes.",
    },
  ],
};