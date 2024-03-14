import { HDate, months } from "@hebcal/core";

function page() {
  const hd1 = new HDate();
  const hd2 = new HDate(new Date(2008, 10, 13));
  const hd3 = new HDate(15, "Cheshvan", 5769);
  const hd4 = new HDate(15, months.CHESHVAN, 5769);
  const hd5 = new HDate(733359); // ==> 15 Cheshvan 5769
  const monthName = "אייר";
  const hd6 = new HDate(5, monthName, 5773);

  console.log(hd2);
  console.log(hd2.greg());

  return <div>hey</div>;
}

export default page;
