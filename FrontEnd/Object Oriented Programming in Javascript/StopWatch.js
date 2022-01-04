function StopWatch(){
    let starttime, endtime, running, duration = 0;

    this.start = function(){
        if(running)
            throw new Error('Stopwatch has already been started');
        
            running = true;
            starttime = new Date();
    };

    this.stop = function(){
        if(!running)
            throw new Error('Stopwatch is not running');

        running = false;
        endtime= new Date();

        const seconds = (endtime.getTime()-starttime.getTime())/1000;
        duration += seconds;
    };

    this.reset = function(){
        starttime = null;
        endtime = null;
        running = false;
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration;
        }
    })

}