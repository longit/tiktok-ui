import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './AccountItem.scss';

export default function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className="wapper_acc">
            <img className="img_avatar" src={data.avatar} alt="title avatar" />
            <div className="info">
                <p className="acc_name">
                    <span>{data.full_name}</span>
                    <FontAwesomeIcon
                        className="icon_check"
                        icon={faCheckCircle}
                    />
                </p>
                <span className="acc_username">{data.nickname}</span>
            </div>
        </Link>
    );
}
