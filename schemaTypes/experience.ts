import type {Rule} from "sanity";

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
        "Describe what the role involved and the results it produced. Press Enter twice to start a new paragraph. Avoid the long dash (\u2014). Use a comma or a full stop instead.",
      validation: (rule: Rule) =>
        rule
          .custom((value) =>
            typeof value === "string" && value.includes("\u2014")
              ? "This contains a long dash (\u2014). Replace it with a comma or a full stop."
              : true,
          )
          .warning(),
    },
  ],
};