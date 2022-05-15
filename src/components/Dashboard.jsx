import React, { useState } from 'react';
import Card from './Card';
import "../assets/css/dashboard.css"
import axios from 'axios';
import EmptyPage from './EmptyPage';
import Loading from './Loading';

const Dashboard = () => {
    const [text,setText]= useState("OL26320A")
    const [books,setBooks] = useState([])
    const [loading,setLoading] = useState(false)
    const [authorName,setAuthorName] = useState(null)

    const groupBy = (array, key) => {
        let arr =[]
        array.map(function(item) {
            if(!item[key]) return
                (arr[Math.max(...item[key])]=arr[Math.max(...item[key])] || []).push(item);
        });
        return arr
    };
    //js custom create color fresh with index

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        axios.get(`https://openlibrary.org/search.json?language=eng&author=${text}`)
            .then(res => {
                const rawData = res.data.docs;
                const groupData = groupBy(rawData, "publish_year")
                if(groupData.length > 0) {
                    setAuthorName(rawData[0].author_name)
                }
                else{
                    setAuthorName(null)
                }
                setBooks(groupData);
                setLoading(false)
            })
            .catch(err => console.log(err))
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <>
            <div className="dashboard">
                <div className="dashboard2">
                    <div className="dashboard-header">
                        <span className='author-name'>{authorName || "Author Name"}</span>
                        <span className='header-text'>book of</span>
                        <input 
                            type="text" 
                            placeholder="Search" 
                            value={text} 
                            onChange={handleChange}
                            className="search-input"
                            />
                        <div>
                            <button className="submit" onClick={handleSubmit}>submit</button>
                        </div>
                        {loading && <Loading/>}
                    </div>
                   {books.length>0 ? 
                        <div className="dashboard-panel">
                            { Object.entries(books).map((book,index) => {
                                if(book[0] === "undefined" ) return null
                                return (<Card author={book} key={index} index={index}/>)}
                                )
                            }
                        </div>:
                        <EmptyPage/>
                    }
                </div>
            </div>
        </>
    );
};

export default Dashboard;