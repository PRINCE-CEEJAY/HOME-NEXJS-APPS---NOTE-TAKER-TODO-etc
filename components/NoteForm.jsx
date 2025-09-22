const NoteForm = ({ addNote, newNote, setNewNote, setMessage }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setMessage("");
    setNewNote((prev) => ({ ...prev, [name]: value }));
  };
  return (
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
  );
};

export default NoteForm;
