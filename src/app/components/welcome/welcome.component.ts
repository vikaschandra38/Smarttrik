import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../assets/scripts/canvasjs.min';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let chart = new CanvasJS.Chart("chartContainer", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title:{
        text: "Power Consumption"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: [
          { y: 450, name: "Area1" },
          { y: 120, name: "Area2" },
          { y: 300, name: "Area3" },
          { y: 800, name: "Area4" },
          { y: 150, name: "Area5" },
          { y: 150, name: "Area6"},
          { y: 250, name: "Area7" }
        ]
      }]
    });
    chart.render();

      let chartt = new CanvasJS.Chart("chartContainerr", {
        animationEnabled: true,
        theme: "light2",
        title:{
          text: "Average Income"
        },
        axisY:{
          includeZero: false
        },
        data: [{        
          type: "line",
              indexLabelFontSize: 16,
          dataPoints: [
            { y: 450 },
            { y: 414},
            { y: 520, indexLabel: "\u2191 highest",markerColor: "red", markerType: "triangle" },
            { y: 460 },
            { y: 450 },
            { y: 500 },
            { y: 480 },
            { y: 480 },
            { y: 410 , indexLabel: "\u2193 lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
            { y: 500 },
            { y: 480 },
            { y: 510 }
          ]
        }]
      });
      chartt.render();
    

    let charttt = new CanvasJS.Chart("chartContainerrr", {
      animationEnabled: true,
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      title:{
        text: "Avearage Power"
      },
      axisY: {
        title: "Power"
      },
      data: [{        
        type: "column",  
        showInLegend: true, 
        legendMarkerColor: "grey",
        legendText: "Area List",
        dataPoints: [      
          { y: 300878, label: "Area1" },
          { y: 266455,  label: "Area2" },
          { y: 169709,  label: "Area3" },
          { y: 158400,  label: "Area4" },
          { y: 142503,  label: "Area5" },
          { y: 101500, label: "Area6" },
          { y: 97800,  label: "Area7" },
          { y: 80000,  label: "Area8" }
        ]
      }]
    });
    charttt.render();
  }
}
