const api = "api.php";

document.getElementById("form").addEventListener("submit", save);

window.onload = function() {
    load();
};

function load() {
    document.getElementById("addedit").innerHTML = "Új szoftver";

    fetch(api)
    .then(res => res.json())
    .then(data => {

        document.getElementById("message").innerText = data.status;

        let rows = "";

        data.readData.forEach(item => {
            rows += `
            <tr>
                <td>${item.id}</td>
                <td>${item.nev}</td>
                <td>${item.kategoria}</td>
                <td>
                    <button onclick='edit(${JSON.stringify(item)})'>Edit</button>
                    <button onclick='del(${item.id})'>Delete</button>
                </td>
            </tr>`;
        });

        document.getElementById("tabla").innerHTML = rows;
    });
}

function save(e) {
    e.preventDefault();

    const id = document.getElementById("id").value;
    const nev = document.getElementById("nev").value;
    const kategoria = document.getElementById("kategoria").value;

    const data = {
        id: id,
        nev: nev,
        kategoria: kategoria
    };

    const method = id ? "PUT" : "POST";

    fetch(api, {
        method: method,
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        e.target.reset();
        document.getElementById("message").innerText = data.status;
        document.getElementById("id").value = "";
        load();
    });
}

function edit(item) {
    document.getElementById("message").innerText = "";
    document.getElementById("addedit").innerHTML = "Szerkesztés";

    document.getElementById("id").value = item.id;
    document.getElementById("nev").value = item.nev;
    document.getElementById("kategoria").value = item.kategoria;
}

function del(id) {
    if (!confirm("Törlés?")) return;

    fetch(api, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({id})
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("message").innerText = data.status;
        load();
    });
}