
export function PrimaryButton(props) {
    return (
        <a href={props.link} className="primary-button">
            {props.text}
        </a>
    )
}

export function SecondaryButton(props) {
  return (
    <a href={props.link} className="secondary-button">
      {props.text}
    </a>
  );
}
