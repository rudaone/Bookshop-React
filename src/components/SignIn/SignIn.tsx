import './SignIn.css'
import { useDispatch } from 'react-redux';
import { useState } from 'react'
import { signInUser } from '../../redux/actionCreators'
import { Link } from 'react-router-dom';

const SignIn = () => {
    const dispatch = useDispatch();
    const [inputState, setInputState] = useState({
        email: '',
        password: ''
    })
    const handler = (key: string, value: string) => {
        setInputState(prev => ({
            ...prev,
            [key]: value
        }))
    }
    const handleSignIn = () => {
        const { email, password } = inputState;
        dispatch(signInUser({ email, password }))
    }



    return (
        <div className='sign-in__container'>

            <div className='sign-in__wrapper'>
                <div className="form__header">
                    <div className='sign-in__header'>SIGN IN</div>
                    <Link to="/sign-up" className='sign-up__header__link'>
                        <div className='sign-up__header'>SIGN UP</div>
                    </Link>

                </div>
                <div className='signin__inputs'>
                    <div className='div__email'>
                        <span className='input__span'>Email</span>
                        <input
                            className="input"
                            type='text'
                            placeholder='Your email'
                            onChange={(e: any) => handler('email', e.target.value)}
                            onKeyDown={(e: any) => {
                                if (e.key === "Enter") {
                                    const { email, password } = inputState;
                                    dispatch(signInUser({ email, password }))
                                }
                            }}
                        />
                    </div>

                    <div className="div__password">
                        <span className='input__span'>Password</span>

                        <input
                            className="input"
                            type='password'
                            placeholder='Your password'
                            onChange={(e: any) => handler('password', e.target.value)}
                            onKeyDown={(e: any) => {
                                if (e.key === "Enter") {
                                    const { email, password } = inputState;
                                    dispatch(signInUser({ email, password }))
                                }
                            }}
                        />
                    </div>
                    <Link to="/sign-up" className='forgot__btn'>Forgot password?</Link>
                </div>


                <button className='sign-in__btn' onClick={handleSignIn}>SIGN IN</button>
            </div>
        </div>
    )
}

export { SignIn }