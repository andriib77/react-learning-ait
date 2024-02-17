import "./styles.css";

function ProfileCard() {    
  const user = {
    name: "Chris",
    lastName: "Hemsworth",
    src: "https://www.starbioonline.com/wp-content/uploads/2022/04/Chris-Hemsworth.jpg",
    occopation: "Actor",
    height: "190cm",
    hairColor: "brown",
    hobby: "fitness, backing, biking"
  };
  return (
    <div className="user-card">
      <img className="avatar" src={user.src} alt="Chris-Hemsworth.jpg" />
      <p>Name: {user.name} {user.lastName}</p>
      <p>Profession: {user.occopation}</p>
      <p>Height: {user.height}</p>
      <p>Hair: {user.hairColor}</p>      
      <p>Hobby: {user.hobby}</p>
    </div>
  );
}

export default ProfileCard;