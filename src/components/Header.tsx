import { ReactNode } from 'react';

interface HeaderProps {
    children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
    let fontSize = 'text-xl';

    return (
        <header>
            <div className="bg-bg-red-200 mx-auto p-7 rounded">
                <h1 className={`text-center font-semibold ${fontSize}`}>{children}</h1>
            </div>
        </header>
    );
}