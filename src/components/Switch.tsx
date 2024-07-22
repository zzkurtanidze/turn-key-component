interface IProps {
  active: boolean;
  handleToggle: () => void;
}

const Switch = ({ active, handleToggle }: IProps) => {
  return (
    <div
      className={`w-7 h-5 flex items-center rounded-full border-darkGray p-0.5 cursor-pointer ${
        active ? "bg-purple" : "bg-darkGray-300 border-3"
      }`}
      onClick={() => handleToggle()}
    >
      <div
        className={`w-2 h-2 rounded-full transform duration-300 ease-in-out ${
          active ? "bg-white translate-x-3" : "bg-darkGray translate-x-0"
        }`}
      ></div>
    </div>
  );
};

export default Switch;
