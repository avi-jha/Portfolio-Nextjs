import DataCard from "./components/datacard";
import IntroCard from "./components/introcard";
import LanguageBox from "./components/languagebox";
import JsonData from "./Data/data.json";

import sampleImage from "./assets/01.jpg";
import Link from "next/link";

export default function Home() {
  const _handleRedirection = () => {
    return;
  };

  return (
    <main className="flex min-h-screen w-[100%] flex-col items-center p-10">
      <div className="w-[55%]">
        {/* nav bar */}
        <div className="z-10 w-[60%] max-w-5xl font-mono text-sm lg:flex m-10">
          <ul className="flex flex-row ">
            {JsonData.Header.map((data, index) => (
              <li className="px-4" key={index}>
                <Link href={data === "home" ? "/" : `/${data}`}>{data}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* body */}
        <div className="m-12 mt-20">
          <p className="text-2xl">hey, i am Avi 👋🏻</p>
          <p className="mt-8 text-sm">{JsonData.intro.intro_para_1}</p>
        </div>

        <div className="m-12 mt-10 h-96 bg-blue-50"></div>

        <p className="m-12 mt-10 text-sm">{JsonData.intro.intro_para_2}</p>

        <div
          className="m-12 mt-10 flex flex-row justify-between items-center w-fill
        "
        >
          <IntroCard
            card_title_1={"@LinkedIN"}
            card_title_2={"Let's Connect"}
          />
          <IntroCard
            card_title_1={"@git-hub"}
            card_title_2={"See my Projects"}
          />
        </div>

        <p className="m-12 mt-10 text-sm">{JsonData.intro.intro_para_3}</p>

        <div className="m-12 flex flex-col items-center w-fill">
          <DataCard
            title={JsonData.DataCard.title.title_1}
            subtitle={JsonData.DataCard.subtitle.subtitle_1}
          />
          <DataCard
            title={JsonData.DataCard.title.title_2}
            subtitle={JsonData.DataCard.subtitle.subtitle_2}
          />
        </div>

        <div className="m-12">
          <p className="text-sm">
            I invest small angel checks into early stage startups building tools
            for developers.
          </p>
          {/* TODO: optimize this code */}
          <div className="flex flex-row items-center justify-start">
            <LanguageBox imgName={sampleImage} title={"React"} />
            <LanguageBox imgName={sampleImage} title={"Django"} />
            <LanguageBox imgName={sampleImage} title={"Flutter"} />
            <LanguageBox imgName={sampleImage} title={"Node"} />
          </div>
        </div>

        <div className="m-12">
          <p className="text-sm">
            I've worked with and advised companies on developer marketing,
            developer relations, building open-source communities, product-led
            growth, and more.
          </p>
        </div>

        {/* TODO: add redirection icons */}
        <div className="m-12 flex flex-row">
          <div>
            <img />
            <p>Follow me</p>
          </div>
          <div>
            <img />
            <p>get email updates</p>
          </div>
        </div>
      </div>
    </main>
  );
}
