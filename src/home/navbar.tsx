import type { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { getIcon } from 'src/styles/icons';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  position: absolute;
  width: 90%;

  @media (min-width: 768px) {
    position: static;
    width: 100%;
  }
`;

const RightItemsContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;

  .nav-item {
    border-bottom: 1px solid #6c63ff;
  }

  .icon {
    font-size: 2.5rem;
  }
`;

const NavBar: NextPage = () => {
  return (
    <Nav>
      {/* <div style={{'display':'flex', 'flexDirection':'column'}}> */}
      <Link href="/">
        <a>
          <Image src="/logo.png" alt="logo" height="100px" width="200px" />
          {/* <a className="nav-item show-web" >Resumify</a> */}
        </a>
      </Link>
      {/* </div> */}
{/* 
      a {
    color: #6c63ff;
} */}
      <RightItemsContainer>
        {/* <a style={{'color': '#6c63ff'}} className="nav-item show-web">Templates</a>
        <a style={{'color': '#6c63ff'}} className="nav-item show-web">Recommendations</a>
        <a style={{'color': '#6c63ff'}} className="nav-item show-web">About</a> */}
        <a style={{'color': '#6c63ff'}}
          href="https://github.com/dudenayak/MinorProject-Resumify"
          className="icon"
          target="_new"
          title="Source code"
        >
          {getIcon('github')}
        </a>
      </RightItemsContainer>
    </Nav>
  );
};

export default NavBar;
