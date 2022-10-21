import "./styles.css";
import { useEffect, useState } from "react";
import { Nav } from "./Nav.js";

export default function App() {
  const [user, setUser] = useState([]);
  const [ele, setEle] = useState();

  const fetchData = () => {
    fetch(`https://fakestoreapi.com/products/category/electronics`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let gagan = data;
        console.log(gagan);
        setUser(gagan);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <header>
        <nav class="navbar">
          <ul>
            <li>
              <a href=" ">Home</a>
            </li>
            <li>
              <a href=" ">About</a>
            </li>
            <li>
              <a href=" ">Services</a>
            </li>
            <li>
              <a href=" ">Contact us</a>
            </li>
            <div class="search">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search this website"
              />
            </div>
          </ul>
        </nav>
      </header>
      <div className="App" style={{ marginTop: "20%" }}>
        <div className="wrapper">
          <div className="container text-center">
            <div className="row">
              {user.map((goo) => {
                return (
                  <>
                    <div className="col-4">
                      <div className="box">
                        <div className="single-box">
                          <div className="img">
                            <img alt="Round_neck" src={goo.image} />
                          </div>
                          <h3>{goo.title}</h3>
                          <p>{goo.description}</p>
                          <div className="price">
                            <p>${goo.price}</p>
                          </div>
                          <a href=" ">Add to Cart</a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
