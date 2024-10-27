interface CitrusFruitsProps {
  fruit: CitrusFruitOption;
}

export type CitrusFruitOption = "lemon" | "lime" | "orange" | "bloodorange";

export function CitrusFruit({ fruit }: CitrusFruitsProps) {
  const title = `a sliced ${fruit} dripping with juice`;
  let color;
  let insideColor;

  switch (fruit) {
    case "lemon":
      color = "#FFDB1E";
      insideColor = "#FFDB1E";
      break;
    case "lime":
      color = "green";
      insideColor = "#86efac";
      break;
    case "orange":
      color = "#ffa500";
      insideColor = "#ffcc99";
      break;
    case "bloodorange":
      color = "#ff0000";
      insideColor = "#ff8888";
      break;
    default:
      throw new Error(
        "Your citrus fruit of choice is currently not supported."
      );
  }

  return (
    <svg
      data-fruit={fruit}
      width="128"
      height="128"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <path
        d="M34.092 8.845C38.929 20.652 34.092 27 30 30.5c1 3.5-2.986 4.222-4.5 2.5-4.457 1.537-13.512 1.487-20-5C2 24.5 4.73 16.714 14 11.5c8-4.5 16-7 20.092-2.655Z"
        fill={color}
      />
      <path
        d="M14 11.5c6.848-4.497 15.025-6.38 18.368-3.47C37.5 12.5 21.5 22.612 15.5 25c-6.5 2.587-3 8.5-6.5 8.5-3 0-2.5-4-5.183-7.75C2.232 23.535 6.16 16.648 14 11.5Z"
        fill="#fff"
        stroke={color}
      />
      <path
        d="M28.535 8.772c4.645 1.25-.365 5.695-4.303 8.536-3.732 2.692-6.606 4.21-7.923 4.83-.366.173-1.617-2.252-1.617-1 0 .417-.7 2.238-.934 2.326-1.365.512-4.223 1.29-5.835 1.29-3.491 0-1.923-4.754 3.014-9.122.892-.789 1.478-.645 2.283-.645-.537-.773-.534-.917.403-1.546C17.79 10.64 23 8.77 25.212 8.42c.366.014.82.35.82.629.41-.14 2.095-.388 2.503-.278Z"
        fill={insideColor}
      />
      <path
        d="M14.297 16.49c.985-.747 1.644-1.01 2.099-2.526.566.121.841-.08 1.29-.701.324.466 1.657.608 2.453.701-.715.451-1.057.852-1.452 2.106-1.464-.611-3.167-.302-4.39.42Z"
        fill="#fff"
      />
    </svg>
  );
}
