export function h0(timestamp=Date.now()) {
  const targrt = new Date(timestamp)

  targrt.setHours(0)
  targrt.setMinutes(0)
  targrt.setSeconds(0)
  targrt.setMilliseconds(0)

  return targrt.getTime()
}

