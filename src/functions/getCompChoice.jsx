import React from "react";
import CHOICE_DATA from "../components/CHOICE_DATA";

const getRandomInt = () => Math.floor(Math.random() * Math.floor(3));

export const getCompChoice = () => CHOICE_DATA[getRandomInt()];
