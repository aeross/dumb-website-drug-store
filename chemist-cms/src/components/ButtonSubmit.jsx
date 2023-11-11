export default function ButtonSubmit({ handleSubmit, buttonText }) {
    return <button className="btn btn-primary" onClick={handleSubmit}>{buttonText}</button>
}