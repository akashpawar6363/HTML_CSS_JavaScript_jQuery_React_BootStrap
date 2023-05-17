export default function Header()
{
    let styleObj = {backgroundColor: "Red", textAlign: "center", borderStyle: "Solid", borderWidth: "px"}

    return <div style={styleObj}>
        <h1>Hello From Swaraj Kakade(KAKADE GROUP OF INDUSTRIES)</h1>
        <p>{new Date().toString()}</p>

    </div>
}