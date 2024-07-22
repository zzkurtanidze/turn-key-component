import Partner from "./Partner.tsx";
import { useState } from "react";
import { TailTypes } from "./Tails";
import { useIsDesktop } from "../utils/useIsDesktop.tsx";

export default function TurnKey() {
  const isDesktop = useIsDesktop();
  const [selectedTab, setSelectedTab] = useState<string>("small_business");
  const [checkboxStates, setCheckboxStates] = useState<{
    [x: string]: boolean[];
  }>({
    small_business: Array(6)
      .fill(false)
      .map((_, index) => index === 5), // Sets the sixth item to true
    medium_business: Array(6)
      .fill(false)
      .map((_, index) => index === 0 || index === 1), // Sets the first and second items to true
    enterprise: Array(6).fill(false),
  });

  const toggleCheckbox = (i: number) => {
    const updatedStates = { ...checkboxStates };
    if (updatedStates[selectedTab] === undefined) {
      updatedStates[selectedTab] = [false, false, false, false, false, false];
    }
    updatedStates[selectedTab][i] = !updatedStates[selectedTab][i];
    setCheckboxStates(updatedStates);
  };

  const partners = [
    {
      name: "Sapling",
      description: "HR Management",
      tail: TailTypes.CurvedRightBottom,
      image: "/sapling.png",
      color: "#B5FFF2",
    },
    {
      name: "Workday",
      description: "HR Management",
      tail: TailTypes.StraightRight,
      image: "/workday.png",
      color: "#045BB8",
    },
    {
      name: "Xero",
      description: "Employers Base",
      tail: TailTypes.CurvedRightTop,
      image: "/xero.png",
      color: "#11B5EA",
    },
    {
      name: "Rippling",
      description: "HR Management",
      tail: TailTypes.CurvedLeftBottom,
      image: "/rippling.png",
      color: "#FEB902",
    },
    {
      name: "Expensify",
      description: "Salary Management",
      tail: TailTypes.StraightLeft,
      image: "/expensify.png",
      color: "#0B1B34",
    },
    {
      name: "Zenefits",
      description: "HR Management",
      image: "/zenefits.png",
      color: "#FF5745",
    },
  ];

  const tabs = [
    {
      key: "small_business",
      label: "Small Business",
    },
    {
      key: "medium_business",
      label: "Medium Business",
    },
    {
      key: "enterprise",
      label: "Enterprise",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="md:w-9/12 w-full rounded-full grid place-items-center p-8">
        <h1 className="font-circular text-4xl md:text-6xl text-darkPurple">
          Easy Turn-Key Integration
        </h1>
        <p className="text-xl mt-6 md:mt-10 text-lightPurple font-sf-pro">
          Increase job satisfaction, improve engagement, decrease burnout and
          lower payroll liability by reimagining what employees can do with
          their PTO
        </p>
      </div>
      <div className="flex w-full md:w-max justify-between px-5 text-xs font-sf-pro font-bold tracking-wider gap-2 md:border-0 border-b border-gray">
        {tabs.map((tab) => (
          <button
            name={tab.key}
            key={tab.key}
            className={`${
              isDesktop
                ? `${selectedTab == tab.key ? "bg-purple text-white" : "border border-gray text-lightPurple"} py-3 px-5 rounded-2xl transition-all`
                : `${
                    selectedTab == tab.key
                      ? "text-purple shadow-purple shadow-[inset_0_-3px_0px_#9D71FD]"
                      : "text-lightPurple"
                  } py-3 transition-all`
            }`}
            onClick={() => setSelectedTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row w-full md:w-[1220px] justify-between gap-6 font-sf-pro p-8">
        <div className="flex flex-col gap-5">
          {isDesktop &&
            partners
              .slice(0, 3)
              .map((partner, i) => (
                <Partner
                  {...partner}
                  key={partner.name}
                  active={
                    checkboxStates ? checkboxStates[selectedTab][i] : false
                  }
                  handleToggle={() => toggleCheckbox(i)}
                />
              ))}
        </div>
        <div className="md:w-[380px] w-full rounded-3xl border-2 bg-whitePurple border-purple relative mt-5 z-20">
          <div className="flex flex-col gap-4 relative -top-8 ">
            <img
              src="/user.jpg"
              alt={"Lauren"}
              className="w-24 h-24 object-cover relative rounded-2xl left-1/2 -translate-x-1/2"
            />
            <h2 className="text-xl font-bold">Lauren Robson</h2>
            <p className="text-lightPurple">HR Director</p>
            <p className="text-darkPurple mt-2">
              "I want to lower PTO liability and keep my employees happy. I want
              to lower PTO liability."
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          {partners.slice(isDesktop ? -3 : 0).map((partner, i) => {
            const index = !isDesktop ? i : i + 3;
            return (
              <Partner
                {...partner}
                key={partner.name}
                active={
                  checkboxStates ? checkboxStates[selectedTab][index] : false
                }
                handleToggle={() => toggleCheckbox(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
