const calcTotal = document.getElementById("calc"); calcTotal.addEventListener("submit", handleSubmit);


//Function is run on submit button click, creates an object out of the form data and logs to console
function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    const quote = formProps.width * formProps.length + formProps.value;
    console.log(quote);

  }

  