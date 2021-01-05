import nextId from "react-id-generator";
export const Client = [
  {
    id: `${nextId()}`,
    title: "Client",
    content: [{ name: " WebGeniusLab - " }, { name: "Creative Agency" }],
  },
  {
    id: `${nextId()}`,
    title: "Team",
    content: [
      { name: " Kate Chee - Planning " },
      { name: "Denis Ford - Marketing" },
    ],
  },
  {
    id: `${nextId()}`,
    title: "Service",
    content: [{ name: " Adobe Photoshop, " }, { name: "Sketch" }],
  },
  {
    id: `${nextId()}`,
    title: "Category",
    content: [{ name: "Design, Ideas" }],
  },
];
