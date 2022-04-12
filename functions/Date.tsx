export const date = () => {
    const dateA = new Date();
    const yearA = dateA.getFullYear();
    const today = dateA.getDate();
    const actualMonth = dateA.getMonth() + 1;
    let monthResult = "";
  
    if (actualMonth == 1) {
      monthResult = today + "/" + "01" + "/" + yearA;
    } else if (actualMonth == 2) {
      monthResult = today + "/" + "02" + "/" + yearA;
    } else if (actualMonth == 3) {
      monthResult = today + "/" + "03" + "/" + yearA;
    } else if (actualMonth == 4) {
      monthResult = today + "/" + "04" + "/" + yearA;
    } else if (actualMonth == 5) {
      monthResult = today + "/" + "05" + "/" + yearA;
    } else if (actualMonth == 6) {
      monthResult = today + "/" + "06" + "/" + yearA;
    } else if (actualMonth == 7) {
      monthResult = today + "/" + "07" + "/" + yearA;
    } else if (actualMonth == 8) {
      monthResult = today + "/" + "08" + "/" + yearA;
    } else if (actualMonth == 9) {
      monthResult = today + "/" + "09" + "/" + yearA;
    } else if (actualMonth == 10) {
      monthResult = today + "/" + "10" + "/" + yearA;
    } else if (actualMonth == 11) {
      monthResult = today + "/" + "11" + "/" + yearA;
    } else if (actualMonth == 12) {
      monthResult = today + "/" + "12" + "/" + yearA;
    }
    return monthResult;
  };
  