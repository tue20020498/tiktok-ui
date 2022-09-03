import { useState, useEffect } from 'react'
import * as searchServices from '~/sevices/searchService';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from './AccountItem';
const cx = classNames.bind(styles);

function SuggestedAccounts({ lable, lablefooter }) {
    const [seeMore, setSeeMore] = useState(false)
    const [suggestResult, setSuggestResult] = useState([])
    useEffect(() => {

        const fetchApi = async () => {

            const res = await searchServices.search('t');
            setSuggestResult(res)
        };

        fetchApi();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('heading')}>{lable}</p>
            {
                seeMore ? 
                suggestResult.map((data) =>
                    <AccountItem key={data.id} data={data} />
                )
                :  suggestResult.slice(0, 5).map((data) =>
                <AccountItem key={data.id} data={data} />
            )
            }
            <p
                className={cx('footer')}
                onClick={() => setSeeMore(!seeMore)}
            >
                {seeMore ? 'See less' : lablefooter}
            </p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    lable: PropTypes.string.isRequired
}

export default SuggestedAccounts;