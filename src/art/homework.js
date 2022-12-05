import { makeNoise3D } from "fast-simplex-noise";
import { hsl, gray } from "../color.js";

let n = makeNoise3D();

/**
 * I call this shade function once for every pixel in the image, and 
 * set the color equal to whatever you return.
 * 
 * I call it 30 times a second so you can animate things
 * 
 * @param x - The x position in the image, from 0 (left) to 1 (right)
 * @param y - The y position in the image, from 0 (top) to 1 (bottom)
 * @param t - The time passed, in seconds
 * @returns The RGB color to display at the x,y location at time t
 */
function shade(x, y, t) {
    //❓❓ Question 2
    //❓❓ Question 3
    //❓❓ Question 4
    return [0.65, 0.45, 0.32];
}

/**
 * I call this draw function 30 times per second.
 * @param ctx - The 2d drawing context
 * @param t -The time in seconds
 */
function draw(ctx, t) {
    //See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

    function circle(x, y, r) {
        ctx.beginPath();
        ctx.arc(x,y,r, 0, 2 * Math.PI);
    }

    //All lines 2px wide and black
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';

    //Drawing the head of emoji 
    circle(100, 100, 40);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke();

        //Drawing the eye of emoji 
        circle(80, 100, 10);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.stroke();

        //Drawing the eye of emoji 
        circle(-60, 600, 10);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.stroke();
    
}

// We will now create snowfall. 
let addSnow = () => {
    const random = (min, max) => Math.random * (max - min) + min
    let screenwidth = px
    let screenheight = px

    let snow = document.createElement("div");
    snow.style = "fixed";
    snow.stylewidth = "10px";
    snow.styleheigth = "10px";
    snow.style.backgroundcolor = "white"
    snow.style.borderRadius = "60%"
    snow.style.index = "100"
}



export default { name: "My Homework", shade, draw }