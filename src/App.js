import { useState } from "react";
import "./App.css";
import Card1 from "./Components/Cards/Card1/Card1.module";
import Card2 from "./Components/Cards/Card2/Card2.module";
import Card3 from "./Components/Cards/Card3/Card3.module";
import Card4 from "./Components/Cards/Card4/Card4.module";
const App = () => {
  const sports=[{
    id:1,
    type: "Card1",
    imageSrc:
      "https://staticg.sportskeeda.com/editor/2021/11/43679-16375619165847-1920.jpg",
    title: "Indian Cricket Team",
    fullName: "India National Cricket Team",
    nickname: "Men in Blue, Team iNDIA",
    founded: "1926",
    ground: "Himachal Pradesh Cricket Association Stadium Dharamshala",
    owners: "Board of Control of Cricket in India",
    players: [
      "KL Rahul",
      "Virat Kohli",
      "Jasprit Bumrah",
      "Rohit Sharma",
      "Hardik Pandya",
      "Rishabh Pant",
    ],
  },
  {
    id:1,
    type: "Card2",
    title: "India national cricket team / Players",
    players: [
      "Virat Kohli",
      "Rohit Sharma",
      "Jasprit Bumrah",
      "KL Rahul",
      "Ravindra Jadeja",
      "Rishabh Pant",
      "Shikhar Dhawan",
      "Hardik Pandya",
      "Mohammed Shami",
      "Cheteshwar Pujara",
      "Ishant Sharma",
      "Mayank Agarwal",
      "Ajinkya Rahane",
      "Shardul Thakur",
      "Wriddhiman Saha",
      "Ravichandran Ashwin",
      "Umesh Yadav",
      "Washington Sundar",
      "Axar Patel",
      "Shubman Gill",
    ],
  },
  {
    id:1,
    type: "Card3",
    title: "Sachin Tendulkar",
    imageSrc:
      "https://media.list.ly/production/83402/703946/item703946_600px?ver=4598967140",
    description: `He has all the records that every cricketer dreams of. He is called the Master of Cricket or rather say the "God Of Cricket". Starting his career at the age of 16, he became the youngest player to debut for India in Tests. He is the only player to have scored one hundred international centuries and the first batsman to score a double century in a One Day International.`,
  },
  {
    id:1,
    type: "Card4",
    title: "History Of Cricket",
    description: `The Indian cricket team made its Test cricket debut in 1932 and has since advanced to be among the top teams in the world. The team has won multiple World Cups and Champions Trophy. Cricket was introduced to the Indian subcontinent by European merchant sailors in the 18th century, and India's national cricket team played its first Test match in 1932.`,
  },{
    id:2,
    type: "Card1",
    imageSrc:
      "https://images-platform.99static.com//OMFlXMFoeG6i4_yNCrvrRMd3YMA=/0x0:2000x2000/fit-in/590x590/99designs-contests-attachments/134/134019/attachment_134019707",
    title: "Manchester United",
    fullName: "Manchester United Football Club",
    nickname: "The Red Devils",
    founded: "1878",
    ground: "Old Trafford",
    owners: "Manchester United plc",
    players: [
      "Cristiano Ronaldo",
      "Bruno Fernandes",
      "Paul Pogba",
      "Marcus Rashford",
      "Edinson Cavani",
    ],
  },
  {
    id:2,
    type: "Card2",
    title: "Manchester United Squad",
    players: [
      "David de Gea",
      "Harry Maguire",
      "Luke Shaw",
      "Aaron Wan-Bissaka",
      "Victor Lindelof",
      "Scott McTominay",
      "Fred",
      "Mason Greenwood",
      "Jadon Sancho",
      "Anthony Martial",
      "Donny van de Beek",
      "Nemanja Matic",
      "Juan Mata",
      "Alex Telles",
      "Dean Henderson",
      "Eric Bailly",
      "Raphael Varane",
      "Phil Jones",
      "Diogo Dalot",
      "Amad Diallo",
    ],
  },
  {
    id:2,
    type: "Card3",
    title: "Cristiano Ronaldo",
    imageSrc:
      "https://images.news18.com/ibnlive/uploads/2021/09/cristiano-ronaldo-163047908716x9.jpg",
    description: `Cristiano Ronaldo is a Portuguese professional footballer. He is considered one of the greatest football players of all time. Ronaldo has won numerous awards and accolades throughout his career, including multiple FIFA Ballon d'Or titles. He has played for top clubs like Manchester United, Real Madrid, and Juventus.`,
  },
  {
    id:2,
    type: "Card4",
    title: "History of Manchester United",
    description: `Manchester United is one of the most successful football clubs in England. It was founded in 1878 as Newton Heath LYR Football Club and later changed its name to Manchester United in 1902. The club has a rich history of winning major trophies, including numerous English Premier League titles and UEFA Champions League titles.`,
  },]
 
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  
  const filteredSports = searchQuery === "cricket"
    ? sports.filter((sport) => sport.id === 1)
    : searchQuery === "football"
      ? sports.filter((sport) => sport.id === 2)
      : [];

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">
          <img
            src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
            alt="Search"
          />
        </button>
      </div>
      <div>
        <div className="MainCard">
          {filteredSports.map((card, index) => {
            if (card.type === "Card1") {
              return <Card1 className="Card1" key={index} data={card} />;
            } else if (card.type === "Card2") {
              return <Card2 className="Card2" key={index} data={card} />;
            } else if (card.type === "Card3") {
              return <Card3 className="Card3" key={index} data={card} />;
            } else if (card.type === "Card4") {
              return <Card4 className="Card4" key={index} data={card} />;
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
};

export default App;
