import { Meta } from "antd/es/list/Item";
import "./cards.css"
import { ClickableCard } from "./ClickableCard";
// import { NoCards } from "./NoCards";

let loading = false;

const data = [
    {
        "title": "Exponential Expressions",
        "url": "https://byjus.com/us/math/study/concept/exponential-expressions",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Algebraic Expressions",
        "url": "https://byjus.com/us/math/study/concept/algebraic-expressions",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Writing Algebraic Expressions",
        "url": "https://byjus.com/us/math/study/concept/writing-algebraic-expressions",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Equivalent Expressions",
        "url": "https://byjus.com/us/math/study/concept/equivalent-expressions",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Creating Equivalent Expressions",
        "url": "https://byjus.com/us/math/study/concept/creating-equivalent-expressions",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Equation and its Solution",
        "url": "https://byjus.com/us/math/study/concept/equation-and-its-solution",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Solving Equations Using a Tape Diagram",
        "url": "https://byjus.com/us/math/study/concept/solving-equations-using-a-tape-diagram",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Solving an Equation Using Inverse Operations",
        "url": "https://byjus.com/us/math/study/concept/solving-an-equation-using-inverse-operations",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Introduction to Inequalities",
        "url": "https://byjus.com/us/math/study/concept/introduction-to-inequalities",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Graphing Simple Inequalities",
        "url": "https://byjus.com/us/math/study/concept/graphing-simple-inequalities",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Simplifying Algebraic Expressions",
        "url": "https://byjus.com/us/math/study/concept/simplifying-algebraic-expressions",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Factoring Linear Expressions",
        "url": "https://byjus.com/us/math/study/concept/factoring-linear-expressions",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Solving Linear Equations",
        "url": "https://byjus.com/us/math/study/concept/solving-linear-equations",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Forming Equations and Inequalities",
        "url": "https://byjus.com/us/math/study/concept/forming-equations-and-inequalities",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Writing Simple Equation and Inequality into Words",
        "url": "https://byjus.com/us/math/study/concept/writing-simple-equation-and-inequality-into-words",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "One-Step Linear Inequalities",
        "url": "https://byjus.com/us/math/study/concept/one-step-linear-inequalities",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Two-Step Linear Inequalities",
        "url": "https://byjus.com/us/math/study/concept/two-step-linear-inequalities",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Modeling Linear Inequalities",
        "url": "https://byjus.com/us/math/study/concept/modeling-linear-inequalities",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Rules of Integer Exponents I",
        "url": "https://byjus.com/us/math/study/concept/rules-of-integer-exponents-I",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Rules of Integer Exponents II",
        "url": "https://byjus.com/us/math/study/concept/rules-of-integer-exponents-II",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Simplifying Exponential Expressions Using Rules",
        "url": "https://byjus.com/us/math/study/concept/simplifying-exponential-expressions-using-rules",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Squares and Square Roots",
        "url": "https://byjus.com/us/math/study/concept/squares-and-square-roots",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Cubes and Cube Roots",
        "url": "https://byjus.com/us/math/study/concept/cubes-and-cube-roots",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Scientific Notation",
        "url": "https://byjus.com/us/math/study/concept/scientific-notation",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Operations on Scientific Notation",
        "url": "https://byjus.com/us/math/study/concept/operations-on-scientific-notation",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Solutions of a Linear Equation with One Variable",
        "url": "https://byjus.com/us/math/study/concept/solutions-of-a-linear-equation-with-one-variable",
        "description": "Interactive applet, Video, Crisp content"
    },
    {
        "title": "Solving Linear Equations in One Variable",
        "url": "https://byjus.com/us/math/study/concept/solving-linear-equations-in-one-variable",
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

function AlgebraCards(){
    // if(dataArray.length == 0){return <NoCards></NoCards>}
    return <div className="cards-holder">
        {dataArray}
    </div>
}

export default AlgebraCards;