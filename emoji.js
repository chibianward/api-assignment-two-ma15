$(document).ready(function () {

    // ================= Buttons ====================
    $("#candyBtn").click(function (event) {
        showEmoji("candy");
    });

    $("#sushiBtn").click(function (event) {
        showEmoji("sushi");
    });

    $("#coolBtn").click(function (event) {
        showEmoji("sunglasses");
    });

    $("#searchBtn").click(function (event) {
        var textField = $("#searchField").val();
        searchEmoji( $("#searchField").val()) 
    });


    // ================= showEmoji function ====================
    function showEmoji(emojiName) {
        var url = "https://www.emojidex.com/api/v1/emoji/" + emojiName;
        $.getJSON(url, function (data, textStatus, jqXHR) {

            $('#resultEmoji').text(data.moji)
            $('#resultTextCategory').text(data.category)
            $('#resultTextBase').text(data.base)
        })
    };

    // ================= searchEmoji function ====================
    function searchEmoji(textField) {
        var searchUrl = "https://www.emojidex.com/api/v1/search/emoji?code_cont=" + textField;
        $.getJSON(searchUrl, function (data, textStatus, jqXHR) {
            $('#searchResult').text(data.meta.total_count)
        });
    };

});