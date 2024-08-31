import classNames from 'classnames/bind';
import styles from './Home.module.sass';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import config from '../../config';
import BoxList from '../../components/BoxList';
import ItemList from '../../components/BoxList/ItemList';
import Status from '../../components/Status';
import DoughnutChart from '../../components/Chart/DoughnutChart';
import { LineChart } from '../../components/Chart';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <h2>Trang chủ</h2>
            <div className={cx('banner')}>
                <div className={cx('banner-bg')}>
                    <img src={import.meta.env.BASE_URL + 'images/banner1.png'} alt="" />
                </div>
                <div className={cx('banner-content')}>
                    <div className={cx('title')}>
                        <div>
                            <h2 className={cx('heading')}>
                                Đưa ra quyết định sáng suốt với <span className={cx('hl-text1')}>KPI</span>
                                <span className={cx('hl-text2')}>Zenith</span>
                            </h2>
                            <p>Định hướng mục tiêu - Nâng cao hiệu quả</p>
                        </div>
                        <Button
                            green="true"
                            righticon={<FontAwesomeIcon icon={faArrowRight} />}
                            to={config.routes.manage}
                        >
                            Khám phá ngay
                        </Button>
                    </div>
                    <div className={cx('illustrator')}>
                        <img src={import.meta.env.BASE_URL + 'images/illus-banner1.png'} alt="illustrator" />
                    </div>
                </div>
            </div>
            <div className={cx('statistic')}>
                <div className={cx('heading')}>
                    <h3>Số liệu thống kê mới nhất - Tháng 5 năm 2024</h3>
                    <Button none="true" to={config.routes.statistic}>
                        Chi tiết
                    </Button>
                </div>
                <div className={cx('inner')}>
                    <div className={cx('item')}>
                        <div className={cx('item-content', 'education')}>
                            <div className={cx('title')}>
                                <h3>Học Tập</h3>
                                <Status option2="true" title="Hoàn thành 75%" />
                            </div>
                            <div className={cx('image')}>
                                <img src={import.meta.env.BASE_URL + 'images/illustration1.png'} alt="" />
                                <div className={cx('chart')}>
                                    <DoughnutChart percent={75} color='255, 255, 255'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('item-content', 'skill')}>
                            <div className={cx('title')}>
                                <h3>Kỹ Năng</h3>
                                <Status option1="true" title="Hoàn thành 76%" />
                            </div>
                            <div className={cx('image')}>
                                <img src={import.meta.env.BASE_URL + 'images/illustration2.png'} alt="" />
                                <div className={cx('chart')}>
                                    <DoughnutChart percent={76} color='255, 255, 255'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item')}>
                        <div className={cx('item-content', 'exercise')}>
                            <div className={cx('title')}>
                                <h3>Rèn Luyện</h3>
                                <Status option3="true" title="Hoàn thành 88%" />
                            </div>
                            <div className={cx('image')}>
                                <img src={import.meta.env.BASE_URL + 'images/illustration3.png'} alt="" />
                                <div className={cx('chart')}>
                                    <DoughnutChart percent={88} color='255, 255, 255'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('box')}>
                <div className={cx('box-item')}>
                    <BoxList heading="Nhắc nhở">
                        <ItemList lefticon={<FontAwesomeIcon icon={faCircleExclamation} />}>
                            <p>Bạn chưa cập nhật mục tiêu trong tiêu chí “Học tập” từ 7 ngày trước</p>
                        </ItemList>
                        <ItemList lefticon={<FontAwesomeIcon icon={faCircleExclamation} />}>
                            <p>Bạn chưa cập nhật mục tiêu trong tiêu chí “Kỹ năng” từ 7 ngày trước</p>
                        </ItemList>
                        <ItemList lefticon={<FontAwesomeIcon icon={faCircleExclamation} />}>
                            <p>Bạn chưa cập nhật mục tiêu trong tiêu chí “Rèn luyện” từ 7 ngày trước</p>
                        </ItemList>
                    </BoxList>
                </div>
                <div className={cx('box-item')}>
                    <div className={cx('line-chart')}>
                        <LineChart />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
