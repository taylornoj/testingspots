/**
 * Update Spots for current day. (one possible solution)
 *
 * @param {Object}   state           State Object.
 * @param {Object}   appointments    New Appointments array
 * @param {Object}   id              Optional appointment id (may not need)
 * @return {Array}   A Days array we can save back into state.
 */




 const fetchFreeSpots = (state, appointments) => {

  
  const appIds = state.days.filter(day => day.name === state.day);
  const todayApp = appIds[0].appointments;
  const emptyApp = todayApp.filter(app => !appointments[app].interview).length;
  return emptyApp;
}
 const updateSpots = function (state, appointments, id) {
  const days = [
    ...state.days,
  ]
  const dayIndex = state.days.findIndex((day) => 
    day.appointments.includes(id)
  )
  const spots = fetchFreeSpots(state, appointments)
  const newDay = {
    ...days[dayIndex], spots
  }
  days[dayIndex] = newDay
  // return days array
  return days;
};

module.exports = updateSpots;