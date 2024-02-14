const phone = [
  {
    id: 1,
    model: "Iphone",
    version: ["Iphone 15", "Iphone 15 pro", "Iphone 15 pro max"],
    camera: {
      fontCamera: 12,
      backCamera: 48,
    },
    screen: 1200,
    memory: "2Tb",
    price: {
      Iphone15: "1200$",
      Iphone15Pro: "1500$",
      Iphone15ProMax: "2000$",
    },
  },
  {
    id: 2,
    model: "Samsung",
    version: ["Galaxy S24", "Galaxy S24Plus", "Galaxy S24 Ultra"],
    camera: {
      fontCamera: 48,
      backCamera: 200,
    },
    screen: 1200,
    memory: "1Tb",
    price: {
      GalaxyS24: "1300$",
      GalaxyS24Plus: "1400$",
      GalaxyS24Ultra: "1800$",
    },
  },
];

const getPhone = (id) => {
  return phone.find((d) => d.id === id);
};

const obj = getPhone(1);

obj;
const obj2 = ({ price, memory, model } = obj);
