import { useEffect, useState } from "react";
import axios from "axios";

function App() {

const [lista, setLista] = useState([]);
const [message, setMessage] = useState("");

const [nev, setNev] = useState("");
const [kategoria, setKategoria] = useState("");

const [editId, setEditId] = useState(null);

// betöltés
useEffect(() => {
    load();
}, []);

const load = async () => {
    const res = await axios.get("api.php");
    setLista(res.data.readData);

    setMessage(a => a + " " + res.data.status);
};

// CREATE + UPDATE
const submit = async () => {

    let res;

    if (editId) {
        res = await axios.put("api.php", {
            id: editId,
            nev,
            kategoria
        });
        setEditId(null);
    } else {
        res = await axios.post("api.php", {
            nev,
            kategoria
        });
    }

    setMessage(res.data.status);

    setNev("");
    setKategoria("");

    load();
};

// EDIT
const edit = (item) => {
    setEditId(item.id);
    setNev(item.nev);
    setKategoria(item.kategoria);
};

// DELETE
const del = async (id) => {
    if (!confirm("Törlés?")) return;

    const res = await axios.delete("api.php", {
        data: { id }
    });

    setMessage(res.data.status);
    load();
};

// UI
return (
<div>

<p>{message}</p>

<h3>React + Axios CRUD</h3>

<div>
<input 
    value={nev} 
    onChange={(e) => setNev(e.target.value)} 
    placeholder="Név"
/>

<input 
    value={kategoria} 
    onChange={(e) => setKategoria(e.target.value)} 
    placeholder="Kategória"
/>

<button onClick={submit}>
    {editId ? "Update" : "Add"}
</button>
</div>

<table border="1">
<thead>
<tr>
<th>ID</th>
<th>Név</th>
<th>Kategória</th>
<th>Művelet</th>
</tr>
</thead>

<tbody>
{lista.map((item) => (
<tr key={item.id}>
<td>{item.id}</td>
<td>{item.nev}</td>
<td>{item.kategoria}</td>
<td>
<button onClick={() => edit(item)}>Edit</button>
<button onClick={() => del(item.id)}>Delete</button>
</td>
</tr>
))}
</tbody>

</table>

</div>
);
}

export default App;