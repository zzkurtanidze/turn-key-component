import Curved from "./Curved.tsx";
import Straight from "./Straight.tsx";

export enum TailTypes {
  StraightRight,
  StraightLeft,
  CurvedRightBottom,
  CurvedRightTop,
  CurvedLeftBottom,
  CurvedLeftTop,
}

export default function Tails({
  tail,
  active,
}: {
  tail: TailTypes;
  active: boolean;
}) {
  const getZIndex = (active: boolean) => (active ? "z-10" : "z-0");

  const tailComponents = {
    [TailTypes.CurvedRightBottom]: () => (
      <div
        className={`absolute translate-y-1/2 left-full ${getZIndex(active)}`}
      >
        <Curved active={active} flipped />
      </div>
    ),
    [TailTypes.StraightRight]: () => (
      <div className={`absolute left-full ${getZIndex(active)}`}>
        <Straight active={active} />
      </div>
    ),
    [TailTypes.CurvedRightTop]: () => (
      <div
        className={`absolute left-full -translate-y-1/2 ${getZIndex(active)}`}
      >
        <Curved active={active} />
      </div>
    ),
    [TailTypes.CurvedLeftBottom]: () => (
      <div
        className={`absolute right-full scale-x-flip translate-y-1/2 ${getZIndex(active)}`}
      >
        <Curved active={active} flipped />
      </div>
    ),
    [TailTypes.StraightLeft]: () => (
      <div className={`absolute right-full scale-x-flip ${getZIndex(active)}`}>
        <Straight active={active} />
      </div>
    ),
    [TailTypes.CurvedLeftTop]: () => (
      <div
        className={`absolute right-full scale-x-flip -translate-y-1/2 ${getZIndex(active)}`}
      >
        <Curved active={active} />
      </div>
    ),
  };

  return tailComponents[tail] ? tailComponents[tail]() : null;
}
