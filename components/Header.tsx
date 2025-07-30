import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="p-4 text-center">
            <h1 className="text-5xl font-bold text-gray-800 tracking-tight font-heading">
                여름방학 잘 지냈는지 궁금해!
            </h1>
            <p className="mt-4 text-xl text-gray-600">
                다시 만난 우리, 어떤 이야기를 나눠볼까?
            </p>
        </header>
    );
};

export default Header;