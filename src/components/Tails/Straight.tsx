export default function Straight({ active = false }: { active?: boolean }) {
  return (
    <>
      <div
        className={`w-[150px] h-[3px] rounded bg-[#DED6FD] transition-all`}
      ></div>
      <div
        className={`${active ? "w-[150px]" : "w-0"} h-[3px] absolute top-0 bg-purple rounded transition-all ease-out duration-500`}
      ></div>
    </>
  );
}
