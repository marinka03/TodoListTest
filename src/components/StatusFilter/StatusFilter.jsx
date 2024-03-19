import styled from 'styled-components';
import style from './StatusFilter.module.css';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
   display: inline-flex;
  padding: 8px 12px;
  border-radius: 4px 4px 0 0;
  border: none;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  background-color: #a7f5fa;
  color: #184f61;
  text-decoration: none;
  &:active{
    background-color: #0abad0;
  color: #ecffff;
  }
  &:hover{
    background-color: #20d5e9;
  color: #ecffff;
  }
`

const StatusFilter = () => {

  return (
    <div className={style.wrapper}>
      <ul className={style.list}>
        <li>
          <StyledNavLink to='create' active>
            Create
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='active'>
            Active
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='completed'>
            Completed
          </StyledNavLink>
        </li>
      </ul>
    </div>
  );
};

export default StatusFilter;
