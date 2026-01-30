const getState = ({ getStore, getActions, setStore }) => {
return {
store: {
contacts: []
},
actions: {
getContacts: async () => {
const response = await fetch("https://playground.4geeks.com/contact/agendas/jorge/contacts");
if (response.ok) {
const data = await response.json();
setStore({ contacts: data.contacts });
} else if (response.status === 404) {
await fetch("https://playground.4geeks.com/contact/agendas/jorge", { method: "POST" });
}
},
addContact: async (contact) => {
await fetch("https://playground.4geeks.com/contact/agendas/jorge/contacts", {
method: "POST",
body: JSON.stringify(contact),
headers: { "Content-Type": "application/json" }
});
getActions().getContacts();
},
updateContact: async (id, contact) => {
await fetch("https://playground.4geeks.com/contact/agendas/jorge/contacts/" + id, {
method: "PUT",
body: JSON.stringify(contact),
headers: { "Content-Type": "application/json" }
});
getActions().getContacts();
},
deleteContact: async (id) => {
await fetch("https://playground.4geeks.com/contact/agendas/jorge/contacts/" + id, {
method: "DELETE"
});
getActions().getContacts();
}
}
};
};
export default getState;
