class EventEmitter{
    constructor(){
        this.events={
            start:[fn,fn,fn]
        }
    }
    on(type,listener){
        this.events[type]=this.events[type] || [] // если там уже имеется значение мы присвоим его
        this.events[type].push(listener)
        // listener - is a function
    }
    emit(type,arg){
        if(this.events[type]){
            this.events[type].forEach(listener=>listener(arg))
        }
    }
}
module.exports=EventEmitter