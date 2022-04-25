import React, { useState, useEffect, createRef } from 'react';
import {
  InstantSearch,
  Index,
  Hits,
  Configure,
  Pagination,
  connectStateResults,
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import config from '../../../config.js';

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { PoweredBy } from './styles';
import { Search } from '@styled-icons/fa-solid/Search';
import Input from './input';
import * as hitComps from './hitComps';
import lunr from 'lunr';
import {documents} from "./documents.js"
import { isMobile } from 'react-device-detect'

 const SearchIcon = styled(Search)`
  width: 1em;
  pointer-events: none;
`;

const HitsWrapper = styled.div`
  display: ${props => (props.show ? `grid` : `none`)};
  max-height: 80vh;
  overflow: scroll;
  z-index: 2;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  right: 0;
  top: calc(100% + 0.5em);
  width: 80vw;
  max-width: 30em;
  box-shadow: 0 0 5px 0;
  padding: 0.7em 1em 0.4em;
  background: white;
  @media only screen and (max-width: 991px) {
    width: 400px;
    max-width: 400px;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
    max-width: 500px;
  }
  border-radius: ${props => props.theme.smallBorderRadius};
  > * + * {
    padding-top: 1em !important;
    border-top: 2px solid ${props => props.theme.darkGray};
  }
  li + li {
    margin-top: 0.7em;
    padding-top: 0.7em;
    border-top: 1px solid ${props => props.theme.lightGray};
  }
  * {
    margin-top: 0;
    padding: 0;
    color: black !important;
  }
  ul {
    list-style: none;
  }
  mark {
    color: ${props => props.theme.lightBlue};
    background: ${props => props.theme.darkBlue};
  }
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3em;
    h3 {
      color: black;
      background: ${props => props.theme.gray};
      padding: 0.1em 0.4em;
      border-radius: ${props => props.theme.smallBorderRadius};
    }
  }
  h3 {
    color: black;
    margin: 0 0 0.5em;
  }
  h4 {
    color: black;
    margin-bottom: 0.3em;
  }
`;

const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

const Results = connectStateResults(
  ({ searching, searchState: state, searchResults: res }) =>
    (searching && `Searching...`) || (res && res.nbHits === 0 && `No results for '${state.query}'`)
);

const useClickOutside = (ref, handler, events) => {
  if (!events) events = [`mousedown`, `touchstart`];
  const detectClickOutside = event =>
    ref && ref.current && !ref.current.contains(event.target) && handler();

  useEffect(() => {
    for (const event of events) document.addEventListener(event, detectClickOutside);
    return () => {
      for (const event of events) document.removeEventListener(event, detectClickOutside);
    };
  });
};

export default function SearchComponent({ indices, collapse, hitsAsGrid }) {
  const ref = createRef();

  const [query, setQuery] = useState(``);
  const [focus, setFocus] = useState(false);

  useClickOutside(ref, () => setFocus(false));

  const idx = lunr(function () {
    this.ref('name')
    this.field('text')
  
    documents.forEach(function (doc) {
      this.add(doc)
    }, this)
  })

 
  let results = []

  if (query != '') {
    results = idx.search(query)
  }

  const links = {
    "Borrowers": "/borrowers",
    "Stakers": "/stakers",
    "Basics": "/basics",
    "Impermanent loss": "/il",
    "Haptic Aelin seed round":"/aelin",
    "Roadmap": "/roadmap",
    "Inflationary supply": "/inflation"
  }

  const hasResults = results.length > 0; 

  let style = {marginTop:"-10px", width:"70%", minHeight:"35px", padding:"5px", fontSize:"14px"}
  
  if (isMobile) {
    style = {...style, width:"100%", marginLeft:"15px", marginTop:"10px"}
  }

  return (
    <div style={{position:"absolute", minWidth:"50%"}}>
      <input 
        style={style} 
        type="text" 
        placeholder="Search" 
        onFocus={() => setFocus(true)} 
        onChange={e => setQuery(e.target.value)}
      />

      <>
        {hasResults > 0 ? 
        results.map(result => {
          return (
            <ul style={isMobile ? 
              {background:"beige", width:"100%", marginLeft:"15px", padding:"10px", position:"relative", zIndex:1}
            :
            {background:"beige", width:"70%", padding:"10px"}}>
              <a href={links[result.ref]}>
                <li style={isMobile ?
                  {minHeight:"25px", overlay:"top"} 
                : {minHeight:"25px"}} >{result.ref}</li>
              </a>
            </ul>
          )
        })  : 
        <></>
        }
        </>
    </div>
  );
}
