import Image from "next/image";

export function PrimaryButton(props) {
  return (
    <a href={props.link} className={`primary-button ${props.altClass}`}>
      {props.text}
    </a>
  );
}

export function SecondaryButton(props) {
  return (
    <a href={props.link} className={`secondary-button ${props.altClass}`}>
      {props.image && (
        <Image
          src={props.image}
          alt={props.text}
          width={props.width}
          height={props.height}
        />
      )}
		{props.text}
    </a>
  );
}

export function TertiaryButton(props) {
	return (
		<a href={props.link} onClick={props.onClick} target="_blank" className={`tertiary-button ${props.altClass}`}>
			{props.text}
		</a>
	);
}