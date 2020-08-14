import React, { Fragment } from "react";
import { Navbar } from "./../Navbar";

type TypeProps = {
  data: Array<ListProps>;
  className?: string;
  id?: string;
};

interface ListProps {
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

export const List: React.FC<TypeProps> = ({
  data,
  className,
  id,
}): JSX.Element => {
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

interface InfoProps {
  infoContentFirst?: string;
  infoContentSecond?: string;
}

type InfoType = {
  data: Array<InfoProps>;
  className?: string;
  id?: string;
};

export const Info: React.FC<InfoType> = ({ data, className }): JSX.Element => {
  return (
    <div className={className}>
      {data.map((info, key) => (
        <div key={key}>
          <p>{info.infoContentFirst}</p>
          <p>{info.infoContentSecond}</p>
        </div>
      ))}
    </div>
  );
};
