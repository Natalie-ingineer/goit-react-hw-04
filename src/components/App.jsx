// import { ContactForm } from "./ContactForm/ContactForm";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { SearchBox } from "./SearchBox/SearchBox";

import { useState, useEffect } from "react";

export const App = () => {
  const [nameFilter, setNameFilter] = useState("");
  const [users, setUsers] = useState(() => {
    const savedUsers = window.localStorage.getItem("users-phonebook");

    if (savedUsers !== null) {
      return JSON.parse(savedUsers);
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  const visibleUsers = users.filter((user) =>
    user.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  const deleteUser = (userId) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== userId);
    });
  };

  const addUser = (newUser) => {
    setUsers((prevUsers) => {
      return [...prevUsers, newUser];
    });
  };

  useEffect(() => {
    window.localStorage.setItem("users-phonebook", JSON.stringify([...users]));
  }, [users]);

  return (
    <>
      <h1 className="caption">Phonebook</h1>
      <ContactForm onAdd={addUser} />
      <SearchBox value={nameFilter} onFilter={setNameFilter} />
      <ContactList items={visibleUsers} onDelete={deleteUser} />
    </>
  );
};
