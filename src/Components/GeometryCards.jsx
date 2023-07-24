import { Meta } from "antd/es/list/Item";
import "./cards.css"
import { ClickableCard } from "./ClickableCard";
// import { NoCards } from "./NoCards";

let loading = false;

const data = [
    {
        "title": "Area of Rectangle",
        "url": "https://byjus.com/us/math/study/concept/area-of-rectangle",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Area of Circle",
        "url": "https://byjus.com/us/math/study/concept/area-of-circle",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Surface Area of Right Triangular Prism",
        "url": "https://byjus.com/us/math/study/concept/surface-area-of-right-triangular-prism",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Surface Area of Rectangular Prism",
        "url": "https://byjus.com/us/math/study/concept/surface-area-of-rectangular-prism",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Surface Area of Cone",
        "url": "https://byjus.com/us/math/study/concept/surface-area-of-cone",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Volume of Cube",
        "url": "https://byjus.com/us/math/study/concept/volume-of-cube",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Area of a Triangle",
        "url": "https://byjus.com/us/math/study/concept/area-of-a-triangle",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Circumference of Circle",
        "url": "https://byjus.com/us/math/study/concept/circumference-of-circle",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Area of Rhombus",
        "url": "https://byjus.com/us/math/study/concept/area-of-rhombus",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Length of Arc",
        "url": "https://byjus.com/us/math/study/concept/length-of-arc",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Area of Square",
        "url": "https://byjus.com/us/math/study/concept/area-of-square",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Surface Area of Cylinder",
        "url": "https://byjus.com/us/math/study/concept/surface-area-of-cylinder",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Surface Area of Cube",
        "url": "https://byjus.com/us/math/study/concept/surface-area-of-cube",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Surface Area of Sphere",
        "url": "https://byjus.com/us/math/study/concept/surface-area-of-sphere",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Area of Sector of a Circle",
        "url": "https://byjus.com/us/math/study/concept/area-of-sector-of-a-circle",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Units to Measure Capacity",
        "url": "https://byjus.com/us/math/study/concept/units-to-measure-capacity",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Volume of Rectangular Prism",
        "url": "https://byjus.com/us/math/study/concept/volume-of-rectangular-prism",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Diameter and Circumference",
        "url": "https://byjus.com/us/math/study/concept/diameter-and-circumference",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Volume of Cylinder",
        "url": "https://byjus.com/us/math/study/concept/volume-of-cylinder",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Area of Trapezoid",
        "url": "https://byjus.com/us/math/study/concept/area-of-trapezoid",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Volume of Triangular Prism",
        "url": "https://byjus.com/us/math/study/concept/volume-of-triangular-prism",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Area of Parallelogram",
        "url": "https://byjus.com/us/math/study/concept/area-of-parallelogram",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Volume of Cone",
        "url": "https://byjus.com/us/math/study/concept/volume-of-cone",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Surface Area of Pyramids",
        "url": "https://byjus.com/us/math/study/concept/surface-area-of-pyramids",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Volume of Pyramids",
        "url": "https://byjus.com/us/math/study/concept/volume-of-pyramids",
        "description": "Interactive applet, Video, Crisp content"
    }
]

const dataArray = data.map((card,ind)=>{
    return <ClickableCard url = {card.url} key = {ind}>
    <Meta
    title={<h2>{card.title}</h2>}
    description={<p>{card.description}</p>}
    />
</ClickableCard>
});

function GeometryCards(){
    // if(dataArray.length == 0){return <NoCards></NoCards>}
    return <div className="cards-holder">
        {dataArray}
    </div>
}

export default GeometryCards;