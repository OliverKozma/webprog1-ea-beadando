import { useState } from 'react'
import './App.css'

function App() {
  
  const [gepList, setGepList] = useState([
   { id: 1, hely: "T403", tipus: "asztali", ipcim: "192.168.2.1" },
  { id: 2, hely: "T212", tipus: "asztali", ipcim: "192.168.2.2" },
  { id: 3, hely: "T302", tipus: "asztali", ipcim: "192.168.2.3" },
  { id: 4, hely: "T108", tipus: "notebook", ipcim: "192.168.1.1" },
  { id: 5, hely: "T301", tipus: "asztali", ipcim: "192.168.2.4" },
  { id: 6, hely: "T306", tipus: "asztali", ipcim: "192.168.2.5" },
  { id: 7, hely: "T209", tipus: "notebook", ipcim: "192.168.4.1" },
  { id: 8, hely: "T208", tipus: "notebook", ipcim: "192.168.4.2" },
  { id: 9, hely: "T110", tipus: "notebook", ipcim: "192.168.1.2" },
  { id: 10, hely: "T310", tipus: "asztali", ipcim: "192.168.2.6" },
  { id: 11, hely: "T207", tipus: "asztali", ipcim: "192.168.2.7" },
  { id: 12, hely: "T109", tipus: "notebook", ipcim: "192.168.1.3" },
  { id: 13, hely: "T104", tipus: "asztali", ipcim: "192.168.2.8" },
  { id: 14, hely: "T208", tipus: "notebook", ipcim: "192.168.4.3" },
  { id: 15, hely: "T106", tipus: "notebook", ipcim: "192.168.1.4" },
  { id: 16, hely: "T201", tipus: "asztali", ipcim: "192.168.2.9" },
  { id: 17, hely: "T309", tipus: "asztali", ipcim: "192.168.2.10" },
  { id: 18, hely: "T402", tipus: "asztali", ipcim: "192.168.2.11" },
  { id: 19, hely: "T404", tipus: "asztali", ipcim: "192.168.2.12" },
  { id: 20, hely: "T110", tipus: "notebook", ipcim: "192.168.1.5" },
  { id: 21, hely: "T107", tipus: "asztali", ipcim: "192.168.2.13" },
  { id: 22, hely: "T205", tipus: "notebook", ipcim: "192.168.1.6" },
  { id: 23, hely: "T010", tipus: "asztali", ipcim: "192.168.2.14" },
  { id: 24, hely: "T009", tipus: "asztali", ipcim: "192.168.2.15" },
  { id: 25, hely: "T001", tipus: "notebook", ipcim: "192.168.1.7" },
  { id: 26, hely: "T401", tipus: "notebook", ipcim: "192.168.1.8" },
  { id: 27, hely: "T305", tipus: "asztali", ipcim: "192.168.3.1" },
  { id: 28, hely: "T102", tipus: "notebook", ipcim: "192.168.1.9" },
  { id: 29, hely: "T208", tipus: "notebook", ipcim: "192.168.4.4" },
  { id: 30, hely: "T408", tipus: "asztali", ipcim: "192.168.2.16" },
  { id: 31, hely: "T007", tipus: "asztali", ipcim: "192.168.3.2" },
  { id: 32, hely: "T011", tipus: "notebook", ipcim: "192.168.1.10" },
  { id: 33, hely: "T004", tipus: "asztali", ipcim: "192.168.2.17" },
  { id: 34, hely: "T202", tipus: "asztali", ipcim: "192.168.2.18" },
  { id: 35, hely: "T006", tipus: "asztali", ipcim: "192.168.3.3" },
  { id: 36, hely: "T407", tipus: "asztali", ipcim: "192.168.2.19" },
  { id: 37, hely: "T304", tipus: "notebook", ipcim: "192.168.1.11" },
  { id: 38, hely: "T203", tipus: "notebook", ipcim: "192.168.1.12" },
  { id: 39, hely: "T105", tipus: "asztali", ipcim: "192.168.2.20" },
  { id: 40, hely: "T103", tipus: "asztali", ipcim: "192.168.2.21" },
  { id: 41, hely: "T003", tipus: "notebook", ipcim: "192.168.1.13" },
  { id: 42, hely: "T311", tipus: "asztali", ipcim: "192.168.2.22" },
  { id: 43, hely: "T007", tipus: "asztali", ipcim: "192.168.3.4" },
  { id: 44, hely: "T008", tipus: "asztali", ipcim: "192.168.2.23" },
  { id: 45, hely: "T206", tipus: "asztali", ipcim: "192.168.2.24" },
  { id: 46, hely: "T307", tipus: "asztali", ipcim: "192.168.2.25" },
  { id: 47, hely: "T106", tipus: "notebook", ipcim: "192.168.1.14" },
  { id: 48, hely: "T312", tipus: "asztali", ipcim: "192.168.2.26" },
  { id: 49, hely: "T308", tipus: "notebook", ipcim: "192.168.1.15" },
  { id: 50, hely: "T211", tipus: "notebook", ipcim: "192.168.1.16" },
  { id: 51, hely: "T406", tipus: "asztali", ipcim: "192.168.2.27" },
  { id: 52, hely: "T002", tipus: "asztali", ipcim: "192.168.2.28" },
  { id: 53, hely: "T012", tipus: "asztali", ipcim: "192.168.2.29" },
  { id: 54, hely: "T110", tipus: "notebook", ipcim: "192.168.1.17" },
  { id: 55, hely: "T102", tipus: "notebook", ipcim: "192.168.1.18" },
  { id: 56, hely: "T108", tipus: "notebook", ipcim: "192.168.1.19" },
  { id: 57, hely: "T303", tipus: "asztali", ipcim: "192.168.2.30" },
  { id: 58, hely: "T005", tipus: "notebook", ipcim: "192.168.1.20" },
  { id: 59, hely: "T006", tipus: "asztali", ipcim: "192.168.3.5" },
  { id: 60, hely: "T203", tipus: "notebook", ipcim: "192.168.1.21" },
  { id: 61, hely: "T111", tipus: "asztali", ipcim: "192.168.2.31" },
  { id: 62, hely: "T208", tipus: "notebook", ipcim: "192.168.4.5" },
  { id: 63, hely: "T106", tipus: "notebook", ipcim: "192.168.1.22" },
  { id: 64, hely: "T409", tipus: "notebook", ipcim: "192.168.1.23" },
  { id: 65, hely: "T005", tipus: "notebook", ipcim: "192.168.1.24" },
  { id: 66, hely: "T101", tipus: "asztali", ipcim: "192.168.2.32" },
  { id: 67, hely: "T005", tipus: "notebook", ipcim: "192.168.1.25" },
  { id: 68, hely: "T405", tipus: "asztali", ipcim: "192.168.2.33" },
  { id: 69, hely: "T305", tipus: "asztali", ipcim: "192.168.3.6" },
  { id: 70, hely: "T204", tipus: "asztali", ipcim: "192.168.2.34" },
  { id: 71, hely: "T112", tipus: "notebook", ipcim: "192.168.1.26" },
  { id: 72, hely: "T305", tipus: "asztali", ipcim: "192.168.3.7" },
  { id: 73, hely: "T003", tipus: "notebook", ipcim: "192.168.1.27" },
  { id: 74, hely: "T305", tipus: "asztali", ipcim: "192.168.3.8" },
  { id: 75, hely: "T210", tipus: "asztali", ipcim: "192.168.2.35" },
  { id: 76, hely: "T208", tipus: "notebook", ipcim: "192.168.4.6" }
  ]);

  
  const [formData, setFormData] = useState({ hely: "", tipus: "", ipcim: "" });
  const [editingId, setEditingId] = useState(null);

  
  const handleSave = () => {
    if (!formData.hely || !formData.tipus || !formData.ipcim) {
      alert("Minden mezőt tölts ki!");
      return;
    }

    if (editingId !== null) {
      
      setGepList(gepList.map(g => g.id === editingId ? { ...formData, id: editingId } : g));
      setEditingId(null);
    } else {
      
      const newId = gepList.length > 0 ? Math.max(...gepList.map(g => g.id)) + 1 : 1;
      setGepList([...gepList, { ...formData, id: newId }]);
    }
    setFormData({ hely: "", tipus: "", ipcim: "" });
  };

  
  const handleDelete = (id) => {
    if (window.confirm("Biztosan törölni szeretnéd ezt a gépet?")) {
      setGepList(gepList.filter(g => g.id !== id));
    }
  };

  
  const startEdit = (gep) => {
    setFormData({ hely: gep.hely, tipus: gep.tipus, ipcim: gep.ipcim });
    setEditingId(gep.id);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  return (
    <div className="container">
      
      <header>
        <h1>Web programozás-1 Előadás Házi feladat</h1>
      </header>

      <main>
        <h2>React CRUD - Géptermi leltár</h2>
        
        
        <div className="form-box">
          <h3>{editingId !== null ? "Gép adatainak módosítása" : "Új gép felvétele"}</h3>
          <div className="form-group">
            <input 
              type="text" placeholder="Helyszín" 
              value={formData.hely} 
              onChange={(e) => setFormData({...formData, hely: e.target.value})} 
            />
            <input 
              type="text" placeholder="Típus (asztali/notebook)" 
              value={formData.tipus} 
              onChange={(e) => setFormData({...formData, tipus: e.target.value})} 
            />
            <input 
              type="text" placeholder="IP cím" 
              value={formData.ipcim} 
              onChange={(e) => setFormData({...formData, ipcim: e.target.value})} 
            />
            <button 
              className={editingId !== null ? "btn-edit-mode" : "btn-add"} 
              onClick={handleSave}
            >
              {editingId !== null ? "Módosítás mentése" : "Hozzáadás"}
            </button>
            {editingId !== null && (
              <button className="btn-cancel" onClick={() => {setEditingId(null); setFormData({hely:"", tipus:"", ipcim:""})}}>Mégse</button>
            )}
          </div>
        </div>

        
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Hely</th>
              <th>Típus</th>
              <th>IP cím</th>
              <th>Műveletek</th>
            </tr>
          </thead>
          <tbody>
            {gepList.map(gep => (
              <tr key={gep.id}>
                <td>{gep.id}</td>
                <td>{gep.hely}</td>
                <td>{gep.tipus}</td>
                <td>{gep.ipcim}</td>
                <td className="actions">
                  <button className="action-btn-edit" onClick={() => startEdit(gep)}>Szerkesztés</button>
                  <button className="action-btn-delete" onClick={() => handleDelete(gep.id)}>Törlés</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      
      <footer>
        
        <p> <strong>Készítők:</strong>
            Kozma Olivér - HVZ9U1 és
            Hupka Bálint - KJWO66
        </p>
    </footer>
    </div>
  )
}

export default App