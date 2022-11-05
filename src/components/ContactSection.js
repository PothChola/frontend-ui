import React from 'react'
import ContactInfo from './ContactInfo';
import { MdLocalPhone } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import SectionTitle from './SectionTitle';
// import styled from 'styled-components';
import ContactForm from './ContactForm';
import '../styles/ContactSectionStyle.scss';

// const ContactSectionStyle = styled.div`
// padding: 10rem 0;
// `;

function ContactSection() {
  return (
        <div className='container'>
            <SectionTitle heading='Contact Us'
            subheading='Get in Touch'/>
            <div className='left'>
              {/* <ContactInfo 
              icon={ <MdLocalPhone />}
              text=''/> */}
              <ContactInfo 
              icon={ <MdEmail/> }
              text='pothchola@gmail.com'/>
              <ContactInfo 
              text='Kolkata, India'/>
            </div>
            <div className='right'>
              <ContactForm />
            </div>
        </div>
  )
}

export default ContactSection;