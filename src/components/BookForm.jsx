import { useState, useEffect } from "react";

const emptyBook = {
  id: "",
  title: "",
  author: "",
  category: "",
  totalCopies: "",
  availableCopies: "",
};

function BookForm({
  initialValues = emptyBook,
  buttonText,
  onSubmit,
}) {
  const [formData, setFormData] = useState(initialValues);
  const [error, setError] = useState({});

  useEffect(() => {
    setFormData(initialValues);
  }, [initialValues]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.author.trim()) {
      newErrors.author = "Author is required";
    }

    if (!formData.category.trim()) {
      newErrors.category = "Category is required";
    }

    if (
      !formData.totalCopies ||
      Number(formData.totalCopies) <= 0
    ) {
      newErrors.totalCopies =
        "Total copies must be greater than 0";
    }

    if (
      formData.availableCopies === "" ||
      Number(formData.availableCopies) < 0
    ) {
      newErrors.availableCopies =
        "Available copies must be 0 or greater";
    }

    if (
      Number(formData.availableCopies) >
      Number(formData.totalCopies)
    ) {
      newErrors.availableCopies =
        "Available copies cannot exceed total copies";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    setError({});

    const finalBookData = {
      title: formData.title.trim(),
      author: formData.author.trim(),
      category: formData.category.trim(),
      totalCopies: Number(formData.totalCopies),
      availableCopies: Number(formData.availableCopies),
    };

    onSubmit(finalBookData);
  }

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Book Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter book title"
        />
        {error.title && (
          <span className="error">{error.title}</span>
        )}
      </div>

      <div className="form-group">
        <label>Book Author</label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Enter author name"
        />
        {error.author && (
          <span className="error">{error.author}</span>
        )}
      </div>

      <div className="form-group">
        <label>Book Category</label>
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Enter book category"
        />
        {error.category && (
          <span className="error">{error.category}</span>
        )}
      </div>

      <div className="form-group">
        <label>Total Copies</label>
        <input
          type="number"
          name="totalCopies"
          value={formData.totalCopies}
          onChange={handleChange}
          placeholder="Enter total copies"
        />
        {error.totalCopies && (
          <span className="error">
            {error.totalCopies}
          </span>
        )}
      </div>

      <div className="form-group">
        <label>Available Copies</label>
        <input
          type="number"
          name="availableCopies"
          value={formData.availableCopies}
          onChange={handleChange}
          placeholder="Enter available copies"
        />
        {error.availableCopies && (
          <span className="error">
            {error.availableCopies}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="primary-btn"
      >
        {buttonText}
      </button>
    </form>
  );
}

export default BookForm;