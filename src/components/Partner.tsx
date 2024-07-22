import Switch from "./Switch.tsx";
import Tails, { TailTypes } from "./Tails";
import { useIsDesktop } from "../utils/useIsDesktop.tsx";

interface IProps {
  name: string;
  description: string;
  image: string;
  color?: string;
  tail?: TailTypes;
  active: boolean;
  handleToggle: () => void;
}

export default function Partner({
  name,
  description,
  image,
  color,
  tail = TailTypes.CurvedLeftTop,
  active = false,
  handleToggle,
}: IProps) {
  const isDesktop = useIsDesktop();
  return (
    <>
      <div
        className={`flex justify-between items-center w-full md:w-280px px-5 py-4 rounded-3xl font-sf-pro border-2 ${active ? "border border-purple" : "border-gray"} transition-all duration-700 relative`}
      >
        <div className="flex gap-4">
          <div
            className={`w-12 h-12 rounded-2xl grid place-items-center`}
            style={{
              background: color,
            }}
          >
            <img
              src={image}
              alt="Amazon"
              className="w-10 h-10 object-cover rounded-2xl"
            />
          </div>
          <div className="text-left">
            <h2 className="text-xl">{name}</h2>
            <p className="text-lightPurple text-xs">{description}</p>
          </div>
        </div>
        <Switch active={active} handleToggle={handleToggle} />
        {isDesktop && <Tails tail={tail} active={active} />}
      </div>
    </>
  );
}
