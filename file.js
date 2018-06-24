var list = document.getElementsByClassName("UFIList");

if (list.length) {

    var elements = list[0].getElementsByClassName("UFIRow");

    let csvContent = "data:text/csv;charset=utf-8,";

    let length = elements.length-1;
    console.log(length-2 + " comments found!");

    for (var x=2; x<length; x++) {
        var ele = elements[x];
        var node = ele.getElementsByClassName("UFICommentActorName")[0];
        var name = node.innerText;
        var link = node.href;

        var rowArray = [x-1, name, link];
        csvContent += rowArray.join(",") + "\r\n";
    }

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "export.csv");
    link.innerHTML= "Click Here to download";
    document.body.appendChild(link); // Required for FF

    link.click();
    console.log("Check CSV!");

} else {

    console.log("No comments found!");

}