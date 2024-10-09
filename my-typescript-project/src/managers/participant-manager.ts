import { participant } from '../interfaces/interface';

export class participantManager {
    private participants: participant[] = [];
    private nextParticipantId: number = 1;

    registerParticipant(name: string, age: number): participant {
        const newParticipant: participant = {
            id: this.nextParticipantId++,
            name,
            age
        };
        this.participants.push(newParticipant);
        return newParticipant;
    }

    deleteParticipant(participantId: number): boolean {
        const participantIndex = this.participants.findIndex(participant => participant.id === participantId);
        if (participantIndex !== -1) {
            this.participants.splice(participantIndex, 1);
            return true;
        }
        return false;
    }

}