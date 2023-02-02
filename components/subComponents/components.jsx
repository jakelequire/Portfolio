
export function PrimaryButton() {

}

export function SecondaryButton(props) {
    return (
        <div className="secondary-button-container">
            <a className="secondary-button">{props.text}</a>
        </div>
    )
}