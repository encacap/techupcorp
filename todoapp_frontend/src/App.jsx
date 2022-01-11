import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
    const lists = useSelector((state) => state.todo.lists);
    const defaultListId = lists.find((list) => list.isDefault)?.id || lists[0].id;

    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to={`/todos/${defaultListId}/all`} />} />
                <Route path="/accounts/*">
                    <Route path="login" element={<Login />}></Route>
                    <Route path="register" element={<Register />}></Route>
                </Route>
                <Route path="/todos/*" element={<Home />}>
                    <Route path=":listId/*" element={<Home />} />
                    <Route path="*" element={<Home />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;