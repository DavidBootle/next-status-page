import type { NextPage } from "next";

interface Props {
    title: string,
    subtitle: string,
    websiteLink?: string,
}

const PageTitleBar: NextPage<Props> = (props) => {

    return (
        <header className="page-title-bar">
            <div className="d-flex flex-column flex-md-row">
                <p className="lead">
                    <span className="font-weight-bold">{props.title}</span> <span className="d-block text-muted">{props.subtitle}</span>
                </p>

                {props.children}

                { props.websiteLink &&
                <div className="ml-auto">
                    <a href={props.websiteLink} className="btn btn-primary">Visit Website&nbsp;<span className="fa fa-external-link-alt"></span></a>
                </div>
                }
            </div>
        </header>
    )
}

export default PageTitleBar