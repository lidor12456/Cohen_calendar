async function fetchSixYearsOfPersonsDates(person) {
  try {
    const response = await fetch(
      `https://www.hebcal.com/yahrzeit?cfg=json&n1=${person.name}&t1=Birthday&d1=${person.day}&m1=${person.month}&y1=${person.year}&hebdate=on&hdp=1&years=6`
    );
    const persons = await response.json();
    return persons;
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = { fetchSixYearsOfPersonsDates };
