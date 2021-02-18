import React from 'react';

export default function SearchBar() {
    return (
<header>
  <div id="top_element"></div>
  <div id="main_search_element">
    <div id="search_icon_circle">
      <div id="search_icon_background">
        <i class="fa fa-search action-expand" aria-hidden="true"></i>

        <input type="text" placeholder="Search" />

        <i class="fa fa-times action-collapse" aria-hidden="true"></i>
      </div>
    </div>

  </div>
  
</header>)
}
