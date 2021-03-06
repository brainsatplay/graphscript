export class PlaceNode extends NodeElement {
    props: {
        colorPicked: string;
        xSize: number;
        ySize: number;
        xPosition: number;
        yPosition: number;
        xPixelSize: number;
        yPixelSize: number;
        zoom: number;
        data: {};
        canvasClicked: (x: any, y: any) => void;
        updated: {};
        animation: (node: any, origin: any, input: any) => void;
        operator: (node: any, origin: any, input: any) => void;
        forward: boolean;
        backward: boolean;
        children: any;
        parent: any;
        delay: boolean;
        repeat: boolean;
        recursive: boolean;
        animate: boolean;
        loop: any;
        tag: any;
        input: any;
        graph: any;
        node: any;
    };
    draw(node: any, origin: any, input: any): void;
    addDraw(f: any): void;
    drawFuncs: any[];
    drawSquare(): void;
    canvasClicked: (x: any, y: any) => void;
    oncreate: (props: any) => void;
    canvas: any;
    context: any;
    ctx: any;
    onresize: (props: any) => void;
    generateDataStructure(defaultColor?: (xCoord: any, yCoord: any) => string): void;
}
import { NodeElement } from "../graph.node.js";
