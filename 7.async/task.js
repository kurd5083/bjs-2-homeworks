class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback, canCall = true) {
        if (time == undefined || callback == undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        this.callback = callback;
        this.time = time;
        this.canCall = canCall;
        this.alarmCollection.push({ canCall, time, callback })
    }

    removeClock(timeRemove) {
        for (let i = 0; i < this.alarmCollection.length; i++) {
            if (this.alarmCollection[i].time == timeRemove) {
                this.alarmCollection.splice(i, 1);
                i--;
            }
        }
    }

    getCurrentFormattedTime() {
        const date = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        })
        return date;
    }

    start() {
        if (this.intervalId != null) {
            return
        }
        const date = this.getCurrentFormattedTime()
        this.intervalId = setInterval(function (alarmCollection, time, date) {
            alarmCollection.forEach((element) => {
                if (element.canCall == true && element.time == date) {
                    element.canCall = false;
                    element.callback();
                }
            });
        }, 1000, this.alarmCollection, this.time, date);
    }

    stop() {
        clearInterval(this.intervalId)
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(element => {
            element.canCall = true;
        })
    }
    
    clearAlarms() {
        stop();
        this.alarmCollection = [];
    }
}