// Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly n steps. For every step he took,
// he noted if it was an uphill U, or a downhill D, step.
// Gary's hikes start and end at sea level and each step up or down represents a  unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// // A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.


// // Given Gary's sequence of up and down steps during his last hike,
// find and print the number of valleys he walked through.


// n => number of steps in Gary's hike
// s => a single string of n charachters that describe his path
function countingValleys(n, s) {

	let stepSequence = s
  let valleyCounter = 0
  let altitude = 0

  for (var step of stepSequence){
    if (step === "U"){
        altitude++
        if (altitude === 0){
          valleyCounter++
        }
    }
    else {
      altitude--
    }
  }



  return valleyCounter



}

countingValleys(9, "UDUDUDUDUD")