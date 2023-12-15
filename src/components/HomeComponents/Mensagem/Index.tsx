import "../../HomeComponents/Mensagem/styles.css";

type Props = {
    texto: string;
}

export default function Mensagem( props: Props) {
  return (
    <div className="des-container">
      <h2> {props.texto}</h2>
    </div>
  );
}
