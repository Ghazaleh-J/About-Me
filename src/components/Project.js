import passwordGenerator from "./assets/projects/passwordGenerator.png";
import quizChallenge from "./assets/projects/quizChallenge.png";
import weatherDashboard from "./assets/projects/weatherDashboard.png";
import noteTaker from "./assets/projects/noteTaker.png";
import techBlog from "./assets/projects/tech-blog.png";


export default function Project() {

    const projects = [
        {
            id: 1,
            src: passwordGenerator,
            demoLink:"https://ghazaleh-j.github.io/Password-Generator/",
            codeLink:"https://github.com/Ghazaleh-J/Password-Generator",
            projectName:"Password Generator",
            projectDescription:"A random password generator app"
        },
        {
            id: 2,
            src: quizChallenge,
            demoLink:"https://ghazaleh-j.github.io/Quiz-App/",
            codeLink:"https://github.com/Ghazaleh-J/Quiz-App",
            projectName:"Quiz App",
            projectDescription:"A timed quiz application with multiple-choice questions"
        },
        {
            id: 3,
            src: weatherDashboard,
            demoLink:"https://ghazaleh-j.github.io/Weather-App/",
            codeLink:"https://github.com/Ghazaleh-J/Weather-App",
            projectName:"Weather App",
            projectDescription:"A weather app built using server-side API"
        },
        {
            id: 4,
            src: noteTaker,
            demoLink:"https://note-taker-gj.herokuapp.com/",
            codeLink:"https://github.com/Ghazaleh-J/Note-Taker",
            projectName:"Note Taker",
            projectDescription:"A note taker application"
        },
        {
            id: 5,
            src: techBlog,
            demoLink:"https://tech-blogg-hw.herokuapp.com/",
            codeLink:"https://github.com/Ghazaleh-J/Tech-Blog",
            projectName:"Tech Blog",
            projectDescription:"A CMS-style blog"
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
                projects.map(({id, src, demoLink, codeLink, projectName, projectDescription}) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                    <div className="p-4">
                    <h5 className="text-gray-900 text-l font-medium mb-2">{projectName}</h5>
                    <p className="text-gray-700 text-base mb-4 h-5">{projectDescription}</p>
                    <div className="flex items-center justify-center">
                       <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150 text-gray-700"><a href={demoLink} target="_blank" rel="noreferrer">Demo</a></button> 
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150 text-gray-700"><a href={codeLink} target="_blank" rel="noreferrer">Code</a></button>
                    </div>
                    </div>
                </div>       
                ))
               }
               </div>
            </div>
        </div>
    );
  }
  