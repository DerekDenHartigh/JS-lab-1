"use strict";

let name1 = prompt("what is name 1?");
let name2 = prompt("what is name 2?");
let name3 = prompt("what is name 3?");

if ((name1.length === name2.length) && (name1.length === name3.length) && (name2.length === name3.length)) {
    console.log (`${name1}, ${name2}, & ${name3} have the same name length`)} else
if (name1.length > name2.length && name1.length > name3.length) {
    console.log (`${name1} has the longest name.`)} else
if (name2.length > name1.length && name2.length > name3.length) {
    console.log (`${name2} has the longest name.`)} else
if (name3.length > name1.length && name3.length > name2.length) {
    console.log (`${name3} has the longest name.`)} else
if (name1.length == name2.length) {
    console.log(`${name1} & ${name2} are tied for the longest name length`)}else
if (name1.length == name3.length) {
    console.log(`${name1} & ${name3} are tied for the longest name length`)} else
if (name2.length == name3.length) {
    console.log(`${name2} & ${name3} are tied for the longest name length`)};