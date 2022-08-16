import passwordGenerator from "./assets/passwordGenerator.png";
import quizChallenge from "./assets/quizChallenge.png";
import weatherDashboard from "./assets/weatherDashboard.png";
import noteTaker from "./assets/noteTaker.png";
import lostArk from "./assets/lostArk.png";
import dungeonCrawler from "./assets/dungeonCrawler.png";

export default function Project() {

    const projects = [
        {
            id: 1,
            src: passwordGenerator,
            demoLink:"https://ghazaleh-j.github.io/Homework-3/",
            codeLink:"https://github.com/Ghazaleh-J/Homework-3"
        },
        {
            id: 2,
            src: quizChallenge,
            demoLink:"https://ghazaleh-j.github.io/Homework-4/",
            codeLink:"https://github.com/Ghazaleh-J/Homework-4"
        },
        {
            id: 3,
            src: weatherDashboard,
            demoLink:"https://ghazaleh-j.github.io/Homework-6---Server-Side-APIs/",
            codeLink:"https://github.com/Ghazaleh-J/Homework-6---Server-Side-APIs"
        },
        {
            id: 4,
            src: noteTaker,
            demoLink:"https://note-taker-gj.herokuapp.com/",
            codeLink:"https://github.com/Ghazaleh-J/Note_Taker_Express-11"
        },
        {
            id: 5,
            src: lostArk,
            demoLink:"https://fluffykyubey.github.io/Lost-Ark-Group-Finder/",
            codeLink:"https://github.com/Ghazaleh-J/Lost-Ark-Group-Finder"
        },
        {
            id: 6,
            src: dungeonCrawler,
            demoLink:"https://rpg-dungeon-crawler.herokuapp.com/",
            codeLink:"https://github.com/Ghazaleh-J/RPG_Dungeon_Crawler"
        },
    ]
    return (
        <div name="project" className="bg-gradient-to-b  from-pink-50 to-white w-full text-gray md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
               <div className="pb-8">
                <p className="text4xl font-bold inline">Projects</p>
                <p className="py-6">Check out some of my work right here</p>
               </div>
               <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
               {
                projects.map(({id, src}) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                    <div className="flex items-center justify-center">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150">Demo</button>
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150">Code</button>
                    </div>
                </div>       
                ))
               }
               
               </div>
            </div>
        </div>
    
    );
  }
  