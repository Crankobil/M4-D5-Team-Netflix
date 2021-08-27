import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import { Bell, Search} from 'react-bootstrap-icons';
import Image from 'react-bootstrap/Image'
import logo from "../assets/netflix_logo.png"

export default function MyNavbar(){
    return(
    <Navbar bg="dark" >
      <Nav defaultActiveKey="/home" as="ul">
        <Image
             src={logo}  
             width="95"
             height="30"
        />
      <Nav.Item as="li">
         <Nav.Link  href="/home" className="font-color">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
          <Nav.Link eventKey="link-1" className="font-color">TV Shows</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
          <Nav.Link eventKey="link-2"className="font-color">Movies</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
          <Nav.Link eventKey="link-2"className="font-color">Recently Added</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
          <Nav.Link eventKey="link-2"className="font-color">My List</Nav.Link>
      </Nav.Item>
</Nav>
<Nav as="ul" className="nav-left">
      <Nav.Item as="li">
         <Search className="mr-2 " color="white" size={20}></Search>
      </Nav.Item>
      <Nav.Item as="li">
          <Nav.Link eventKey="link-2"className="font-color">KIDS</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
         <Bell color="white" size={20}/>
      </Nav.Item>
  </Nav> 

</Navbar>
) }