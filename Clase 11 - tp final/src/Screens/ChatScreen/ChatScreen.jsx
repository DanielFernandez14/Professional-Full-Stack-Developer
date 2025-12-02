import React from 'react'
import ChatList from "../ChatList/ChatList";
import { useState, useEffect } from 'react';
import { getContacts } from '../../Servicios/contactServices';

const ChatScreen = () => {
    const [contacts, setContacts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function loadContacts() {
        setLoading(true);

        setTimeout(() => {
            const data = getContacts();
            setContacts(data);
            setLoading(false);
        }, 1000);
    }

    function addNewContact(name) {
        const new_contact = {
            id: Date.now(),      
            user_id: Date.now(),

            user_name: name,
            profile_pic:
                "https://img.freepik.com/vector-gratis/icono-personaje-tecnologia-robot-ai_24877-83742.jpg?semt=ais_hybrid&w=740&q=80",
            last_connection: "Ahora",
            isConected: true,
        };

        setContacts((prev) => [...prev, new_contact]);
    }

    useEffect(loadContacts, []);

    return (
        <div>
            {loading ? (
                <span>Cargando contactos...</span>
            ) : (
                contacts && (
                    <ChatList
                        contacts={contacts}
                        addNewContact={addNewContact}
                    />
                )
            )}
        </div>
    );
};

export default ChatScreen;
