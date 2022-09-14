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
        Proactive, responsible, and extremely dedicated web developer with a Web Development Certificate from UCI. I’m always looking to develop new skills & explore new experiences. That’s why I took the opportunity to switch to tech major which was always my personal interest & from the moment I console.logged ‘Hello World’, I knew I was hooked.
        </p>
          </div>
        </div>
      </div>
    );
  }
  

  