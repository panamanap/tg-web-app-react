import React from 'react';
import { Button } from '../Button/Button.jsx';
import { useTelegram } from '../../hooks/useTelegram';

export const Header = () => {
    const {user, onClose} = useTelegram();
    
    return (
        <div className='header'>
            <Button onClick={onClose}>Закрыть</Button>
            <span className='username'>
                {user?.username}
            </span>
        </div>
    );
};