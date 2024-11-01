import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

const StyledSideBar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1/-1;
  /* display: flex; */
  flex-direction: column;
  gap: 3.2rem;
  display: none;
  transition: 1s ease-in-out;

  @media screen and (min-width: 640px) {
    display: flex;
  }
`;

function SideBar() {
  return (
    <StyledSideBar>
      <Logo />
      <MainNav />
      {/* <Uploader /> */}
    </StyledSideBar>
  );
}

export default SideBar;
