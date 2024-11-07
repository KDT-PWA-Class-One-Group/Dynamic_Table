import { TeamType } from 'ts/types/team.type';
import { IPlayer } from '../player/player.interface';
export interface ITeam {
  team_name: TeamType;
  player: IPlayer[];
}
