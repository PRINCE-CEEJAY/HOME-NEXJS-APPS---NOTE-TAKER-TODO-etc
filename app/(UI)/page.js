"use client";
import NoteCard from "@/components/NoteCard";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const [notes, setNotes] = useState([]);
  const [message, setMessage] = useState("");
  const [adding, setAdding] = useState(false);
  const [newNote, setNewNote] = useState({ title: "", text: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMessage("");
    setNewNote((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const FetchNotes = async () => {
      try {
        const onlineNote = await axios.get("/api/read");
        onlineNote ? setNotes(onlineNote.data.data) : setNotes([]);
      } catch (error) {
        setMessage(error.message);
      }
    };
    FetchNotes();
  }, []);

  const btnDelete = async (id) => {
    try {
      await axios.delete(`/api/delete/${id}`);
      setMessage("note deleted");
      setNotes((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      setMessage(error.message);
    }
  };

  const addNote = async (event) => {
    event.preventDefault();
    try {
      const note = await axios.post("/api/create", newNote);
      const newNoteOnline = note.data.data;
      setMessage("Note added successfully");
      setNotes((prev) => [...prev, newNoteOnline]);
    } catch (error) {
      setMessage(error.message);
    }
  };
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-center text-red-800 text-xl font-bold animate-ping">
        {message}
      </h1>
      <button
        onClick={() => setAdding(true)}
        className="bg-green-800 cursor-pointer text-white font-bold px-6 py-1 rounded-md hover:bg-green-600 hover:shadow-lg"
      >
        ADD NOTE
      </button>
      {adding && (
        <form onSubmit={addNote} className="flex flex-col justify-around">
          <input
            type="text"
            name="title"
            placeholder="Enter Note title"
            value={newNote.title}
            onChange={handleChange}
            className="border border-white"
          />
          <textarea
            type="text"
            name="text"
            placeholder="Enter your notes here"
            value={newNote.text}
            onChange={handleChange}
            className="border border-white"
          />
          <button type="submit">Add</button>
        </form>
      )}
      <div className="flex gap-4 p-3">
        {notes.map((note) => (
          <NoteCard
            key={note._id}
            title={note.title}
            text={note.text}
            btnDelete={() => btnDelete(note._id)}
          />
        ))}
      </div>
    </div>
  );
}
