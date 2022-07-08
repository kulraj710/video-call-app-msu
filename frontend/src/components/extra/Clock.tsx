import React from 'react'

const Clock : React.FC = () => {

    const [date, setDate] = React.useState<Date>(new Date())

    function refreshClock() {
        setDate(new Date())
    }

    React.useEffect(() => {
        const Updatetime = setInterval(refreshClock, 1000)
        return () => clearInterval(Updatetime)
    }, [])

    const styles = {
        fontFamily: "'Google Sans',Roboto,Arial,sans-serif",
        fontSize : "1rem",
        fontWeight: 400,
        letterSpacing: 0,
        lineHeight: '1.5rem',
        color: '#5f6368',
        marginRight: '12px',
    }
  return (
    <div style={styles}>
        {date.toLocaleTimeString()}
    </div>
  )
}

export default Clock