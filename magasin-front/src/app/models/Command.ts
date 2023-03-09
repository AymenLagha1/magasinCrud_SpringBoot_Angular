import { Client } from "./Client";
import { CommandLine } from "./CommandLine";

export class Command {
    id?:number;
    commandLines:CommandLine[] = [];
    amount?:number;
    date?:Date;
    client?:Client;
  }
  