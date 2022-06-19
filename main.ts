let temp = datalogger.createCV("temperature", input.temperature())
let accel = datalogger.createCV("acceleration", input.acceleration(Dimension.X))
let lite = datalogger.createCV("light", input.lightLevel())
datalogger.log(
temp,
accel,
lite
)
