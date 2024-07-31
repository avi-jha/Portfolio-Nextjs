import IntroCard from "./components/introcard";
import JsonData from "./Data/data.json";

export default function Home() {
  return (
    <main className="flex min-h-screen w-[100%] flex-col items-center p-10">
      <div className="w-[55%]">
        <div className="z-10 w-[60%] max-w-5xl font-mono text-sm lg:flex m-10">
          <ul className="flex flex-row ">
            {JsonData.Header.map((data, index) => (
              <li className="px-4" key={index}>
                {data}
              </li>
            ))}
          </ul>
        </div>

        {/* header section */}
        <div className="m-12 mt-20">
          <p className="text-2xl">hey, i am Avi 👋🏻</p>
          <p className="mt-8">{JsonData.intro.intro_para_1}</p>
        </div>

        {/* image section */}
        <div className="m-12 mt-10 h-96 bg-blue-50"></div>

        {/* intro para */}
        <div className="m-12 mt-10">{JsonData.intro.intro_para_2}</div>

        <div
          className="m-12 mt-10 flex flex-row justify-between items-center w-fill
        "
        >
          <IntroCard
            card_title_1={"@LinkedIN"}
            card_title_2={"Let's Connect"}
          />
          <IntroCard card_title_1={"@git-hub"} card_title_2={"See Projects"} />
        </div>
      </div>
    </main>
  );
}
