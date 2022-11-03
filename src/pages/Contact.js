import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

import "../styles/contact.css";

export default function FormValidation() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className='contact ml-2 mt-2'>
            <div>Feel free to contact us -</div>
            <Form onSubmit={handleSubmit(onSubmit)} className="contactForm mt-2">
                <Form.Field>
                    <label className='contactLabel'>Name-</label>
                    <input
                        placeholder='Name'
                        type="text"
                        {...register("Name", { required: true, maxLength: 16 })}
                    />
                </Form.Field>
                {errors.name && <p>Please check the First Name</p>}
                <Form.Field>
                    <label className='contactLabel'>Email-</label>
                    <input
                        placeholder='Email'
                        type="email"
                        {...register("email",
                            {
                                required: true,
                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                            })}
                    />
                </Form.Field>
                {errors.email && <p>Please check the Email</p>}
                <Form.Field>
                    <label className='contactLabel '>Your message-</label>
                    <input
                        className='contactMessage h-64'
                        placeholder='Your message...'
                        type="text"
                        {...register("message", {
                            required: true,
                            maxLength:200
                        })}
                    />
                </Form.Field>
                {errors.message && <p>Please check the Password</p>}
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}