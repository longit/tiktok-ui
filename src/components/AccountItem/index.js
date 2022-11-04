import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import avatar from '../../assets/images/img_avatar.jpg';
import './AccountItem.scss';

export default function AccountItem() {
    return (
        <div className="wapper_acc">
            <img className="img_avatar" src={avatar} alt="title avatar" />
            <div className="info">
                <p className="acc_name">
                    <span>NMguyen van A</span>
                    <FontAwesomeIcon
                        className="icon_check"
                        icon={faCheckCircle}
                    />
                </p>
                <span className="acc_username">NguyenanhS</span>
            </div>
        </div>
    );
}
