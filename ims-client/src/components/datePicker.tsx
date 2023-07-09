
import React from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

interface getAllProps {
    date: Date,
    setDate: React.Dispatch<React.SetStateAction<Date>>

}
//כשאתן קוראות לקומפוננטה הזו תשלחו אליה אוביקט סטייט שמורכב מדייט ומסטדייט כנל
export function DatePickerComp({ date, setDate }: getAllProps) {
    // החלטה שרירותית שיוכלו לעדכן על תאריך החל משנה שעברה ועד היום....אם נראה לכן שיש צורך לשנות אז יאללהה
    const today = new Date()
    //
    const yearAgo = new Date()
    yearAgo.setFullYear(today.getFullYear() - 1)
    const selectDateHandler = (d: Date) => {
        setDate(d)
    }

    return (

        <DatePicker
            dateFormat="yyyy/MM/dd"
            selected={date}
            onChange={selectDateHandler}
            minDate={yearAgo}
            maxDate={today}
            todayButton={"Today"} />
    );
}


