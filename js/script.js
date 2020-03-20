const logInButton = document.getElementById("logIn");
const logInUser = document.getElementById("user");
const logInPass = document.getElementById("pass");
const formMessage = document.getElementById("formMessage");

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
        method: 'POST',
        body: data // Body data in formated as HTML Form
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}

async function run(myData) {
    const validate = await postData('../API/index.php', myData);
    if (validate.status == false)
        formMessage.innerHTML = validate.message;
    else {
        formMessage.innerHTML = "Now go to the next page, and get the information from the user.";
    }
}

logInButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    const data = new FormData();
    data.append('action', "logIn");
    data.append('name', logInUser.value);
    data.append('password', logInPass.value);
    run(data);
    
});