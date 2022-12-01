import Link from "next/link"

export default function Button(props) {
    return(
        <Link href={props.destiny}>
                {props.text}
        </Link>
    )
}