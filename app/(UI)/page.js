"use client";
import NoteCard from "@/components/NoteCard";
import { useEffect, useState } from "react";
import axios from "axios";
import NoteForm from "@/components/NoteForm";
import EditNote from "@/components/EditNote";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [message, setMessage] = useState("");
  const [adding, setAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [newNote, setNewNote] = useState({ title: "", text: "" });
  const [update, setUpdate] = useState({ _id: "", title: "", text: "" });

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
      setTimeout(() => {
        setMessage("");
      }, 3000);
      setNotes((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleEditing = (id) => {
    const noteToEdit = notes.find((n) => n._id === id);
    if (noteToEdit) {
      setUpdate({
        _id: noteToEdit._id,
        title: noteToEdit.title,
        text: noteToEdit.text,
      });
    }
    setEditingId(id);
  };

  const btnUpdate = async (event, id) => {
    event.preventDefault();
    try {
      const note = await axios.put(`/api/update/${id}`, update, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const updatedNote = note.data.data;
      console.log(updatedNote);
      setMessage("updated");
      setNotes((prev) =>
        prev.map((note) => (note._id === id ? updatedNote : note))
      );
      setEditingId(null);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const addNote = async (event) => {
    event.preventDefault();
    const isEmpty = Object.values(newNote).some((n) => n.trim() === "");
    if (isEmpty) {
      setMessage("You can't add empty fields");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }
    try {
      const note = await axios.post("/api/create", newNote);
      const newNoteOnline = note.data.data;
      setMessage("Note added successfully");
      setNewNote({ title: "", text: "" });
      setNotes((prev) => [...prev, newNoteOnline]);
      setAdding(false);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="text-center text-red-800 text-xl font-bold animate-bounce">
        {message}
      </h1>
      {!adding ? (
        <button
          onClick={() => setAdding(true)}
          className="bg-green-800 mb-3 cursor-pointer text-white font-bold px-6 py-1 rounded-md hover:bg-green-600 hover:shadow-lg"
        >
          ADD NOTE
        </button>
      ) : (
        <button
          onClick={() => setAdding(false)}
          className="bg-green-800 mb-3 cursor-pointer text-white font-bold px-6 py-1 rounded-md hover:bg-green-600 hover:shadow-lg"
        >
          Cancel
        </button>
      )}

      {adding && (
        <NoteForm
          addNote={addNote}
          setMessage={setMessage}
          newNote={newNote}
          setNewNote={setNewNote}
        />
      )}

      <div className="grid grid-cols-3 gap-3">
        {!adding &&
          editingId === null &&
          notes.map((note) => (
            <NoteCard
              key={note._id}
              title={note.title.toUpperCase()}
              text={note.text}
              id={note._id}
              handleEditing={() => handleEditing(note._id)}
              btnDelete={() => btnDelete(note._id)}
            />
          ))}
      </div>
      <div className="flex flex-col justify-center items-center min-h-screen">
        {editingId !== null &&
          notes
            .filter((note) => note._id === editingId)
            .map((note) => (
              <EditNote
                key={note._id}
                setMessage={setMessage}
                update={update}
                setUpdate={setUpdate}
                btnUpdate={(e) => btnUpdate(e, note._id)}
              />
            ))}
      </div>
    </div>
  );
}
