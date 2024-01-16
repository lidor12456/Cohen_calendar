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

async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any additional headers if needed
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("POST request successful:", responseData);

    // return the response data if needed
    return responseData;
  } catch (error) {
    console.error("Error during POST request:", error.message);
    // Handle the error as needed
  }
}

module.exports = { fetchSixYearsOfPersonsDates, postData };
