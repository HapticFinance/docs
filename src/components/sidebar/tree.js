import React, { useState } from 'react';
import config from '../../../config';
import Link from '../link';

const calculateTreeData = edges => {
  const originalData = config.sidebar.ignoreIndex
    ? edges.filter(
        ({
          node: {
            fields: { slug },
          },
        }) => slug !== '/'
      )
    : edges;

  const tree = originalData.reduce(
    (
      accu,
      {
        node: {
          fields: { slug, title },
        },
      }
    ) => {
      const parts = slug.split('/');

      let { items: prevItems } = accu;

      const slicedParts =
        config.gatsby && config.gatsby.trailingSlash ? parts.slice(1, -2) : parts.slice(1, -1);

      for (const part of slicedParts) {
        let tmp = prevItems && prevItems.find(({ label }) => label == part);

        if (tmp) {
          if (!tmp.items) {
            tmp.items = [];
          }
        } else {
          tmp = { label: part, items: [] };
          prevItems.push(tmp);
        }
        prevItems = tmp.items;
      }
      const slicedLength =
        config.gatsby && config.gatsby.trailingSlash ? parts.length - 2 : parts.length - 1;

      const existingItem = prevItems.find(({ label }) => label === parts[slicedLength]);

      if (existingItem) {
        existingItem.url = slug;
        existingItem.title = title;
      } else {
        prevItems.push({
          label: parts[slicedLength],
          url: slug,
          items: [],
          title,
        });
      }
      return accu;
    },
    { items: [] }
  );

  const {
    sidebar: { forcedNavOrder = [] },
  } = config;

  const tmp = [...forcedNavOrder];

  if (config.gatsby && config.gatsby.trailingSlash) {
  }
  tmp.reverse();
  return tmp.reduce((accu, slug) => {
    const parts = slug.split('/');

    let { items: prevItems } = accu;

    const slicedParts =
      config.gatsby && config.gatsby.trailingSlash ? parts.slice(1, -2) : parts.slice(1, -1);

    for (const part of slicedParts) {
      let tmp = prevItems.find(item => item && item.label == part);

      if (tmp) {
        if (!tmp.items) {
          tmp.items = [];
        }
      } else {
        tmp = { label: part, items: [] };
        prevItems.push(tmp);
      }
      if (tmp && tmp.items) {
        prevItems = tmp.items;
      }
    }
    // sort items alphabetically.
    prevItems.map(item => {
      item.items = item.items.sort(function(a, b) {
        if (a.label < b.label) return -1;
        if (a.label > b.label) return 1;
        return 0;
      });
    });
    const slicedLength =
      config.gatsby && config.gatsby.trailingSlash ? parts.length - 2 : parts.length - 1;

    const index = prevItems.findIndex(({ label }) => label === parts[slicedLength]);

    if (prevItems.length) {
      accu.items.unshift(prevItems.splice(index, 1)[0]);
    }
    return accu;
  }, tree);
};

const Tree = ({ edges }) => {
  let [treeData] = useState(() => {
    return calculateTreeData(edges);
  });

  const defaultCollapsed = {};

  // sort items alphabetically.
  treeData.items = treeData.items.sort(function(a, b) {
    if (a.label < b.label) return -1;
    if (a.label > b.label) return 1;
    return 0;
  });

  treeData.items.forEach(item => {
    const docsMap = {
      "Introduction": ["basics", "glossary"],
      "Resources": [ "borrowers", "stakers", "il", "governance", "inflation"],
      "Launch": ["aelin", "tokenomics"],
  
    }
    let category
    Object.keys(docsMap).forEach(key => {
      if (docsMap[key].includes(item.label)) {
        console.log(`Category is ${key}`)
        category = key
      }
      item.category = category
    })
  })

  function groupBy(list, keyGetter) {
    const map = new Map();
    list.forEach((item) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
      return map;
  }

  const grouped = groupBy(treeData.items, item => item.category);
  console.log(grouped.get("Introduction"))

  treeData.items.forEach(item => {
    if (config.sidebar.collapsedNav && config.sidebar.collapsedNav.includes(item.url)) {
      defaultCollapsed[item.url] = true;
    } else {
      defaultCollapsed[item.url] = false;
    }
  });

  const categories = ["Introduction", "Resources", "Launch"];

  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  const toggle = url => {
    setCollapsed({
      ...collapsed,
      [url]: !collapsed[url],
    });
  };
  console.log(treeData)

  const isCollapsed = false;// collapsed[url];

  const collapse = () => {
    setCollapsed(url);
  };

  const hasChildren = false; //items.length !== 0;

  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }
  const active = false;
  //  location && (location.pathname === url || location.pathname === config.gatsby.pathPrefix + url);

  let className = ''
  const calculatedClassName = `${className} item ${active ? 'active' : ''}`;
  let title = 'abc'

  return (
    <>
      <ul className="sidebar__list">

      {categories.map(category => {
        return (
        <>
        <br />

        <span key={category} style={{fontFamily:"Roboto", fontSize:"13px", fontWeight:"bold", marginLeft:"10px"}}>
          {category}
        </span>
        <br /><br />

        {grouped.get(category).map(item => {
          console.log(item)
          return (
            <li className={calculatedClassName}>
            {item.title && (
              <Link to={item.url}>
                {item.title}
                {!config.sidebar.frontLine && item.title && hasChildren ? (
                  <button onClick={collapse} aria-label="collapse" className="collapser">
                    {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
                  </button>
                ) : null}
              </Link>
            )}
          </li>      

          )
        })}
        </>
        )
      })}
          
    </ul>
    </>
 
  );
};

export default Tree;
