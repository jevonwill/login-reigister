
const results = document.querySelector('.results');

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  // prevent the form submit from refreshing the page
  event.preventDefault();

  const { length, width, email, address, value } = event.target;
  const quote = length + width * value;

	// Use your API endpoint URL you copied from the previous step
  const endpoint =
    "<https://5ntvcwwmec.execute-api.us-east-1.amazonaws.com/default/sendContactEmail>";
  // We use JSON.stringify here so the data can be sent as a string via HTTP
	const body = JSON.stringify({
    length: length.value,
    email: email.value,
    width: width.value,
    address: address.value,
    value: value.value,
    quote: quote.value
  });
  const requestOptions = {
    method: "POST",
    body
  };

  fetch(endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) throw new Error("Error in fetch");
      return response.json();
    })
    .then((response) => {
      console.log("Success!");
    })
    .catch((error) => {
      console.log("Error!")
    });
});