import "./App.css";

// Lessons
// import ProfileCard from "./homeworks/Homework17/ProfileCard";
// import Lesson18 from "./lessons/Lesson18/Lesson18";
import Lesson19 from "./lessons/Lesson19/Lesson19";

// Homeworks
import Homework18 from "./homeworks/Homework18/Homework18";

// 1. Компоненты пишутся с заглавной буквы
// 2. Компоненты должны возвращать JSX(DOM элементы - HTML теги)
function App() {
  return (
    <div className="App">
      {/* <ProfileCard />
      <ProfileCard />
      <ProfileCard /> */}
      {/* <Lesson18 /> */}
      {/* <Lesson19 /> */}

      <Homework18 />
    </div>
  );
}

export default App;
