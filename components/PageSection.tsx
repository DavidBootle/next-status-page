import { NextPage } from "next";

const PageSection: NextPage = (props) => {
    return (
        <div className="page-section">
            {props.children}
        </div>
    )
}

export default PageSection