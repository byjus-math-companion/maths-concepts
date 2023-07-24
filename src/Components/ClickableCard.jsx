import { Card } from "antd";
import { useState, useEffect } from "react";

export function ClickableCard(props) {
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
  
    const isPhoneScreen = windowWidth <= 768;
    
    let style = {
        width: 250,
        marginTop: 16,
        height: 250,
    }
    let phoneStyle = {
        width: '90vw',
        height: 90,
        padding: 0,
    }

    return <div className="clickableCard">
        <a href={props.url} target="_blank">
            <Card
                style={isPhoneScreen ? phoneStyle : style}
                className="hoverCard"
            >
                {props.children}
            </Card>
        </a>
    </div>
}