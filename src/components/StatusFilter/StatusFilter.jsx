import styled from 'styled-components';
import style from './StatusFilter.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 4px 4px 0 0;
  border: none;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  background-color: ${p => p.$bg || '#a7f5fa'};
  color: ${p => p.$cl || '#184f61'};
  text-decoration: none;
`;
const Filter = ['create', 'active', 'completed'];

const StatusFilter = () => {
  const { pathname } = useLocation();
  return (
    <div className={style.wrapper}>
      <ul className={style.list}>
        {Filter.map((item, id) => {
          return (
              <li key={id}>
                {pathname === `/HomePage/${item}` ? (
                  <StyledNavLink to={item} $bg="#0abad0" $cl="#ecffff">
                    {item}
                  </StyledNavLink>
                ) : (
                  <StyledNavLink to={item}>{item}</StyledNavLink>
                )}
              </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StatusFilter;
