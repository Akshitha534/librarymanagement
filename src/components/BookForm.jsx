import {useState, useEffect} from 'react';

const emptyBook = {id:"",
        title :"",
        author:"",
        category:"",
        totalCopies:"",
        availableCopies:"" 
   };
   
   function BookForm({initialValues=emptyBook,buttonText,onSubmit}) {

       const [FormData,setFormData] = useState(initialValues);
       const [error,setError] = useState("");


       useEffect(()=>{
           setFormData(initialValues);
       },[initialValues]);
       function handleChange(e){
           const {name, value} = e.target;
           setFormData(preData => ({
               ...preData,
               [name]: value 
            }));
       }

       function validateForm(){
           const newErrors = {};
           if(!FormData.title.trim()){
               newErrors.title = "Title is required";
           }
           if(!FormData.author.trim()){
               newErrors.author = "Author is required"; 
           }
           if(!FormData.category.trim()){
               newErrors.category= "Category is required"; 
           }
           if(!FormData.totalCopies || Number(FormData.totalCopies) <= 0){
               newErrors.totalCopies = "Total copies is is required and must be greater than 0";
           }
           if(!FormData.availableCopies || Number(FormData.availableCopies) <= 0){
                newErrors.availableCopies = "Available copies is is required and must be a non-negative";
            }
           if(Number(FormData.availableCopies) > Number(FormData.totalCopies)){
               newErrors.availableCopies = "Available copies cannot exceed total copies";
            }
            return newErrors;
        
        }
        function handleSubmit(e){
            e.preventDefault();
            const ValidationErrors = validateForm();
            if(object.keys(ValidationErrors).length > 0){
                setError(validationErrors);
                return;
            }

            const finalBookData = {
                title: FormData.title.trim(),
                author: FormData.author.trim(),
                category: FormData.category.trim(),
                totalCopies: Number(FormData.totalCopies),
                availableCopies: Number(FormData.availableCopies)
            };
            onSubmit(finalBookData);
        }
    return (

        <form className="book-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <lable>Book Title</lable>
                <input 
                type="text"
                name="title"
                value={FormData.title}
                onChange={handleChange}
                placeholder="Enter book title"
                />
                {error.title && <span className="error">{error.title}</span>}
                </div>
                
                <div className="form-group">
                <lable>Book Author</lable>
                <input 
                type="text"
                name="author"
                value={FormData.author}
                onChange={handleChange}
                placeholder="Enter author name"
                />
                {error.author && <span className="error">{error.author}</span>}
                </div>

                <div className="form-group">
                <lable>Book Category</lable>
                <input 
                type="text"
                name="category"
                value={FormData.category}
                onChange={handleChange}
                placeholder="Enter book category"
                />
                {error.category && <span className="error">{error.category}</span>}
                </div>
                
                <div className="form-group">
                <lable>Books Total Copies</lable>
                <input 
                type="numbers"
                name="totalCopies"
                value={FormData.totalCopies}
                onChange={handleChange}
                placeholder="Enter books totalcopies"
                />
                {error.totlaCopies && <span className="error">{error.totalCopies}</span>}
                </div>

                <div className="form-group">
                <lable>Books available copies</lable>
                <input 
                type="numbers"
                name="availableCopies"
                value={FormData.availableCopies}
                onChange={handleChange}
                placeholder="Enter books availableCopies"
                />
                {error.availableCopies && <span className="error">{error.availableCopies}</span>}
                </div>

                <div className="form-group">
                    <button tyoe="submit" className="submit-btn">{buttonText}</button>
                </div>
       </form>
       
    );
   }


 
