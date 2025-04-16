import DataCard from "./components/datacard";
import LinksCard from "./components/linkscard";
import LanguageBox from "./components/languagebox";
import JsonData from "./Data/data.json";

import Link from "next/link";
import BentArrowIcon from "./components/arrowicon";

export default function Home() {
  return (
    <main className="flex min-h-screen w-[100%] flex-col items-center p-10">
      <div className="w-full md:w-[90%] lg:w-[55%]">
        {/* nav bar */}
        <div className="z-10 w-full md:w-[90%] lg:w-[60%] max-w-5xl font-mono text-sm lg:flex">
          <ul className="flex flex-wrap md:flex-row">
            {JsonData.Header.map((data, index) => (
              <li className="px-4" key={index + data}>
                {/* TODO: add "Blogs" on nav bar */}
                <Link href={data === "home" ? "/" : `/${data}`}>
                  {data}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* body */}
        <div className="m-4 md:m-12 mt-20 md:mt-20 ">
          <p className="text-2xl">hey, i am Avi 👋🏻</p>
          <p className="mt-8 sm:text-sm leading-relaxed">{JsonData.intro.intro_para_1}</p>
        </div>

        {/* <div className="m-12 mt-10 h-96 bg-blue-50"></div> */}

        <p className="text-sm leading-relaxed m-4 md:m-12 mt-10 md:mt-20">{JsonData.intro.intro_para_2}</p>

        <div className="m-4 md:m-12 mt-10 flex flex-col md:flex-row gap-4">
          <LinksCard
            card_title_1={"LinkedIN"}
            card_title_2={"Let's Connect"}
            url={"https://www.linkedin.com/in/avi-jha"} />
          <LinksCard
            card_title_1={"Git-Hub"}
            card_title_2={"See my Projects"}
            url={"https://github.com/avi-jha"} />
        </div>

        <p className="text-sm leading-relaxed m-4 md:m-12 mt-10 md:mt-20">{JsonData.intro.intro_para_3}</p>

        {/* <div className="m-12 flex flex-col items-center w-fill">
          <DataCard
            title={JsonData.DataCard.title.title_1}
            subtitle={JsonData.DataCard.subtitle.subtitle_1}
          />
          <DataCard
            title={JsonData.DataCard.title.title_2}
            subtitle={JsonData.DataCard.subtitle.subtitle_2}
          />
        </div> */}

        <div className="flex flex-wrap gap-2 mt-4">
          <p className="text-sm leading-relaxed m-4 md:m-12 mt-10 md:mt-20">
            I have worked with the following technologies. Learning and implementing new theories to the test.
          </p>
          <div className="lg:flex lg:flex-row items-center justify-center grid grid-cols-2 w-full m-4">
            {JsonData.LanguageBox.map((data, index) => (
              <LanguageBox key={index} title={data} />
            ))}
          </div>
        </div>


        <p className="text-sm leading-relaxed m-4 md:m-12 mt-10 md:mt-20">
          I&apos;ve worked with and advised companies on developer marketing,
          developer relations, building open-source communities, product-led
          growth, and more.
        </p>


        {/* TODO: add redirection icons */}
        {/* <div className="m-12 flex flex-row">
          <div className="mt-5 ">
            <Link href="/contact" className="contact-me flex flex-row">
              <BentArrowIcon />
              <p className=" contact-me text-slate-400">contact me</p>
            </Link>
          </div>
          <div className="mt-5 ml-8">
            <Link href="" className="contact-me flex flex-row">
              <BentArrowIcon />
              <p className=" contact-me text-slate-400">get email updates</p>
            </Link>
          </div>
        </div> */}
      </div>
    </main>
  );
}
