import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color:var(--color-green-700);"}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    `
     font-size: 3rem;
     font-weight: 600;
`}
  ${(props) =>
    props.as === "h2" &&
    `
     font-size: 2rem;
     font-weight: 600;
`}
  ${(props) =>
    props.as === "h3" &&
    `
     font-size: 2rem;
     font-weight: 500;
`}

  line-height:1.4;
`;

export default Heading;
