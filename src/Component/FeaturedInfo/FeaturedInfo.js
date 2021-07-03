import { ArrowDownward, ArrowUpwardOutlined } from '@material-ui/icons';
import React from 'react';
import './FeaturedInfo.css';
const FeaturedInfo = () => {
	return (
		<div className="featured">
			<div className="featuredItem">
				<span className="featuredTitle">Revenue</span>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">$2,415</span>
					<span className="featuredMoneyRate">
						-11.4 <ArrowDownward className="featuredIcon negative" />{' '}
					</span>
				</div>
				<span className="featuredSubtitle">Compared to last month</span>
			</div>
			<div className="featuredItem">
				<span className="featuredTitle">Revenue</span>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">$2,415</span>
					<span className="featuredMoneyRate">
						-11.4 <ArrowDownward className="featuredIcon negative" />{' '}
					</span>
				</div>
				<span className="featuredSubtitle">Compared to last month</span>
			</div>
			<div className="featuredItem">
				<span className="featuredTitle">Revenue</span>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">$2,415</span>
					<span className="featuredMoneyRate">
						11.4 <ArrowUpwardOutlined className="featuredIcon" />{' '}
					</span>
				</div>
				<span className="featuredSubtitle">Compared to last month</span>
			</div>
		</div>
	);
};

export default FeaturedInfo;
