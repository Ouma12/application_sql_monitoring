import { uptime } from './uptime';
export class Projects{
    id:number;
    name:string;
    date_prod:string;
    uptime:uptime;

    constructor(id:number,name:string,date_prod:string,uptime:uptime){
        this.id=id;
        this.name=name;
        this.date_prod=date_prod;
        this.uptime=uptime
    }
}