import type { NextPage } from "next";

const SectionBlock: NextPage = (props) => {
    return (
        <div className="section-block">
            {props.children}
        </div>
    )
}

export default SectionBlock