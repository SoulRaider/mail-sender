const fromEmail = (<HTMLInputElement>document.getElementById("fromEmail"));
const toEmail = (<HTMLInputElement>document.getElementById("toEmail"));
const password = (<HTMLInputElement>document.getElementById("password"));
const title = (<HTMLInputElement>document.getElementById("title"));
const content = (<HTMLInputElement>document.getElementById("content"));
const sendEmailButton = (<HTMLButtonElement>document.getElementById("sendEmail"));
const alertMessage = (<HTMLDivElement>document.getElementById("messageToast"));

let sendEmail = async (fromEmail : string, password : string, toEmail : string, title : string, content : string) => {
    const dataToSend = {
        "fromEmail": fromEmail,
        "password": password,
        "toEmail": toEmail,
        "title": title,
        "content": content
    }
    let response = await fetch("/mail", {
        method: 'POST',
        headers: {
            'content-type': 'application/json;charset=UTF-8',
        },
        body: JSON.stringify(dataToSend),
    });

    if (response.ok) {
        alert("Mail sent !");
    }
}

sendEmailButton.addEventListener("click", () => sendEmail(toEmail.value, password.value, fromEmail.value, title.value, content.value));