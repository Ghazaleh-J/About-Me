import myAvatar from "../components/assets/myAvatar.jpg"

export default function About() {
    return (
      <div name="about" className="h-screen w-full bg-white text-gray">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div>
            <img src={myAvatar} alt="my avatar" className="rounded-2xl mx-auto w-2/3 md:w-full" />
          </div>
          <div className="flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-4xl font-bold">Hi, I'm Ghazaleh 👋 </h1>
        <p className="py-4 max-w-md">
            I'm from Irvine, California. I have a masters degree in law, 
            but I always was passionate about the web development and now 
            I'm a full stack web developer from UCI.
        </p>
          </div>
        </div>
      </div>
    );
  }
  

  