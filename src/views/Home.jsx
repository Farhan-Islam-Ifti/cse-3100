import { useEffect, useState } from "react";
import "./Home.css";

const featuredCats = [
  { name: "Whiskers", age: "2", breed: "briman" },
  { name: "Mittens", age: "2", breed: "bengal" },
  { name: "Shadow", age: "1", breed: "persian" },
];

export default function Home() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch("https://api.thecatapi.com/v1/images/search").then((res) =>
              res.json()
            )
          )
        );
        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));
        setCats(catsWithImages);
      } catch (error) {
        console.error("Error fetching cat images:", error);
      }
    };
    fetchCatImages();
  }, []);

  return (
    <div className="container">
      <section className="text-center">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
         Fullfill you dream of adopting a cat! 
        </p>
      </section>

      <div className="divider"></div>

      <section>
        <h2>Featured Cats</h2>
        <div className="cats-grid">
          {cats.map((cat, i) => (
            <div key={i} className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="cat-image"
              />
              <div className="cat-info">
                <h3>{cat.name}</h3>
                <p>Age: {cat.age}</p>
                <p>Breed: {cat.breed}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
