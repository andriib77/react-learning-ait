import "./styles.css";

function ProfileCard() {
  // К нам пришли данные с сервера
  const profile = {
    src: "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
    firstName: "Homer",
    lastName: "Simpson",
    career: "Nuclear Safety Inspector",
    hairColor: "Black",
    hobby: "Drink beer Duff",
  };

  // JSX: Передача html кода переменной
  const cardName = <h1>User info</h1>;

  const normalizeFirstLastName = () => {
    return `${profile.firstName} ${profile.lastName}`;
  };

  return (
    <div className="profile-card">
      {cardName}
      <div className="avatar-control">
        <img
          className="profile-avatar"
          src={profile.src}
          alt="Profile Avatar"
        />
      </div>
      <h2>{normalizeFirstLastName()}</h2>
      <p>Career: {profile.career}</p>
      <p>Hair Color: {profile.hairColor}</p>
      <p>Hobby: {profile.hobby}</p>
    </div>
  );
}

export default ProfileCard;
