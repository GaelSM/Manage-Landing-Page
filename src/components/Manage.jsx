import "./Manage.css"

export default function Manage() {
    return (
        <section className="manage">
            <article className="left">
                <h2> What’s different about Manage? </h2>
                <p>
                    Manage provides all the functionality your team needs, without
                    the complexity. Our software is tailor-made for modern digital
                    product teams.
                </p>
            </article>
            <article className="right">
                <ul>
                    <li>
                        <div className="list"> 01 </div>
                        <h3> Track company-wide progress </h3>
                        <p>
                            See how your day-to-day tasks fit into the wider vision. Go from
                            tracking progress at the milestone level all the way done to the
                            smallest of details. Never lose sight of the bigger picture again.
                        </p>
                    </li>
                    <li>
                        <div className="list"> 02 </div>
                        <h3> Advanced built-in reports </h3>
                        <p>
                            Set internal delivery estimates and track progress toward company
                            goals. Our customisable dashboard helps you build out the reports
                            you need to keep key stakeholders informed.
                        </p>
                    </li>
                    <li>
                        <div className="list"> 03 </div>
                        <h3> Everything you need in one place </h3>
                        <p>
                            Stop jumping from one service to another to communicate, store files,
                            track tasks and share documents. Manage offers an all-in-one team
                            productivity solution.
                        </p>
                    </li>
                </ul>
            </article>
        </section>
    )
}