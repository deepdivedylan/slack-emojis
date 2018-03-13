var htmlRows = document.getElementsByClassName("emoji_row");
var rows = [].slice.call(htmlRows);
var uniqueRows = rows.filter(row => row.children[2].innerText === "Image");
var emojis = [];

uniqueRows.map(row => {
	let url = row.children[0].children[0].attributes.getNamedItem("data-original").nodeValue;
	let name = row.children[1].innerText;
	emojis.push({name: name, url: url});
});
