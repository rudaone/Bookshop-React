import './SignUp.css'
import { Input } from '../Input'
import { INPUT_TYPES } from '../../types'
import { Button } from '../Button'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
        confirm: ''
    })
    
    const handler = (key: string, value: string) => {
        setFormState(prev => ({
            ...prev,
            [key]: value
        }))
    }

    return (
        <div className='registration__page'>
       <div className='reg__form-wrapper'>
          <div className='input__container'>
            <Input 
                label={'Name'}
                type={INPUT_TYPES.TEXT}
                placeholder={'Your name'}
                className="input"
                value={formState.username}
                onChange={(e: any) => handler('username', e.target.value)}
            />

            <Input 
                label={'Email'}
                type={INPUT_TYPES.TEXT}
                placeholder={'Your email'}
                className="input"
                value={formState.email}
                onChange={(e: any) => handler('email', e.target.value)}
            />

            <Input 
                label={'Password'}
                type={INPUT_TYPES.PASSWORD}
                placeholder={'Your password'}
                className="input"
                value={formState.password}
                onChange={(e: any) => handler('password', e.target.value)}
            />

            <Input 
                label={'Confirm password'}
                type={INPUT_TYPES.PASSWORD}
                placeholder={'Confirm password'}
                className="input"
                value={formState.confirm}
                onChange={(e: any) => handler('confirm', e.target.value)}
            />
            </div>
            <div className='sign_up_button-container'>
                <Button 
                    className='sign_up-button'
                    onClick={console.log('good')}       
                    children='SIGN UP'
                />
            </div>
           
            <footer className='reg__form-footer'>
                <div className='reg__form-footer-inner'>
                    <div className='reg__form-footer-text'>Already have an account?</div>
                    <Link to="/sign-in" className='reg__form-footer-btn'>Sign in</Link>
                </div>
            </footer>
        </div>
        </div>
    )
}


export { SignUp }