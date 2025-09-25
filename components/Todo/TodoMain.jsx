import Header from "./Header";
import Input from "./Input";
import TodoList from "./TodoList";
import Footer from "./Footer";
import Analytics from "./Analytics";

const TodoMain = () => {
  return (
    <div className="flex flex-col min-w-full min-h-screen bg-amber-800">
      <Header />
      <Analytics />
      <TodoList />
      <Footer />
    </div>
  );
};

export default TodoMain;
