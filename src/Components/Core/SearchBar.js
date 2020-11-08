import React, { useState } from 'react';

function Searchbar(props) {

  const [keyword, setkeyword] = useState('');
  const { searchWord } = props;

  const editSearchTerm = (event) => {
    event.preventDefault();

    let search = event.target.value;
    searchWord(search);
    setkeyword(search);
  };

  return (

    <div className="searchbarcontainer">
      <div className="ui search">
        <div className="ui icon input">
          <i className="search icon"></i>
          <input
            className="prompt"
            placeholder="Filter"
            type="text"
            value={keyword}
            onChange={editSearchTerm}
          />
        </div>
      </div>
    </div>
  );
}

export default Searchbar;