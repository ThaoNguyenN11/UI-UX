import classNames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faLightbulb, faSquarePen, faThumbTack } from '@fortawesome/free-solid-svg-icons';
import styles from './Tabs.module.sass';
import BoxList from '../../../../components/BoxList';
import ItemList from '../../../../components/BoxList/ItemList';
import Status from '../../../../components/Status';
import { BarChart } from '../../../../components/Chart';
import PieChart from '../../../../components/Chart/PieChart';

const cx = classNames.bind(styles);

function Tabs() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: number) => {
        setToggleState(index);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('bloc-tabs')}>
                <div className={cx('tabs', { active: toggleState === 1 })} onClick={() => toggleTab(1)}>
                    Tiến độ
                </div>
                <div className={cx('tabs', { active: toggleState === 2 })} onClick={() => toggleTab(2)}>
                    Phân tích
                </div>
            </div>
            <div className={cx('content', { 'content-active': toggleState === 1 })}>
                <div className={cx('inner')}>
                    <div className={cx('inner-item')}>
                        <BoxList heading="Theo dõi chỉ số">
                            <ItemList lefticon={<FontAwesomeIcon icon={faThumbTack} />}>
                                <p>Số giờ học trên lớp</p>
                                <Status option1="true" title="12 / 20 giờ" />
                            </ItemList>
                            <ItemList lefticon={<FontAwesomeIcon icon={faThumbTack} />}>
                                <p>Số giờ tự học</p>
                                <Status option1="true" title="12 / 20 giờ" />
                            </ItemList>
                            <ItemList lefticon={<FontAwesomeIcon icon={faThumbTack} />}>
                                <p>Số giờ thí nghiệm / thực hành</p>
                                <Status option1="true" title="12 / 20 giờ" />
                            </ItemList>
                            <ItemList lefticon={<FontAwesomeIcon icon={faThumbTack} />}>
                                <p>Số giờ làm bài tập</p>
                                <Status option1="true" title="12 / 20 giờ" />
                            </ItemList>
                        </BoxList>
                    </div>
                    <div className={cx('inner-item')}>
                        <BoxList heading="Nhật ký hoạt động">
                            <ItemList lefticon={<FontAwesomeIcon icon={faSquarePen} />}>
                                <div>
                                    <p>Cập nhật giờ học trên lớp</p>
                                    <p>24/05/2024</p>
                                </div>
                                <Status option2="true" title="30 phút" />
                            </ItemList>
                            <ItemList lefticon={<FontAwesomeIcon icon={faSquarePen} />}>
                                <div>
                                    <p>Cập nhật giờ tự học</p>
                                    <p>24/05/2024</p>
                                </div>
                                <Status option2="true" title="30 phút" />
                            </ItemList>
                            <ItemList lefticon={<FontAwesomeIcon icon={faSquarePen} />}>
                                <div>
                                    <p>Cập nhật giờ thí nghiệm / thực hành</p>
                                    <p>24/05/2024</p>
                                </div>
                                <Status option2="true" title="30 phút" />
                            </ItemList>
                            <ItemList lefticon={<FontAwesomeIcon icon={faSquarePen} />}>
                                <div>
                                    <p>Cập nhật giờ làm bài tập</p>
                                    <p>24/05/2024</p>
                                </div>
                                <Status option2="true" title="30 phút" />
                            </ItemList>
                        </BoxList>
                    </div>
                </div>
            </div>
            <div className={cx('content', { 'content-active': toggleState === 2 })}>
                <div className={cx('inner')}>
                    <div className={cx('inner-item')}>
                        <div className={cx('chart-wrapper')}>
                            <BarChart />
                        </div>
                    </div>
                    <div className={cx('inner-item', 'rate')}>
                        <BoxList heading="Đánh giá mức độ hoàn thành">
                            <div className={cx('chart')}>
                                <div className={cx('chart-content')}><PieChart /></div>
                                <div className={cx('chart-note')}>
                                    <div className={cx('chart-note-item')}>
                                        <FontAwesomeIcon icon={faCircle} color='#0FD186'/>
                                        <p>Hoàn thành</p>
                                    </div>
                                    <div className={cx('chart-note-item')}>
                                        <FontAwesomeIcon icon={faCircle} color='#FFD43B' />
                                        <p>Còn lại</p>
                                    </div>
                                </div>
                            </div>
                            <ItemList lefticon={<FontAwesomeIcon icon={faLightbulb} />}>
                                <p>
                                    Mức độ hoàn thành Tiếng Nhật của bạn đã đạt 80%. Hãy xem xét các yếu tố còn lại để
                                    đạt mục tiêu 100%.
                                </p>
                            </ItemList>
                            <ItemList lefticon={<FontAwesomeIcon icon={faLightbulb} />}>
                                <p>Số giờ tự học của bạn đang thấp, bạn nên cải thiện số giờ tự học của mình.</p>
                            </ItemList>
                        </BoxList>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tabs;
