document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".nav-button");
    const pages = document.querySelectorAll(".page");


    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const targetPage = button.dataset.page;


            // Убираем active со всех кнопок
            buttons.forEach((btn) => {
                btn.classList.remove("active");
            });


            // Делаем нажатую кнопку активной
            button.classList.add("active");


            // Скрываем все разделы
            pages.forEach((page) => {
                page.classList.remove("active");
            });


            // Показываем нужный раздел
            const selectedPage =
                document.getElementById(targetPage);


            if (selectedPage) {

                selectedPage.classList.add("active");

            }

        });

    });

});