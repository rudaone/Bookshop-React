

const Minus = ({ className, onClick }: { className?: string, onClick?: () => void }) => {
    return (
        <svg
            onClick={onClick}
            className='minus__icon'
            width="34"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="11" width="12" height="2" rx="1" fill="#313037" />
        </svg>

    )
}


export { Minus }

