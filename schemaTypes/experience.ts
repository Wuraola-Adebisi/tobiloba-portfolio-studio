
import type { Rule } from "sanity";

export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "company",
      title: "Company",
      type: "string",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "title",
      title: "Job Title",
      type: "string",
    },
    {
      name: "roles",
      title: "Portfolio Sections",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: ["software", "data"],
      },
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description:
        "Controls the position of this experience entry on the website. Use 1 for the first entry, 2 for the second, and so on. Lower numbers appear first.",
      initialValue: 1,
      validation: (rule: Rule) =>
        rule
          .required()
          .integer()
          .min(1)
          .error("Enter a positive whole number for the display order."),
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
      validation: (rule: Rule) => rule.required(),
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
    {
      name: "description",
      title: "Role Summary",
      type: "text",
      rows: 8,
      description:
        "Write the opening paragraph summarising the role. Keep bullet points in Key Contributions. Avoid the long dash (—). Use a comma or a full stop instead.",
      validation: (rule: Rule) =>
        rule
          .custom((value) =>
            typeof value === "string" && value.includes("—")
              ? "This contains a long dash (—). Replace it with a comma or a full stop."
              : true,
          )
          .warning(),
    },
    {
      name: "keyContributions",
      title: "Key Contributions",
      type: "array",
      description:
        "Add each responsibility, achievement, or contribution as a separate bullet point.",
      of: [{ type: "string" }],
    },
  ],
};
