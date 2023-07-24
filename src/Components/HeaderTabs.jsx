import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import AlgebraCards from './AlgebraCards.jsx';
import { NumberSense } from './NumberSense.jsx';
import GeometryCards from './GeometryCards.jsx';
import RatioPropCards from './RatioPropCards.jsx';
import StatsProbCards from './StatsProbCards.jsx';
import FunctionsCards from './FunctionsCards.jsx';
import './headerTabs.css';

const HeaderTabs = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Update window width state when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isPhoneScreen = windowWidth <= 768; // Adjust the screen size breakpoint if needed

  const items = [
    {
      key: '1',
      tab: 'Algebra',
      content: <AlgebraCards />,
    },
    {
      key: '2',
      tab: 'Geometry',
      content: <GeometryCards />,
    }
  ];

  return (
    <div className="mainPage">
      <Tabs defaultActiveKey="1" size={isPhoneScreen ? 'large' : 'large'} centered>
        {items.map((item) => (
          <Tabs.TabPane tab={item.tab} key={item.key}>
            {item.content}
          </Tabs.TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default HeaderTabs;
