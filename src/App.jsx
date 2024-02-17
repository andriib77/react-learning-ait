import "./App.css";
//import Button from "./components/Button/Button";
import ProfileCard from "./components/ProfileCard";

// 1. Компоненты пишутся с заглавной буквы
// 2. Компоненты должны возвращать JSX(DOM элементы - HTML теги)
function App() {
  // const nameOfCard = "Animal";

  // const animal = {
  //   name: "Tiger",
  //   age: 15,
  //   src: "https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_small/6aofsvaglm_Medium_WW226365.jpg",
  //   isWild: true
  // };

  // const user = {
  //   name: "Chris",
  //   lastName: "Hemsworth",
  //   src: "https://www.starbioonline.com/wp-content/uploads/2022/04/Chris-Hemsworth.jpg",
  //   occopation: "Actor",
  //   height: "190cm",
  //   hairColor: "brown",
  //   hobby: "fitness, backing, biking"
  // };

  return (    
      <div className="page-wrapper">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard /> 
      </div>
      /* <p>React app lesson 17</p>
      <div className="button-container">
        <Button />
        <Button />
        <Button />
      </div>
      <div className="car-card">
        <h3>{nameOfCard}</h3>
        <img src={animal.src} alt="Tiger image" />
        <p>Name: {animal.name}</p>
        <p>Age: {animal.age}</p>
        <p>{animal.isWild ? "Wild" : "No Wild"}</p>
      </div> */ 
       
  );
}

export default App;