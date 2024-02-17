import { useEffect, useState } from "react";

const RandomColor = () => {
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000");

    const getRandomNumber = (length) => {
        return Math.floor(Math.random() * length);
    };
    const handleHexColor = () => {
        const hex = [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
        ];
        let hexCode = "#";
        console.log(hexCode);
        for (let i = 0; i < 6; i++) {
            hexCode += hex[getRandomNumber(hex.length)];
        }
        setColor(hexCode);
    };

    const handRgbColor = () => {
        const r = getRandomNumber(256)
        const g = getRandomNumber(256)
        const b = getRandomNumber(256)

        setColor(`rgb(${r}, ${g}, ${b})`)
    };

    useEffect(() => {
        if(typeOfColor === 'hex') handleHexColor();
        else handRgbColor();
    },[typeOfColor])

    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
                background: color,
                textAlign: "center",
            }}
        >
            <button onClick={() => setTypeOfColor("hex")}>
                Create HEX Color
            </button>
            <button onClick={() => setTypeOfColor("rgb")}>
                Create RGB Color
            </button>
            <button
                onClick={typeOfColor === "hex" ? handleHexColor : handRgbColor}
            >
                Generate Random Color
            </button>
            <div
                style={{ color: "#fff", marginTop: "150px", fontSize: "60px" }}
            >
                {/* <h3>{typeOfColor === "hex"? }</h3> */}
                {typeOfColor === "hex" ? (
                    <h3>Hex Color</h3>
                ) : (
                    <h3>RGB Color</h3>
                )}
                <h3>{color}</h3>
            </div>
        </div>
    );
};

export default RandomColor;
