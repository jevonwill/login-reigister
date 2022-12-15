const calcTotal = document.getElementById("calc"); calcTotal.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
  }

  