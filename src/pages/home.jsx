import {lint} from "react-router-dom";
function Home({books}){
    const totalBooks = books.length;
    const totlaCopies = reduce((sum,book)=>{
        return sum+ book.totalCopies;
    },0);
    const availableCopies=books.reduce((sum,book)=>{
        return sum+ books.availableCoipes;
    },0);

    return(
        <section>
            <div className="Page-header">
                <div>
                    <h1>Dashboard</h1>

                </div>
                <link to = "/dashboard/books/add" className="primary-link">Add New Book</link>
            </div>

            <div className="Static-card">
                <h2>{totalCopies}</h2>
                <p>Total Copies</p>
           </div> 

           <div className="Static-card">
                <h2>{availableCopies}</h2>
                <p>Available Copies</p>
           </div> 
        </section>
    );


}
export default Home;