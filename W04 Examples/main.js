/*
Build Agenda Data
fetch agenda data
render track info ( colors, track name )
convert times to local timezone
render each talk times 
style
*/
import AgendaBuilder from "./AgendaBuilder.js";
const agenda = new AgendaBuilder("thispath.js")
const today = new Date();
console.dir(today)