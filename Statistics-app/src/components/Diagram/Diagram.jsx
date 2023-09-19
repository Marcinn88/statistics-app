import css from '../Diagram/Diagram.module.css'
import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts'
import { diagramData, suma } from '../../data/diagramData';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

// const IMAGES = {
//     image1 : new URL('../../images/diagram.png', import.meta.url).href
// }
function roundPrecised(number, precision) {
	var power = Math.pow(10, precision);
  	return Math.round(number * power) / power;
}

  export const Diagram = () => {
    const options = {
        animationEnabled: true,
        title: {
            text: roundPrecised(suma(diagramData), 2)
        },
        subtitles: [{
            text: "Suma wydatków",
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        data: [{
            indexLabelPlacement: "inside",
            type: "doughnut",
            dataPoints: diagramData
          }]
      }
    return (
        <div className = {css.wrapper}>
          <CanvasJSChart options = {options}/>
        </div>
    );
  };