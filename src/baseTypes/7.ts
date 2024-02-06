/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DaysOfWeek {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY
}

function isWeekend(today: DaysOfWeek): boolean {

  return today === DaysOfWeek.SATURDAY || today === DaysOfWeek.SUNDAY;

}

const today: DaysOfWeek = DaysOfWeek.MONDAY
const res: boolean = isWeekend(today)
console.log('res', res) // поверне false, тому що це не вихідний день