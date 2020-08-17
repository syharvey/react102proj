import React, { useState } from "react";
import axios from 'axios';
import "../App.css";
import Results from "./Results";
import {
  Heading,
  InputGroup,
  Input,
  InputLeftElement,
  Icon,
  Button,
} from "@chakra-ui/core";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [gifInfo, setGifInfo] = useState(undefined);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = () => {
    let formatStr = searchInput;
    formatStr = formatStr.replace(" ","+");
    axios
      .get(
        "http://api.giphy.com/v1/gifs/search?q="+formatStr+"&api_key="+process.env.REACT_APP_GIPHY_API_KEY+""
      )
      .then((response) => setGifInfo(response.data.data))
      .then((data) => console.log(data));
  };

  const myStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div>
      <div style={myStyle}>
        <Heading margin="8%">🌈 Giphy Explorer 🦄</Heading>
      </div>
      <InputGroup style={myStyle} marginLeft="3%" marginRight="3%">
        <InputLeftElement
          children={<Icon name="search-2" color="gray.200" />}
        />
        <Input
          type="search-2"
          placeholder="Search keyword"
          onChange={handleInputChange}
        />
      </InputGroup>
      <Button variantColor="teal" onClick={handleSubmit} margin="3%">
        Submit
      </Button>
      <Results gifInfo={gifInfo}/>
    </div>
  );
}

export default Header;
