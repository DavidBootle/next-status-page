import type { NextPage } from "next";

interface ColumnConfig {
    size: number,
    viewport?: string
}

interface Props {
    size?: number,
    viewport?: string,
}

const Column: NextPage<Props> = (props) => {

    let classString = 'col';
    if (props.viewport) { classString += `-${props.viewport}` }
    if (props.size) { classString += `-${props.size}`}

    return (
        <div className={classString}>
            {props.children}
        </div>
    )
}

export default Column