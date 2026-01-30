import React from "react";

export const ConfirmModal = ({ show, onClose, onConfirm }) => {
if (!show) return null;
return (
<div className="modal d-block bg-dark bg-opacity-75" style={{ zIndex: 1050 }}>
<div className="modal-dialog modal-dialog-centered">
<div className="modal-content border-0 shadow-lg rounded-4">
<div className="modal-body py-5 text-center">
<i className="fas fa-exclamation-triangle text-warning display-1 mb-4"></i>
<h3 className="fw-bold mb-3">¿Eliminar contacto?</h3>
<p className="text-muted mb-4 px-4">Esta acción no se puede deshacer. El contacto se borrará permanentemente de tu lista.</p>
<div className="d-flex justify-content-center gap-3">
<button className="btn btn-light px-4 fw-bold" onClick={onClose}>Cancelar</button>
<button className="btn btn-danger px-4 fw-bold shadow-sm" onClick={onConfirm}>Sí, eliminar</button>
</div>
</div>
</div>
</div>
</div>
);
};
