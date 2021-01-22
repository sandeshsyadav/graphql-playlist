import { graphql } from '@apollo/client/react/hoc';
import { getBooksQuery } from '../queries/queries';
import BookDetails from '../components/BookDetails';
import React, { useState } from "react";

function BookList(props) {
  const [selected, setselected] = useState('');

    const displayBooks = () => {
        var data = props.data;
        if(data.loading) {
            return (<div>Loading Books</div>)
        } else {
            return data.books.map(book => {
                return (
                    <li onClick={()=> setselected(book.id)} key={book.id}>{book.name}</li>
                )
            })
        }
    }
    return (
      <div>
        <ul id="book-list">
           {displayBooks()}
        </ul>
        <BookDetails bookId={selected} />
      </div>
    );
  }


//   class BookList extends Component {
//     displayBooks(){
//         var data = this.props.data;
//         if(data.loading){
//             return( <div>Loading books...</div> );
//         } else {
//             return data.books.map(book => {
//                 return(
//                     <li key={ book.id }>{ book.name }</li>
//                 );
//             })
//         }
//     }
//     render(){
//         console.log(this.props);
//         return(
//             <div>
//                 <ul id="book-list">
//                     { this.displayBooks() }
//                 </ul>
//             </div>
//         );
//     }
// }
  export default graphql(getBooksQuery)(BookList);
  