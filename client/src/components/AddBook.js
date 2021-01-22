import { graphql } from '@apollo/client/react/hoc';
import {flowRight as compose} from 'lodash';
import { getAuthorQuery, addBookMutation, getBooksQuery } from '../queries/queries';
import React, { useEffect, useState } from "react";

function AddBook(props, state) {

    useEffect(() => {
        console.log(state);
      }, [state]);

    // updateState = () => {
    //     console.log('state updated');
    // }
    // useState(() => {
    //     state = {
    //         name:"",
    //         genre:"",
    //         author:""
    //     }
    //   });
    // Declare multiple state variables!
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');
    const submitForm = (e) => {
        e.preventDefault();
        props.addBookMutation({
            variables: {
                name: name,
                genre: genre,
                authorId: authorId
            },
            refetchQueries: [{query: getBooksQuery}]
        });
    }
    const displayAuthors = () => {
        var data = props.getAuthorQuery;
        if (data.loading) {
            return (<option disabled>Loading</option>);
        } else {
            return data.authors.map(author => {
                return (<option key={author.id} value={author.id}>{author.name}</option>);
            });
        }
    }
    return (
        <form id="add-book" onSubmit={submitForm}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={(e) => setGenre(e.target.value)}/>
            </div>
            <div className="field">
                <label>Author:</label>
                <select onChange={(e) => setAuthorId(e.target.value)}>
                    <option>Select Author</option>
                    {displayAuthors()}
                </select>
            </div>
            <button>+</button>
        </form>
    );
}

export default compose(
    graphql(getAuthorQuery, { name: "getAuthorQuery"}),
    graphql(addBookMutation,  {name: "addBookMutation" })
)(AddBook);
