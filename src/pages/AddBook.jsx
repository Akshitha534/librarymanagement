import { useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm";

function AddBook({ onAddBook }) {
    const navigate = useNavigate();

    function handleAddBook(bookdata) {
        onAddBook
    }
}