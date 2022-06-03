/// <reference types="react" />
import { actionsTypes, bodyTypes, cardTypes, imageTypes, titleTypes } from "./Card.types";
declare function Card({ children, width, ...rest }: cardTypes): JSX.Element;
declare namespace Card {
    var Img: ({ img, ...rest }: imageTypes) => JSX.Element;
    var Title: ({ children, ...rest }: titleTypes) => JSX.Element;
    var Body: ({ children, ...rest }: bodyTypes) => JSX.Element;
    var Actions: ({ children, ...rest }: actionsTypes) => JSX.Element;
}
export default Card;
