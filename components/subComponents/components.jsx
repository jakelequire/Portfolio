
export function PrimaryButton() {

}

export function SecondaryButton(props) {
    return (
        <a href={props.link} className="secondary-button">{props.text}</a>
    )
}