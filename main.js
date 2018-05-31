$(document).ready(function() {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    let tool = new Tool();
    let c = Shape.Circle(200,200,80);
    c.fillColor = 'black';
    let text = new PointText(200,200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'Hello World';

    tool.onMouseDown = function(event) {
      let c = Shape.Circle(event.point,30);
      c.fillColor = 'navy'
    }

    paper.view.draw();
    console.log('main.js loaded');
})
