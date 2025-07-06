import { Link } from "react-router-dom"
function Header() {
    return( 
        <>
        <div className="h-[50px] flex items-center text-white w-[80%] border-[2px] px-10 rounded-xl">
            <img className="max-h-full" src="/Pomodoro_Pet/images/title_card.png"/>

            <div className="ml-auto h-13">
                <Link to="https://github.com/johnf008/Pomodoro_Pet">
                    <img className="max-h-full object-scale-down m-auto" src="/Pomodoro_Pet/images/github.svg"/> 
                </Link>
            </div>
        </div>
        </>
    )

}

export default Header;
