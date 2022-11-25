{
    const hi = () => {
        console.log("hello everybody and nice to meet you");
    }

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const button = document.querySelector(".js-button");
        const themeName = document.querySelector(".themeName");
        body.classList.toggle("dark");
        button.classList.toggle("yellow");
        themeName.innerText = body.classList.contains("dark") ? "Zapal" : "Zgaś";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackground);

        hi();
    };

    init();
}