import { Event } from '../interfaces/interface';

export class eventManager {
    private events: Event[] = [];
    private nextEventId: number = 1;
    private nextParticipantId: number = 1;

    createEvent(name: string, place: string, date: string): Event {
        const newEvent: Event = {
            id: this.nextEventId++,
            name,
            place,
            date,
            participants: []
        };
        this.events.push(newEvent);
        return newEvent;
}

editEvenz(eventId: number, updatedEvent: Partial<Event>): Event | undefined {
    const event = this.events.find(event => event.id === eventId);
    if (event) {
        Object.assign(event, updatedEvent);
        return event;
    } 
}

deleteEvent(eventId: number): boolean {
    const eventIndex = this.events.findIndex(event => event.id === eventId);
    if (eventIndex !== -1) {
        this.events.splice(eventIndex, 1);
        return true;
    }
    return false;
}

getEvent(eventId: number): Event | undefined {
    return this.events.find(event => event.id === eventId);
}

