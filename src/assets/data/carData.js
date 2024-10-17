// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla",
    imgUrl: img01,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Tesla, Inc. is an American electric vehicle and clean energy company founded in 2003 by engineers Martin Eberhard and Marc Tarpenning. Named after the famous inventor Nikola Tesla, the company aims to accelerate the world’s transition to sustainable energy. Tesla is best known for its electric cars, including the Model S, Model 3, Model X, and Model Y, which combine high performance with cutting-edge technology and eco-friendly features",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Aventador",
    imgUrl: img02,
    model: "Model-2022",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Toyota Motor Corporation is a Japanese multinational automotive manufacturer founded in 1937 by Kiichiro Toyoda. Headquartered in Toyota City, Aichi Prefecture, it is one of the largest car manufacturers in the world, known for its commitment to quality, reliability, and innovation. Toyota has a diverse lineup of vehicles, including sedans, SUVs, trucks, and hybrids, with popular models like the Camry, Corolla, RAV4, and the Hilux.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 65,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Bayerische Motoren Werke AG (BMW) is a renowned German luxury automobile manufacturer founded in 1916, headquartered in Munich, Bavaria. Initially established as a manufacturer of aircraft engines, BMW shifted to motorcycle production in the 1920s and began making automobiles in 1928. Today, BMW is known for its high-performance vehicles, luxury sedans, and sporty motorcycles, with a strong reputation for engineering excellence and innovative technology.",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    model: "Model-2022",
    price: 70,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Nissan's most iconic models include the Nissan Altima, Nissan Sentra, and the Nissan Z, renowned for their performance and reliability. The company has also made a significant impact in the electric vehicle market with the Nissan Leaf, one of the world's best-selling electric cars, promoting sustainability and innovation in the automotive industry.",
  },

  {
    id: 5,
    brand: "Ferrari",
    rating: 94,
    carName: "Ferrari Camry",
    imgUrl: img05,
    model: "Model-2022",
    price: 45,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Ferrari is synonymous with speed, elegance, and innovation, producing some of the most coveted supercars in the world, such as the Ferrari 488, Ferrari F8 Tributo, and the legendary Ferrari LaFerrari. Each model embodies a perfect blend of cutting-edge technology, stunning design, and unmatched performance, making them highly desirable among car enthusiasts and collectors.",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2023",
    price: 85,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The brand's iconic three-pointed star emblem symbolizes its mission to provide superior mobility on land, sea, and air. Mercedes-Benz offers a wide range of vehicles, from sedans and SUVs to sports cars and electric models, catering to various customer preferences and lifestyles. Notable models include the Mercedes-Benz S-Class, a benchmark for luxury and comfort, and the G-Class, an iconic off-road vehicle.",
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Audi is a renowned German automobile manufacturer that stands out for its luxury vehicles, sophisticated technology, and commitment to performance and innovation. Founded in 1909, Audi is part of the Volkswagen Group and is recognized for its iconic four-ring logo, symbolizing the union of four founding companies.",
  },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Chevrolet Colorado is a versatile and capable midsize pickup truck known for its rugged performance and practicality. Designed for both work and play, the Colorado offers a balance of strength, efficiency, and comfort, making it an ideal choice for various lifestyles.",
  },
];

export default carData;
