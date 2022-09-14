import bootstrap from "./assets/logo/bootstrap.png";
import css from "./assets/logo/css.png";
import github from "./assets/logo/newgithub.png";
import graphql from "./assets/logo/graphql.png";
import html from "./assets/logo/html.png";
import js from "./assets/logo/javascript.png";
import mongodb from "./assets/logo/mongodb.png";
import mysql from "./assets/logo/mysql.png";
import node from "./assets/logo/node.png";
import reactImage from "./assets/logo/react.png";
import tailwind from "./assets/logo/tailwind.png";


export default function Resume() {

    const tools = [
        {
            id: 1,
            src: html,
            title: 'HTML'
        },
        {
            id: 2,
            src: css,
            title: 'CSS'
        },
        {
            id: 3,
            src: js,
            title: 'JAVASCRIPT'
        },
        {
            id: 4,
            src: node,
            title: 'NODE'
        },
        {
            id: 5,
            src: reactImage,
            title: 'REACT'
        },
        {
            id: 6,
            src: tailwind,
            title: 'TAILWIND'
        },
        {
            id: 7,
            src: bootstrap,
            title: 'BOOTSTRAP'
        },
        {
            id: 8,
            src: mysql,
            title: 'MYSQL'
        },
        {
            id: 9,
            src: mongodb,
            title: 'MONGODB'
        },
        {
            id: 10,
            src: graphql,
            title: 'GRAPHQL',
        },
        {
            id: 11,
            src: github,
            title: 'GITHUB'
        }
    ]
    return (  
        <div name='resume' className="bg-gradient-to-b  from-pink-50 to-white w-full h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text4xl font-bold p-2 inline">Experience</p>
                    <p className="py-4">These are the technologies I've worked with. You can also find my resume <a href="https://docs.google.com/document/d/1IrkchVlzSmhKQRrkUsIFmzFHhgGeNiA-hURXgipm6KQ/edit#" target="_blank" rel="noreferrer" className='text-pink-500 font-bold'>here.</a></p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {
                        tools.map(({id, src, title}) => (
                            <div key={id} 
                            className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-400">
                            <img src={src} alt="html" className="w-20 mx-auto"/>
                            <p className="mt-4">{title}</p>
                        </div>
                        ))
                    }  
                </div>
            </div>       
        </div>
    );
  }
  