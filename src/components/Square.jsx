export default function Square({value,onSquareClicked}) {
    
    return <button className="square" onClick={onSquareClicked}>{value}</button>;
}

// function Square({ value, onSquareClick }) {
//     return (
//       <button className="square" onClick={onSquareClick}>
//         {value}
//       </button>
//     );
//   }