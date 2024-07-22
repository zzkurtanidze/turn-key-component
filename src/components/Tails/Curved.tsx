export default function Curved({
  active,
  origin = "origin-center",
  flipped = false,
}: {
  active?: boolean;
  origin?: string;
  flipped?: boolean;
}) {
  return (
    <div className={`relative`}>
      <svg
        version="1.2"
        viewBox="0 0 150 105.99999"
        width="150"
        height="106"
        id="svg1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs id="defs1" />
        <path
          fill="none"
          stroke="#DED7FD"
          strokeWidth="3"
          d={
            flipped
              ? "M148.268 103.723h-41.194a31.887 31.887 0 0 1-31.886-31.887V46.642 M2.101 2.14h41.194A31.887 31.887 45 0 1 75.18 34.027V59.22"
              : "M148.268 2.14h-41.194a31.887 31.887 0 0 0-31.886 31.887V59.22M2.101 103.723h41.194A31.887 31.887 0 0 0 75.18 71.836V46.642"
          }
        />
      </svg>
      <div
        className={`${active ? "w-36" : "w-0"} ${origin} absolute top-0 overflow-hidden transition-all ease-out duration-500`}
      >
        <svg
          version="1.2"
          viewBox="0 0 150 105.99999"
          width="150"
          height="106"
          id="svg1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs id="defs1">
            <clipPath id="clipPath">
              <rect id="clipRect" x="0" y="0" width="100%" height="100%" />
            </clipPath>
          </defs>
          <g clipPath={"url(#clipPath)"} id="layer1">
            <path
              fill="none"
              stroke="#9D71FD"
              strokeWidth="3"
              d={
                flipped
                  ? "M148.268 103.723h-41.194a31.887 31.887 0 0 1-31.886-31.887V46.642 M2.101 2.14h41.194A31.887 31.887 45 0 1 75.18 34.027V59.22"
                  : "M148.268 2.14h-41.194a31.887 31.887 0 0 0-31.886 31.887V59.22M2.101 103.723h41.194A31.887 31.887 0 0 0 75.18 71.836V46.642"
              }
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
