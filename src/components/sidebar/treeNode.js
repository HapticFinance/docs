import * as React from 'react';
import OpenedSvg from '../images/opened';
import ClosedSvg from '../images/closed';
import config from '../../../config';
import Link from '../link';

const TreeNode = ({ className = '', setCollapsed, collapsed, url, title, category, items, ...rest }) => {
  const isCollapsed = collapsed[url];

  const collapse = () => {
    setCollapsed(url);
  };

  const hasChildren = items.length !== 0;

  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }
  const active =
    location && (location.pathname === url || location.pathname === config.gatsby.pathPrefix + url);

  const calculatedClassName = `${className} item ${active ? 'active' : ''}`;
  const categories = ["Introduction", "Resources", "Launch"];


  return (
    <li className={calculatedClassName}>
      {title && (
        <Link to={url}>
          {title}
          {!config.sidebar.frontLine && title && hasChildren ? (
            <button onClick={collapse} aria-label="collapse" className="collapser">
              {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
            </button>
          ) : null}
        </Link>
      )}


      {!isCollapsed && hasChildren ? (
        <ul>
          {//items.map((item, index) => {
            //console.log(item)
            categories.forEach(category => {
              
            const filteredItems = items.filter(item => item.category === category);
            console.log(filteredItems)
            filteredItems.map((item, index) => {
              console.log(item)
            return (
                <>
                  <span style={{fontSize:"14px", fontWeight:"0.5em", fontStyle:"italic", margin:"5px 0 5px 5px"}}>{category}</span>
                      <TreeNode
                        key={item.url + index.toString()}
                        setCollapsed={setCollapsed}
                        collapsed={collapsed}
                        category={category}
                        {...item}
                      />
                      <li>{"test"}</li>
                </>
            );
            })
          })}
        </ul>
      ) : null}
    </li>
  );
};

export default TreeNode;
