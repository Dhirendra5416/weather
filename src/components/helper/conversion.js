

export const getDayOfWeek=(dateString)=> {
    const date = new Date(dateString);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[date.getDay()];
  }

  export const getWindDirection=(degrees)=> {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round((degrees % 360) / 45);
    return directions[index % 8];
}

export const getRadiationLevel=(radiationValue)=> {
    if (radiationValue >= 0 && radiationValue < 50) {
      return  "Low" ;
    } else if (radiationValue >= 50 && radiationValue < 100) {
      return  "Moderate";
    } else if (radiationValue >= 100 && radiationValue < 200) {
      return "High" ;
    } else {
      return "V H";
    }
  }

  export const getCurrentAndSixDaysLaterDate=()=>{
    const currentDate = new Date();
    const sixDaysLaterDate = new Date(currentDate);
    sixDaysLaterDate.setDate(currentDate.getDate() + 6);
    
    return [currentDate.toISOString().split('T')[0], sixDaysLaterDate.toISOString().split('T')[0]];
}
