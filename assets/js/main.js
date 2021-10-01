const myImage = document.getElementById("img-selector");

function changeImage(e) {
    switch (e.id) {
        case "splash-screen":
            myImage.src = ("images/img-splash-screen.png");
            break;
        case "login":
            myImage.src = ("images/img-login.png");
            break;
        case "profile":
            myImage.src = ("images/img-profile.png");
            break;
        case "vaga":
            myImage.src = ("images/img-job-vacancy.png");
            break;
        case "match":
            myImage.src = ("images/img-match.png");
            break;
        case "chat":
            myImage.src = ("images/img-chat.png");
            break;
        default:
            myImage.src = ("images/img-splash-screen.png");
            break;
    }
};