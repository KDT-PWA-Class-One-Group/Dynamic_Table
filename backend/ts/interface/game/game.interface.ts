import { IHasUUID } from '../hasUUID/hasUUID.interface';
import { IPlayer } from '../player/player.interface';
import { ITeam } from '../team/team.interface';

export interface IGame extends IHasUUID {
  players: IPlayer[];
  win: ITeam;
}
