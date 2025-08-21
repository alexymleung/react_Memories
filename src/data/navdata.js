export const navname = [
  {
    id: 1,
    name: "jonathan",
  },
  {
    id: 2,
    name: "chris",
  },
  {
    id: 3,
    name: "cara",
  },
  {
    id: 4,
    name: "karen",
  },
];

export const navdata = (name, alias) => [
  {
    id: 1,
    link: `/${name}/${alias}info`,
    innerText: "Introduction",
  },
  {
    id: 2,
    link: `/${name}/${alias}family`,
    innerText: "Family",
  },
  {
    id: 3,
    link: `/${name}/${alias}school`,
    innerText: "School",
  },
  {
    id: 4,
    link: `/${name}/${alias}music`,
    innerText: "Music",
  },
  {
    id: 5,
    link: `/${name}/${alias}sports`,
    innerText: "Sports",
  },
  {
    id: 6,
    link: `/${name}/${alias}hobby`,
    innerText: "Hobby",
  },
  {
    id: 7,
    link: `/${name}/${alias}photos`,
    innerText: "Photos",
  },
  {
    id: 8,
    link: `/${name}/${alias}links`,
    innerText: "Links",
  },
];
