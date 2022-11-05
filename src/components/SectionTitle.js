import React from 'react';
// import styled from 'styled-components';
import "../styles/SectionTitleStyle.scss";

// const SectionTitleStyle = styled.div`
  
// `;

export default function SectionTitle({
  subheading = 'Need Subheading',
  heading = 'need heading',
}) {
  return (
    < div className="section-title">
      <p>{subheading}</p>
      <h2>{heading}</h2>
    </div>
  );
}