const Input = ({ input, select, setInput, setSelect, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center space-x-5 items-center bg-amber-500 w-full p-5"
    >
      <select
        value={select}
        onChange={(e) => setSelect(Number(e.target.value))}
        className="w-16 bg-black text-white cursor-pointer p-1 rounded-xl"
      >
        {Array.from({ length: 30 }, (_, i) => i + 1).map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
      <input
        type="text"
        name="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-50 bg-black text-white cursor-pointer p-1 rounded-xl"
      />
      <button className="bg-green-700 cursor-pointer font-bold text-white rounded-md px-5 py-1 hover:bg-transparent hover:text-black hover:border">
        Add
      </button>
    </form>
  );
};

export default Input;
