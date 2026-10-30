import { playhtml } from 'https://unpkg.com/playhtml@2.15.0/dist/playhtml.es.js';

playhtml.init({ cursors: { enabled: false } });
await playhtml.ready;
const setPositions = playhtml.createPageData('bitsydata', {});

var lastSent = null;
var drawnRemote = []; // where remote players were drawn last frame

//rewrite bitsy's original loop
var originalUpdate = update;
bitsy.loop(function (dt) {
  //do the original update
	var result = originalUpdate(dt);
  //but send the presence via playhtml
	var p = player();
	if (p && (!lastSent || lastSent.room !== p.room || lastSent.x !== p.x || lastSent.y !== p.y)) {
		lastSent = { room: p.room, x: p.x, y: p.y };
		playhtml.presence.setMyPresence("bitsy", lastSent);
	}
	return result;
});

// draw the other players on top of the room
var originalDrawRoom = drawRoom;
window.drawRoom = function (room, args) {
	originalDrawRoom(room, args);
	if (!room || isNarrating) return;
	var frameIndex = args ? args.frameIndex : undefined;
	var me = player();

	// sprites stay on the map layer, so erase last frame's remote players first
	drawnRemote.forEach(function (pos) {
		if (pos.x === me.x && pos.y === me.y) return; // don't erase our own avatar
		setTile(bitsy.MAP2, pos.x, pos.y, 0);
		drawRoomForegroundTile(room, frameIndex, pos.x, pos.y);
	});
	drawnRemote = [];

	playhtml.presence.getPresences().forEach(function (peer) {
		var pos = peer.bitsy;
		if (peer.isMe || !pos || pos.room !== room.id) return;
		drawSprite(getSpriteFrame(me, frameIndex), pos.x, pos.y);
		drawnRemote.push(pos);
	});
};