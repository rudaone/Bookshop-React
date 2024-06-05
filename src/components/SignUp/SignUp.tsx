import './SignUp.css'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUpUser } from '../../redux/actionCreators'
import { Link } from 'react-router-dom';

const SignUp = () => {
    const dispatch = useDispatch();
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

    const handleSignUp = () => {
        const { confirm, ...other } = formState;
        dispatch(signUpUser(other))
    }

    return (
        <div className='sign-up__container'>

            <div className='sign-up__wrapper-up'>
                <div className="form__header">
                    
                    <Link to="/sign-in" className='sign-in__header__link-up'>
                        <div className='sign-in__header-up'>SIGN IN</div>
                    </Link>
                    <div className='sign-up__header-up'>SIGN UP</div>

                </div>
                <div className='sign-up__inputs'>
                    <div className='div__email'>
                        <span className='input__span'>Name</span>
                        <input
                            type='text'
                            placeholder={'Your name'}
                            className="input"
                            value={formState.username}
                            onChange={(e: any) => handler('username', e.target.value)}
                            onKeyDown={(e: any) => {
                                if (e.key === "Enter") {
                                    const { confirm, ...other } = formState;
                                    dispatch(signUpUser(other))
                                }
                            }}
                        />
                    </div>

                    <div className="div__password">
                        <span className='input__span'>Email</span>

                        <input
                            type='text'
                            placeholder={'Your email'}
                            className="input"
                            value={formState.email}
                            onChange={(e: any) => handler('email', e.target.value)}
                            onKeyDown={(e: any) => {
                                if (e.key === "Enter") {
                                    const { confirm, ...other } = formState;
                                    dispatch(signUpUser(other))
                                }
                            }}
                        />
                    </div>                    <div className="div__password">
                        <span className='input__span'>Password</span>

                        <input
                            type='password'
                            placeholder={'Your password'}
                            className="input"
                            value={formState.password}
                            onChange={(e: any) => handler('password', e.target.value)}
                            onKeyDown={(e: any) => {
                                if (e.key === "Enter") {
                                    const { confirm, ...other } = formState;
                                    dispatch(signUpUser(other))
                                }
                            }}
                        />

                    </div>                    <div className="div__password">
                        <span className='input__span'>Confirm password</span>

                        <input
                            type='password'
                            placeholder={'Confirm password'}
                            className="input"
                            value={formState.confirm}
                            onChange={(e: any) => handler('confirm', e.target.value)}
                            onKeyDown={(e: any) => {
                                if (e.key === "Enter") {
                                    const { confirm, ...other } = formState;
                                    dispatch(signUpUser(other))
                                }
                            }}
                        />
                    </div>
                </div>

                <button className='sign-up__btn' onClick={handleSignUp}>SIGN UP</button>

            </div>
        </div>




    )
}


export { SignUp }