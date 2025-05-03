interface HeaderProps {
    title: string;
}

export function Header({title} : HeaderProps) {
    return (
        <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}> {title} </h2>
    )
}