const calcTotal = document.getElementById("calc");
 calcTotal.addEventListener("submit", handleSubmit);
const results = document.querySelector('.results');

//Function is run on submit button click, creates an object out of the form data and logs to console
function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const quote = formProps.width * formProps.length + formProps.value;

    console.log(quote);
    results.innerHTML = `<h1>${quote}</h1>`
  }

  