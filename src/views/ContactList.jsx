import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext.jsx";
import { ContactCard } from "../component/ContactCard.jsx";
import { ConfirmModal } from "../component/ConfirmModal.jsx";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ContactList = () => {
const { store, actions } = useContext(Context);
const [modal, setModal] = useState({ show: false, id: null });

useEffect(() => { actions.getContacts(); }, []);

return (
<motion.div 
initial={{ opacity: 0, y: 20 }} 
animate={{ opacity: 1, y: 0 }} 
transition={{ duration: 0.5 }}
className="container py-5"
>
<div className="d-flex justify-content-between align-items-center mb-5">
<h1 className="fw-bold text-white display-4">Agenda de Jorge</h1>
<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
<Link to="/add" className="btn btn-nuevo rounded-pill shadow-lg">
+ Nuevo Contacto
</Link>
</motion.div>
</div>
<div className="row justify-content-center">
<div className="col-md-10">
{store.contacts.map((item, index) => (
<motion.div 
key={item.id}
initial={{ opacity: 0, x: -20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ delay: index * 0.1 }}
>
<ContactCard 
contact={item} 
onConfirmDelete={(id) => setModal({ show: true, id: id })} 
/>
</motion.div>
))}
</div>
</div>
<ConfirmModal 
show={modal.show} 
onClose={() => setModal({ show: false, id: null })} 
onConfirm={async () => {
await actions.deleteContact(modal.id);
setModal({ show: false, id: null });
}} 
/>
</motion.div>
);
};
