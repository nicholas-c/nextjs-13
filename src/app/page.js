import Link from "next/link";

// async function getData() {
//   const [races, lastRace] = await Promise.all([
//     (
//       await (await fetch("https://ergast.com/api/f1/2022.json")).json()
//     ).MRData.RaceTable.Races,
//     (
//       await (
//         await fetch("http://ergast.com/api/f1/current/last/results.json")
//       ).json()
//     ).MRData.RaceTable.Races[0],
//   ]);

//   const nextRace = races[Number(lastRace.round)];

//   return {
//     lastRace,
//     nextRace,
//   };
// }

const Page = async () => {
  // const data = await getData();

  // console.log(data);

  return (
    <>
      <div>This is my page</div>
      <Link href="/second">Second page</Link>
    </>
  );
};

export default Page;
