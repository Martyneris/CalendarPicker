/**
 * Calendar Picker Component
 *
 * C`op`yright 2016 Yahoo Inc.
 * Licensed under the terms of the MIT license. See LICENSE file in the project root for terms.
 */
const DEFAULT_SELECTED_BACKGROUND_COLOR = '#5ce600';
const DEFAULT_SELECTED_TEXT_COLOR = '#000000';
const DEFAULT_TODAY_BACKGROUND_COLOR = '#CCCCCC';

export function makeStyles(params) {
  const {
    containerWidth,
    containerHeight,
    scaleFactor,
    selectedDayColor,
    selectedDayTextColor,
    todayBackgroundColor,
    dayShape
  } = params;
  const scaler = Math.min(containerWidth, containerHeight) / scaleFactor;
  const SELECTED_BG_COLOR = selectedDayColor ? selectedDayColor : DEFAULT_SELECTED_BACKGROUND_COLOR;
  const SELECTED_TEXT_COLOR = selectedDayTextColor ? selectedDayTextColor : DEFAULT_SELECTED_TEXT_COLOR;
  const TODAY_BG_COLOR = todayBackgroundColor ? todayBackgroundColor : DEFAULT_TODAY_BACKGROUND_COLOR;

  return {
    containerWidth,
    containerHeight,

    calendar: {
      height: 320*scaler,
      marginTop: 10*scaler
    },

    dayButton: {
      width: 40,
      height: 40,
      borderRadius: 20,
      alignSelf: 'center',
      justifyContent: 'center'
    },

    dayLabel: {
      fontSize: 12,
      fontWeight: '500',
      color: '#2F3046',
      alignSelf: 'center'
    },

    selectedDayLabel: {
      color: '#FFFFFF',
    },

    dayLabelsWrapper: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderTopWidth: 1,
      paddingTop: 10*scaler,
      paddingBottom: 10*scaler,
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.0)',
      borderColor: 'rgba(0,0,0,0.2)'
    },

    daysWrapper: {
      alignSelf: 'center',
      justifyContent: 'center'
    },

    dayLabels: {
      width: 50*scaler,
      color: '#768988',
      fontSize: 10, fontWeight: '600',
      textTransform: 'uppercase',
      textAlign: 'center'
    },

    selectedDay: {
      width: 40,
      height:40,
      borderRadius: 20,
      alignSelf: 'center',
      justifyContent: 'center',
    },

    selectedDayBackground: {
      backgroundColor: '#039999',
    },

    selectedToday: {
      width: 40,
      height:40,
      backgroundColor: '#F8F9FE',
      borderRadius: 20,
      alignSelf: 'center',
      justifyContent: 'center'
    },

    dayWrapper: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 50*scaler,
      height: 40*scaler,
      backgroundColor: 'rgba(0,0,0,0.0)'
    },

    startDayWrapper: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#039999',
      alignSelf: 'center',
      justifyContent: 'center'
    },

    endDayWrapper: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#039999',
      alignSelf: 'center',
      justifyContent: 'center'
    },

    inRangeDay: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#CAE7E7',
      alignSelf: 'center',
      justifyContent: 'center'
    },

    headerWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'space-between',
      width: containerWidth,
      padding: 5*scaler,
      paddingBottom: 3*scaler,
      marginBottom: 10*scaler,
      backgroundColor: 'rgba(0,0,0,0.0)'
    },

    monthYearHeaderWrapper: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 3*scaler,
    },

    previousContainer: {
      marginLeft: 10*scaler,
    },

    nextContainer: {
      marginRight: 10*scaler,
      alignItems: 'flex-end',
    },

    navButtonText: {
      fontSize: 14*scaler,
    },

    weeks: {
      flexDirection: 'column'
    },

    weekRow: {
      flexDirection: 'row'
    },

    disabledText: {
      fontSize: 14*scaler,
      color: '#BBBBBB',
      alignSelf: 'center',
      justifyContent: 'center'
    },

    selectedDisabledText: {
      fontSize: 14*scaler,
      color: '#DDDDDD',
      alignSelf: 'center',
      justifyContent: 'center'
    },

    monthHeaderMainText: {
      fontSize: 16*scaler,
      color: '#000',
      textAlign: 'right',
      marginHorizontal: 3*scaler,
    },

    monthButton: {
      width: 30*scaler,
      height: 30*scaler,
      borderRadius: 30*scaler,
      alignSelf: 'center',
      justifyContent: 'center'
    },

    monthsHeaderText: {
      flex: 1,
      fontSize: 16*scaler,
      color: '#000',
      textAlign: 'center'
    },

    monthContainer: {
      flex: 1,
      alignItems: 'center',
    },

    monthText: {
      fontSize: 14*scaler,
      color: '#000',
      alignSelf: 'center'
    },

    monthsWrapper: {
      alignSelf: 'center',
      justifyContent: 'center',
      width: containerWidth,
    },

    monthsRow: {
      flexDirection: 'row',
      padding: 20*scaler,
    },

    yearHeaderMainText: {
      fontSize: 16*scaler,
      color: '#000',
      marginHorizontal: 3*scaler,
    },

    yearContainer: {
      flex: 1,
      alignItems: 'center',
    },

    yearText: {
      fontSize: 14*scaler,
      color: '#000',
      alignSelf: 'center'
    },

    yearsHeaderText: {
      fontSize: 16*scaler,
      color: '#000',
      width: 180*scaler,
      textAlign: 'center'
    },

    yearsWrapper: {
      alignSelf: 'center',
      justifyContent: 'center',
      width: containerWidth,
    },

    yearsRow: {
      flexDirection: 'row',
      padding: 20*scaler,
    },

  };
}
