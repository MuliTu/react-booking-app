export const columns = [
  {
    id: "place",
    label: "Place",
    preffix: "#",
  },
  {
    id: "fullname",
    label: "Name",
    minWidth: 170,
    render: (value) => {
      return <>{value}</>;
    },
  },
  {
    id: "totalVicationTime",
    label: "Total Booked hours",
    minWidth: 170,
    surffix: " Houres",
  },
  {
    id: "deals",
    label: "Most Sold room type",
    minWidth: 170,
    render: (value) => generateRoomType(Object.keys(value[0])[0]),
  },
];

const generateRoomType = (string) => {
  const splited = string.split("_");
  return splited
    .map(
      (word) => word[0].toUpperCase() + word.slice(1, word.length).toLowerCase()
    )
    .join(" ");
};
