import React from "react";
import { Link } from "react-router-dom";

export const ContactCard = ({ contact, onConfirmDelete }) => {
return (
<div className="card card-contacto p-4 mb-4 shadow-sm border-0">
<div className="row align-items-center">
<div className="col-auto">
<img 
src={'https://picsum.photos/200/200?random=' + contact.id} 
className="rounded-circle shadow" 
style={{width: "100px", height: "100px", objectFit: "cover"}} 
/>
</div>
<div className="col px-md-5">
<h3 className="fw-bold mb-3 text-gradient">{contact.name}</h3>
<div className="text-secondary">
<p className="mb-1 small"><i className="fas fa-map-marker-alt me-3 text-gradient"></i>{contact.address}</p>
<p className="mb-1 small"><i className="fas fa-phone me-3 text-gradient"></i>{contact.phone}</p>
<p className="mb-0 small"><i className="fas fa-envelope me-3 text-gradient"></i>{contact.email}</p>
</div>
</div>
<div className="col-auto d-flex gap-3">
<Link to={"/edit/" + contact.id} className="btn btn-light rounded-circle shadow-sm border-0 p-3">
<i className="fas fa-pencil-alt text-primary"></i>
</Link>
<button className="btn btn-light rounded-circle shadow-sm border-0 p-3" onClick={() => onConfirmDelete(contact.id)}>
<i className="fas fa-trash-alt text-danger"></i>
</button>
</div>
</div>
</div>
);
};
