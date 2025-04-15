import TwinImage from "./twinImage";
import "../styles/customStyles.css";
import BentArrowIcon from "./arrowicon";

interface LinksCardProps {
  card_title_1: string;
  card_title_2: string;
  url: string;
}

const LinksCard: React.FC<LinksCardProps> = ({ card_title_1, card_title_2, url }) => {
  return (
    <div className="card normal-card flex items-center mt-10 min-w-full lg:min-w-fit">
      <a
        target="_blank"
        href={url}
        rel="noopener noreferrer"
        className="flex items-center p-4 m-1 ml-2 w-full justify-between"
      >
        <div className="flex items-center">
          <TwinImage imgName={card_title_1} />
          <div className="flex flex-col items-start p-1">
            <p className="text-base text-slate-200">{card_title_1}</p>
            <p className="text-sm text-slate-400">{card_title_2}</p>
          </div>
        </div>
        <BentArrowIcon />
      </a>
    </div>
  );
};

export default LinksCard;
