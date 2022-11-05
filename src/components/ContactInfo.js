import React from 'react';
import { MdPlace } from 'react-icons/md';
// import styled from 'styled-components';
import '../styles/ItemStyles.scss';

// const ItemStyles = styled.div`
  
// `;

export default function ContactInfoItem({
  icon = <MdPlace />,
  text = 'I need text ',
}) {
  return (
    <div className='ContactInfo'>
      <div className="icon">{icon}</div>
      <div className="info">
        <p>{text}</p>
      </div>
    </div>
  );
}