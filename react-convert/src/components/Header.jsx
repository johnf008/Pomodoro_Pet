function Header() {
    return( 
        <>
        <div className="h-[50px] flex items-center text-white w-[80%] border-[2px] px-10">
            <img className="min-h-[50px] text-2xl font-bold" src="images/logo.png"/>
            <div className="grow flex justify-end">
                <a href="https://github.com/johnf008/Pomodoro_Pet.git">Github</a>
            </div>
        </div>
        </>
    )

}

export default Header;
