var PageError = {};
PageError.PageNotFound = function() {
    document.write('Данной страницы пока что не существует!<br>');
    document.write("<a href=\"MainPage.html\">Вернуться на главную страницу</a>");
}