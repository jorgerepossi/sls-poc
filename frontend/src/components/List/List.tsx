import React, { Fragment} from "react";
import { Navbar } from "./../Navbar";

interface ListProps {
  data: Array<Type>;
  className?: string;
  id?: string;
}

interface Type {
  to?: string;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  exact?: string;
  sitelink?: string;
  alt?: string;
  title?: string;
  target?: string;
  seo?: string;
}

export const List: React.FC<ListProps> = ({ data, className, id }): JSX.Element => {
  return (
    <Fragment>
      <ul id={id} className={className}>
        {data.map((item, key) => (
          <li key={key}>
            <Navbar
              activeClassName="active"
              inactiveClassName="false"
              to={item.to}
              className="menu"
              sitelink={item.sitelink}
              title={item.seo}
              alt={item.seo}
            />
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
