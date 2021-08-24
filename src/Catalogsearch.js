import React, { useEffect, useState } from "react";
import './index.css';
import SideBar from "./SideBar";
import { Typography } from '@material-ui/core';


const Catalogsearch = () => {

  const [post, setPost] = useState({})
  const data = new FormData();
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/catalogsearch', {

      method: 'POST',
      body: data

    })
      .then((response) => (
        response.json())
        .then((results) => {
          console.log(results)
          setPosts(results) // new
        })
      )
  }, [])




  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = (clickedPost) => {
    setMobileOpen(!mobileOpen);
    if (clickedPost != undefined) {
      setPost(clickedPost);
    }
  };


  const [shoes, setShoes] = useState('');
  function getSize(e) {
    setShoes(e.target.value);
  }




  var id = 0;
  return (
    <div className="catalogsearch">

      <Typography variant="h5">GET YOUR NEW SNEAKERS</Typography>
      <div >
        {posts.map(post => {
          return (

            <div className="column">
              <div className="card" key={id++}>



                <img src={post.imageUrl} style={{ width: 200, height: 200 }}></img>


                <h4>{post.sneakerName}</h4>
                <p>{post.category}</p>

                <select onChange={getSize} >
                  {post.size.map(size => {
                    return (<option>{size}</option>)
                  })}

                </select>

                <p className="price">Price:{post.price}$</p>


                <button onClick={() => { var p = post; handleDrawerToggle(p) }}>BUY</button>
              </div>

            </div>
          )
        })}
        <SideBar
          id={post.id}
          imageUrl={post.imageUrl}
          sneakerName={post.sneakerName}
          category={post.category}
          size={shoes}
          price={post.price}

          sideBarState={mobileOpen}
          sideBarClick={() => { handleDrawerToggle() }}

        />
      </div>

    </div>

  );
}
export default Catalogsearch;