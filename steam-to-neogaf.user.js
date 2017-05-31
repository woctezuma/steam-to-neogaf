// ==UserScript==
// @name        Steam to NeoGAF
// @namespace   https://github.com/woctezuma/steam-to-neogaf
// @version     1
// @description Helper functions for formatting a linked image on NeoGAF
// @author	Wok
// @match       http://store.steampowered.com/app/*
// @grant       GM_setClipboard
// @run-at      document-end
// ==/UserScript==

var urlSteamStore = "http://store.steampowered.com/app/";
var urlSteamImageCDN = "http://cdn.edgecast.steamstatic.com/steam/apps/";

var href = window.location.href;

var gameID = href.split("app/")[1].split("/")[0];

var forumPost = "[URL=\"" + urlSteamStore + gameID + "/\"][IMG]" + urlSteamImageCDN + gameID + "/header.jpg[/IMG][/URL]";

GM_setClipboard (forumPost);

