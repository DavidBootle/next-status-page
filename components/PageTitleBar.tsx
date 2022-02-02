import type { NextPage } from "next";
import Link from "next/link";

interface Props {
    title: string,
    subtitle: string,
    websiteLink?: string,
    subtitleIsLink?: boolean,
}

const PageTitleBar: NextPage<Props> = (props) => {

    return (
        <header className="page-title-bar">
            <div className="d-flex flex-column flex-md-row">
                <p className="lead">
                    <span className="font-weight-bold">{props.title}</span>
                    { props.subtitleIsLink && props.websiteLink &&
                        <span className="d-block text-muted"><a href={props.websiteLink} target="_blank" rel="noreferrer"><span className="fa fa-xs fa-link"></span> {props.subtitle}</a></span>
                    }
                    { (props.subtitleIsLink == null || props.subtitleIsLink == false || props.websiteLink == null) &&
                        <span className="d-block text-muted">{props.subtitle}</span>
                    }
                </p>

                {props.children}

                { props.websiteLink &&
                <div className="ml-auto">
                    <a href={props.websiteLink} target="_blank" rel="noreferrer" className="btn btn-primary">Visit Website&nbsp;<span className="fa fa-external-link-alt"></span></a>
                </div>
                }
            </div>
        </header>
    )
}

export default PageTitleBar