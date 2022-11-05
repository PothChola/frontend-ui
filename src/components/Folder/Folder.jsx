import React,{useState} from 'react';
import './Folder.scss';

const Folder = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const handleSend = () => {
        console.log(name)
        console.log(email)
        console.log(message)
    }
  return (
    <div className='app__container'>
        <div className='app__wraper app__flex'>
            <div className='app__footer app__flex'>
                <h2 className='head-text'>
                    Get in touch with us
                </h2>
                <div className='app__footer-cards'>
                    <div className='app__footer-card'>
                        <a href='pothchola@gmail.com' className='p-text'>
                        pothchola@gmail.com
                        </a>
                    </div>
                    <div className='app__footer-card'>
                        <a href='Kolkata India' className='p-text'>
                        Kolkata, India
                        </a>
                    </div>
                </div>
                <div className='app__footer-form app__flex'>
                    <div className='app__flex'>
                        <input className='p-text' type="text" placeholder="your name" name="username" onChange={
                            e => setName(e.target.value)
                        } value={name} />
                    </div>
                    <div className='app__flex'>
                        <input className='p-text' type="text" placeholder="your email" name="useremail" onChange={
                            e => setEmail(e.target.value)
                        } value={email}/>
                    </div>
                    <div>
                        <textarea className='p-text' placeholder='your message' name='message' onChange={
                            e => setMessage(e.target.value)
                        } value={message}/>
                    </div>
                    <button type='button' className='p-text' onClick={handleSend}>
                        send message
                    </button>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Folder