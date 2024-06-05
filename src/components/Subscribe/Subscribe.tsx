import './Subscribe.css'
import { useState } from 'react'
import { useRef } from 'react'

const Subscribe = ({ className }: { className?: string }) => {
    const [formState, setFormState] = useState({
        email: '',
    })

    const handler = (key: string, value: string) => {
        setFormState(prev => ({
            ...prev,
            [key]: value
        }))
    }




    const handleClick = () => {
        alert('Congratulations! You subscribed to newsletters');
    };

    return (
        <div className='subscribe__wrapper'>
            <div className='subscribe-inner'>
                <h1 className='subscribe-title'>
                    Subscribe to Newsletter
                </h1>
                <div className='subscribe-text'>
                    Be the first to know about new IT books, upcoming releases, exclusive offers and more.
                </div>

                <div className='subscribe-input-button'>
                    <input
                        className='subscribe-input'
                        placeholder={'Your email'}
                        value={formState.email}
                        onChange={(e: any) => handler('email', e.target.value)}
                    />

                    <button
                        className='subscribe-btn'
                        onClick={handleClick}
                        children='Subscribe'

                    />
                </div>
            </div>

        </div>

    )
}

export { Subscribe }