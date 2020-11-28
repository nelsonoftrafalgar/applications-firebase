import { IDatePickerAction, IDatePickerState } from 'src/models/statistiscs'
import styled, { ThemeProvider } from 'styled-components'

import { DateRangeInput } from '@datepicker-react/styled'
import React from 'react'
import { datePickerTheme } from 'src/styles/datePickerTheme'
import { globalStyles } from 'src/styles/styles'

const Container = styled.div`
  width: 100%;
  background: ${globalStyles.light_bg};
  padding: 20px;
  display: flex;
  justify-content: flex-end;
`

interface IProps {
  state: IDatePickerState
  dispatch: React.Dispatch<IDatePickerAction>
}

const DatePicker: React.FC<IProps> = ({ state, dispatch }) => {
  return (
    <Container>
      <ThemeProvider theme={datePickerTheme}>
        <DateRangeInput
          onDatesChange={(data) => dispatch({ type: 'DATE_CHANGE', payload: data })}
          onFocusChange={(focusedInput) =>
            dispatch({ type: 'FOCUS_CHANGE', payload: focusedInput })
          }
          startDate={state.startDate}
          endDate={state.endDate}
          focusedInput={state.focusedInput}
          displayFormat="dd/MM/yyyy"
          showSelectedDates={false}
          showClose={false}
          showEndDateCalendarIcon={false}
          showStartDateCalendarIcon={false}
        />
      </ThemeProvider>
    </Container>
  )
}

export default DatePicker
