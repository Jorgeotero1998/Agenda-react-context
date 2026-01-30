import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.jsx";
import { motion } from "framer-motion";

export const AddContact = () => {
const { store, actions } = useContext(Context);
const params = useParams();
const navigate = useNavigate();
const [user, setUser] = useState({ name: "", email: "", phone: "", address: "" });

useEffect(() => {
if (params.id && store.contacts.length > 0) {
const contact = store.contacts.find(c => c.id == params.id);
if (contact) setUser(contact);
}
}, [params.id, store.contacts]);

const save = async (e) => {
e.preventDefault();
params.id ? await actions.updateContact(params.id, user) : await actions.addContact(user);
navigate("/");
};

return (
<motion.div 
initial={{ opacity: 0, scale: 0.9 }} 
animate={{ opacity: 1, scale: 1 }} 
className="container py-5"
>
<div className="row justify-content-center">
<div className="col-md-4 bg-white p-4 shadow-lg rounded-4 text-dark">
<h3 className="text-center mb-4 fw-bold text-gradient">{params.id ? "Editar" : "Nuevo"}</h3>
<form onSubmit={save}>
<div className="mb-2">
<label className="form-label fw-bold small mb-1">NOMBRE</label>
<input className="form-control border-0 bg-light p-2 shadow-sm" value={user.name} onChange={e => setUser({...user, name: e.target.value})} required />
</div>
<div className="mb-2">
<label className="form-label fw-bold small mb-1">EMAIL</label>
<input type="email" className="form-control border-0 bg-light p-2 shadow-sm" value={user.email} onChange={e => setUser({...user, email: e.target.value})} required />
</div>
<div className="mb-2">
<label className="form-label fw-bold small mb-1">TELÉFONO</label>
<input className="form-control border-0 bg-light p-2 shadow-sm" value={user.phone} onChange={e => setUser({...user, phone: e.target.value})} required />
</div>
<div className="mb-4">
<label className="form-label fw-bold small mb-1">DIRECCIÓN</label>
<input className="form-control border-0 bg-light p-2 shadow-sm" value={user.address} onChange={e => setUser({...user, address: e.target.value})} required />
</div>
<motion.button 
whileHover={{ scale: 1.02 }} 
whileTap={{ scale: 0.98 }}
type="submit" 
className="btn btn-nuevo w-100 py-2 shadow"
>
GUARDAR
</motion.button>
<Link to="/" className="d-block text-center mt-3 text-decoration-none text-muted small">Cerrar</Link>
</form>
</div>
</div>
</motion.div>
);
};
