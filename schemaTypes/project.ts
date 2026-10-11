
export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description:
        "Controls the position of this project on the website. Use 1 for the first project, 2 for the second, and so on. Lower numbers appear first.",
      initialValue: 1,
      validation: (Rule: any) =>
        Rule.required()
          .integer()
          .min(1)
          .error("Enter a positive whole number for the display order."),
    },
    { name: "coverImage", type: "image" },
    {
      name: "showcaseVideo",
      type: "file",
      title: "Showcase Video (MP4)",
    },
    { name: "liveUrl", type: "url" },
    { name: "repoUrl", type: "url" },
    {
      name: "role",
      type: "string",
      options: { list: ["software", "data"] },
    },
    { name: "focusArea", type: "string" },
    {
      name: "techStack",
      type: "array",
      of: [{ type: "string" }],
    },
    { name: "summary", type: "text" },
    {
      name: "problem",
      title: "Problem",
      type: "text",
      rows: 4,
      description:
        "What problem this project solved. Shown on the case study page.",
    },
    {
      name: "approach",
      title: "Approach",
      type: "text",
      rows: 4,
      description:
        "How it was approached or built. Shown on the case study page.",
    },
    {
      name: "outcome",
      title: "Outcome",
      type: "text",
      rows: 4,
      description:
        "What happened as a result. Shown on the case study page.",
    },
    {
      name: "results",
      title: "Results",
      type: "text",
      rows: 4,
      description:
        "Concrete results or metrics, if any. Shown on the case study page.",
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
      description:
        "Additional screenshots shown on the case study page.",
    },
  ],
};
