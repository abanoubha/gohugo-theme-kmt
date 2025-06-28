document.addEventListener('DOMContentLoaded', function () {
    var tables = document.querySelectorAll('table');

    tables.forEach(function (table) {
        var scrollableDiv = document.createElement('div');
        scrollableDiv.style.overflowX = 'auto';
        scrollableDiv.appendChild(table.cloneNode(true));
        table.parentNode.insertBefore(scrollableDiv, table);
        table.parentNode.removeChild(table);
    });

    var stars = 800;
    var $stars = document.querySelector(".stars");

    if ($stars) {
        for (var i = 0; i < stars; i++) {
            var $star = document.createElement("div");
            $star.classList.add("star");
            $stars.appendChild($star);
        }

        document.querySelectorAll(".star").forEach(function ($starElement) {
            var s = 0.2 + (Math.random() * 1);
            var curR = 800 + (Math.random() * 300); // Using '800' directly, or 'r' if 'r' is global and not overwritten
            // In your original code, 'r' was 800, so I've used 800 directly here for clarity.
            // If you intend 'r' to be a configurable variable, keep it.

            $starElement.style.transformOrigin = "0 0 " + curR + "px";
            $starElement.style.transform = "translate3d(0,0,-" + curR + "px) rotateY(" + (Math.random() * 360) + "deg) rotateX(" + (Math.random() * -50) + "deg) scale(" + s + "," + s + ")";
        });
    } else {
        console.error("Element with class 'stars' not found. Please ensure it exists in your HTML.");
    }

});
