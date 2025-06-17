function Leveling({ level, pomodoros }) {

    return (
        <>
        <div className="text-red-950 font-bold text-center m-8 w-80 ">
            <img className="object-top mx-auto block max-w-[220px] h-auto border-4" src="images/studious_cat.png" id="cat_image"/>

            <div className="min-h-[50px] text-3xl">Level:</div>
            <div className="min-h-[50px] text-3xl" id="level">{level}</div>

            <div className="min-h-[50px] text-2xl">Pomodoros: </div>
            <div className="min-h-[50px] text-2xl" id="pomodoros">{pomodoros}</div>
        </div>
        </>
    )
}

export default Leveling;