import css from "./ContactList.module.css";
import { Contact } from "../Contact/Contact";

export const ContactList = ({ items, onDelete }) => {
  return (
    <ul className={css.listContacts}>
      {items.map((item) => (
        <Contact
          key={item.id}
          userId={item.id}
          contact={item.name}
          phonenumber={item.number}
          onDeleteUser={onDelete}
        ></Contact>
      ))}
    </ul>
  );
};
