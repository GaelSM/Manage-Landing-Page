import ilustrationInfo from "../assets/illustration-intro.svg"
import "./Simplify.css"

export default function Simplify() {
    return (
        <section className="simplify">
            <div className="left">
                <h1> Bring everyone together to build better products. </h1>
                <p>
                    Manage makes it simple for software teams to plan day-to-day
                    tasks while keeping the larger team goals in view.
                </p>
                <button className="get-started">
                    Get Started
                </button>
            </div>
            <div className="right">
                <img src={ilustrationInfo} alt="" />
            </div>
        </section>
    )
}