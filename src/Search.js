import React, { useEffect, useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import Field from "./Field";
import Spinner from "./Spinner";
import axios from "axios";
import EmptyField from "./EmptyField";

const Search = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState([]);

  const renderFields = fields.map((field) => {
    return <Field title={field.title} description={field.body} input={input} />;
  });

  const fetchData = async (input) => {
    setLoading(true);
    setInput(input);

    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts?q=" + input
    );

    if (response.status === 200) {
      setLoading(false);
      setFields(response.data);
    }

    if (input === "") {
      setFields([]);
    }

    console.log(response);
  };

  const whatToRender = () => {
    if (loading) {
      return <Spinner />;
    } else if (input !== "" && fields.length === 0) {
      return <EmptyField />;
    }
    return renderFields;
  };

  return (
    <div className='container'>
      <div className='search'>
        <SearchIcon className='searchIcon' />
        <input
          list='browsers'
          placeholder='Please,start entering the text to search...'
          className='searchInput'
          type='text'
          onChange={(e) => {
            fetchData(e.target.value);
          }}
        />
      </div>
      {whatToRender()}
    </div>
  );
};

export default Search;
