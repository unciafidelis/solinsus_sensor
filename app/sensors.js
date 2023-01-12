class Sensors {
    constructor(temperature,humidity,pressure){
        this.temperature = temperature
        this.humidity = humidity
        this.pressure = pressure
    }
    getInfo(){
        return `Temperatura: ${this.temperature} | Humedad: ${this.humidity} | Presión atmosférica: ${this.pressure}`
    }
    
}

module.exports = Sensors