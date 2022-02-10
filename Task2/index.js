async function getData() {
    var resObj = await fetch("https://reqres.in/api/users?page=2");
    var resBody = await resObj.json();

    var dataArr = resBody.data;
    var dataDiv = document.getElementById("data");
    var dataHtml = dataArr.map(function (item) {
        return ` <h6>${item.email}</h6>
                 <img src="${item.avatar}" /> `;
    })

    var htmlCode = dataHtml.join("");
    dataDiv.innerHTML = htmlCode;
}

getData();