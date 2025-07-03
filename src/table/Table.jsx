import Row from "./Row";

// not pure component
// export default function Table() {
//     return (
//         <table border="1">
//             <tbody>
//                 <Row text="Satu"></Row>
//                 <Row text="Dua"></Row>
//                 <Row text="Tiga"></Row>
//             </tbody>
//         </table>
//     )
// }

// pure component
export default function Table() {
    return (
        <table border="1">
            <tbody>
                <Row id="1" text="Satu"></Row>
                <Row id="2" text="Dua"></Row>
                <Row id="3" text="Tiga"></Row>
            </tbody>
        </table>
    )
}