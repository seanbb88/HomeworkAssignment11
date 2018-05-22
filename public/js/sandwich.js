

var sandwichCount = 0;

$("#add-sandwich").on("click", function (event) {
    event.preventDefault();
    var sandwich = $("#input-sandwich").val().trim();
    var p = $("<p>");
    p.attr("id", "item-" + sandwichCount);
    p.append(" " + sandwich);
    var button = $("<button>");
    button.attr("data-sandwich", sandwichCount);
    button.addClass("checkbox");
    button.append("✓");
    p = p.prepend(button);
    $("#sandwich-div").append(p);
    $("#input-sandwich").val("");
    sandwichCount;
});


$(document.body).on("click", ".checkbox", function () {
    var sandwichNumber = $(this).attr("data-sandwich");
    $("#item-" + sandwichNumber).remove();
});

