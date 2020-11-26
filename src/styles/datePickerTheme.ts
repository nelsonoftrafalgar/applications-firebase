import { globalStyles } from 'src/styles/styles'

export const datePickerTheme = {
  breakpoints: ['32em', '48em', '64em'],
  reactDatepicker: {
    daySize: [30, 30],
    fontFamily: globalStyles.basic_font_family,
    dateRangeZIndex: 1,
    dateRangeDatepickerWrapperRight: '0',
    dateRangeDatepickerWrapperLeft: 'unset',
    datepickerBackground: globalStyles.dark_bg,
    inputBackground: globalStyles.dark_bg,
    inputLabelBorder: 'none',
    inputPadding: '0 30px',
    monthLabelColor: globalStyles.light_font_color,
    navButtonBackground: globalStyles.light_bg,
    navButtonBorder: 'none',
    dayBackground: globalStyles.light_bg,
    dayBorderColor: globalStyles.dark_bg,
    inputColor: globalStyles.light_font_color,
    resetDatesTextColor: globalStyles.light_font_color,
    dateRangeGridTemplateColumns: '150px 40px 150px',
    colors: {
      accessibility: '#3fd802',
      selectedDay: '#3fd802',
      selectedDayHover: '#8bf75d',
      primaryColor: '#5cd836'
    }
  }
}