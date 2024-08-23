import { Bracket, IRoundProps } from "react-brackets";

const rounds: IRoundProps[] = [
  {
    title: "Quarterfinals",
    seeds: [
      {
        id: 1,
        date: new Date().toDateString(),
        teams: [{ name: "Team A" }, { name: "Team B" }],
      },
      {
        id: 2,
        date: new Date().toDateString(),
        teams: [{ name: "Team C" }, { name: "Team D" }],
      },
      {
        id: 3,
        date: new Date().toDateString(),
        teams: [{ name: "Team E" }, { name: "Team F" }],
      },
      {
        id: 3,
        date: new Date().toDateString(),
        teams: [{ name: "Team G" }, { name: "Team H" }],
      },
    ],
  },
  {
    title: "Semifinals",
    seeds: [
      {
        id: 3,
        date: new Date().toDateString(),
        teams: [{ name: "Team A" }, { name: "Team C" }],
      },
      {
        id: 3,
        date: new Date().toDateString(),
        teams: [{ name: "Team E" }, { name: "Team G" }],
      },
    ],
  },
  {
    title: "Finals",
    seeds: [
      {
        id: 4,
        date: new Date().toDateString(),
        teams: [{ name: "Team A" }, { name: "Team E" }],
      },
    ],
  },
  {
    title: "Champion",
    seeds: [
      {
        id: 5,
        date: new Date().toDateString(),
        teams: [{ name: "APUBCC" }],
      },
    ],
  },
];

export const TournamentChart = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Bracket rounds={rounds} mobileBreakpoint={1024} />
    </div>
  );
};
