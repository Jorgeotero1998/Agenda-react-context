import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext.jsx";
import { ContactList } from "./views/ContactList.jsx";
import { AddContact } from "./views/AddContact.jsx";

const Layout = () => {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<ContactList />} />
<Route path="/add" element={<AddContact />} />
<Route path="/edit/:id" element={<AddContact />} />
<Route path="*" element={<h1 className="text-center mt-5">No encontrado</h1>} />
</Routes>
</BrowserRouter>
);
};

export default injectContext(Layout);
