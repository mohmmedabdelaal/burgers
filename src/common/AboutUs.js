import React from 'react';
import { css } from '@emotion/css';

const styles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    margin: 20px 30px;
    font-size: 2rem;
    font-weight: 600;
    background-image: linear-gradient(to left, #553c9a, #b393d3);
    color: transparent;
    background-clip: text;
  }
  p {
    font-size: 1rem;
  }
`;

function AboutUs() {
  return (
    <div className={styles}>
      <h1 className="title">Burgers kings</h1>
      <div>
        <p>
          Our Story starts with a small shop called burgers and the salad then
          people begins to love our products so much more every day
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
