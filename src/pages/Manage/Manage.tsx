import classNames from 'classnames/bind';
import styles from './Manage.module.sass';
import Card from '../../components/Card';
import Status from '../../components/Status';
import { Link } from 'react-router-dom';
import config from '../../config';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../components/Popper';
import PopperItem from '../../components/PopperItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Manage() {
    const [semester, setSemester] = useState('20232');

    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);

    return (
        <div className={cx('wrapper')}>
            <h2>Quản lý KPI</h2>
            <div className={cx('banner')}>
                <div className={cx('banner-bg')}>
                    <img src={import.meta.env.BASE_URL + 'images/banner2.png'} alt="" />
                </div>
                <div className={cx('banner-content')}>
                    <div className={cx('illustrator')}>
                        <img src={import.meta.env.BASE_URL + 'images/illus-banner2.png'} alt="illustrator" />
                    </div>
                    <div className={cx('title')}>
                        <h2 className={cx('heading')}>
                            <div className={cx('hl-bg')}>
                                <img src={import.meta.env.BASE_URL + 'images/logoText.png'} alt="logo" />
                            </div>
                        </h2>
                        <h2 className={cx('heading')}>Quản lý thông minh - Thành công bền vững!</h2>
                        <p>Bước đi nhỏ - Thành công lớn</p>
                    </div>
                </div>
            </div>
            <div className={cx('semester')}>
                <h2>Học kỳ</h2>
                <div className={cx('semester-select')}>
                    <Tippy
                        visible={visible}
                        onClickOutside={hide}
                        placement="bottom-end"
                        interactive
                        render={(attrs) => (
                            <div className={cx('menu')} tabIndex={-1} {...attrs}>
                                <PopperWrapper>
                                    <PopperItem
                                        onClick={() => {
                                            setSemester('20231');
                                            setVisible(false)
                                        }}
                                    >
                                        20231
                                    </PopperItem>
                                    <PopperItem
                                        onClick={() => {
                                            setSemester('20232');
                                            setVisible(false)
                                        }}
                                    >
                                        20232
                                    </PopperItem>
                                    <PopperItem
                                        onClick={() => {
                                            setSemester('20241');
                                            setVisible(false)
                                        }}
                                    >
                                        20241
                                    </PopperItem>
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('content')} onClick={visible ? hide : show}>
                            <p>{semester}</p>
                            <FontAwesomeIcon icon={faChevronDown} />
                        </div>
                    </Tippy>
                </div>
            </div>
            <div className={cx('goal')}>
                <div className={cx('education')}>
                    <Card rightIllus={<img src={import.meta.env.BASE_URL + 'images/illustration1.png'} />}>
                        <div>
                            <h2>HỌC TẬP</h2>
                            <p>Hãy sắp xếp thời gian học hợp lý và hiệu quả</p>
                        </div>
                        <Status option2="true" title="6 Mục tiêu" />
                    </Card>
                    <Link to={config.routes.education} className={cx('overlay-link')}></Link>
                </div>
                <div className={cx('skill')}>
                    <Card rightIllus={<img src={import.meta.env.BASE_URL + 'images/illustration2.png'} />}>
                        <div>
                            <h2>KỸ NĂNG</h2>
                            <p>Thường xuyên rèn luyện kỹ năng nâng cao bản thân</p>
                        </div>
                        <Status option1="true" title="5 Mục tiêu" />
                    </Card>
                    <Link to={config.routes.skill} className={cx('overlay-link')}></Link>
                </div>
                <div className={cx('exercise')}>
                    <Card rightIllus={<img src={import.meta.env.BASE_URL + 'images/illustration3.png'} />}>
                        <div>
                            <h2>RÈN LUYỆN</h2>
                            <p>Chăm chỉ rèn luyện mỗi ngày</p>
                        </div>
                        <Status option3="true" title="3 Mục tiêu" />
                    </Card>
                    <Link to={config.routes.exercise} className={cx('overlay-link')}></Link>
                </div>
            </div>
        </div>
    );
}

export default Manage;
