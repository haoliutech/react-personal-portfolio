export default function Hero() {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="hero bg-slate-50 py-24">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="my-2 flex flex-row justify-center">
            <h1 className="text-5xl font-bold">Hello!👋 </h1>
            <div className="avatar">
              <div className="mx-3 my-auto w-16 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                <img src="https://media.licdn.com/dms/image/C5603AQHjKxzh3Hw3NQ/profile-displayphoto-shrink_800_800/0/1659620329236?e=1721865600&v=beta&t=vH-swWRyf-WiTRzBub0hZ_n4Fj7jY4BALUd03TgSk6w" />
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold">My name is Hao Liu.</h1>
          <p className="py-6">
            I am a junior full-stack developer based in Adelaide. I have been
            mainly working with projects with ASP.NET, React and Python. Now I
            am actively looking for a full-time position in Australia. Feel free
            to have a chat with me!
          </p>
          <button
            className="btn btn-accent"
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/haoliutech/")
            }
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
