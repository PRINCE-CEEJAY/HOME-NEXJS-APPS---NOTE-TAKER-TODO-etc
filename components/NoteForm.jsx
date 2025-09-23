const NoteForm = ({ addNote, newNote, setNewNote, setMessage }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setMessage("");
    setNewNote((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <form
      onSubmit={addNote}
      className="flex flex-col justify-center w-122 min-h-screen p-1"
    >
      <label htmlFor="title" className="font-bold text-xl text-blue-800">
        Enter Note Title
      </label>
      <input
        id="title"
        type="text"
        name="title"
        placeholder="Enter Note title"
        value={newNote.title}
        onChange={handleChange}
        className="border border-white p-2 font-bold mt-2"
      />
      <label htmlFor="text" className="font-bold text-xl text-blue-800">
        Enter Note Title
      </label>
      <textarea
        id="text"
        type="text"
        name="text"
        placeholder="Enter your notes here"
        value={newNote.text}
        onChange={handleChange}
        className="border border-white h-70 p-2 font-bold bg-amber-600"
      />
      <button
        type="submit"
        className="bg-green-800 cursor-pointer text-white font-extrabold text-xl px-6 py-3 rounded-md hover:bg-green-600 hover:shadow-lg mt-2"
      >
        Add
      </button>
    </form>
  );
};

export default NoteForm;
