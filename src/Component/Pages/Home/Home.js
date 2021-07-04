import React from 'react';
import Chart from '../../Chart/Chart';
import FeaturedInfo from '../../FeaturedInfo/FeaturedInfo';
import './Home.css';
import { userData } from '../../../DummyData';
import WidgetSm from '../../../Component/WidgetSm/WidgetSm';
import WidgetLg from '../../../Component/WidgetLg/WidgetLg';
const Home = () => {
	return (
		<div className="home">
			<FeaturedInfo />
			<Chart data={userData} title="User Analytics" grid dataKey="Active User" />
			<div className="homeWidgets">
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	);
};

export default Home;
