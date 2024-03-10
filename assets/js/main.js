document.addEventListener('DOMContentLoaded', function () {
    var tables = document.querySelectorAll('table');

    tables.forEach(function (table) {
        var scrollableDiv = document.createElement('div');
        scrollableDiv.style.overflowX = 'auto';
        scrollableDiv.appendChild(table.cloneNode(true));
        table.parentNode.insertBefore(scrollableDiv, table);
        table.parentNode.removeChild(table);
    });
});
