export class uptime{
    id:number;
    project_id:number;
    app:number;
    db:number;
    dsk:number;
    date:string;
    constructor(id:number,project_id:number,app:number,db:number,dsk:number,date:string)
    {
        this.id=id;
        this.project_id=project_id;
        this.app=app;
        this.db=db;
        this.dsk=dsk;
        this.date=date;
    }
}