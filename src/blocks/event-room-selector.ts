import {Block} from "payload";

export const EventRoomSelector: Block = {
	slug: 'event-room-selector',
	imageURL: '/img/blocks/event-room-selector.png',
	dbName: 'event_room_selector',
	labels: {
		singular: 'Text and Image',
		plural: 'Text and Images',
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
			localized: true,
		},
	]
}

export const PresetEventRoomSelector: Block = {
	...EventRoomSelector,
	slug: 'preset-event-room-selector',
	dbName: 'preset_event_room_selector',
}