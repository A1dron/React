import React from "react";
import ReactDOM from "react-dom";

import "./styles";

class HelloWorld extends React.Component {
    render () {
        return (
        <table>
            <tr>
				<td></td>
				<td>Title</td>
				<td>Type</td>
				<td>Genre</td>
				<td>Year</td>
				<td>Rating</td>
			</tr>
			<tr>
				<td></td>
				<td>Venom</td>
				<td>Movie</td>
				<td>Thriller</td>
				<td>2018</td>
				<td>7</td>
			</tr>
			<tr>
				<td></td>
				<td>The Walking Dead</td>
				<td>TV Series</td>
				<td>Apocalypse</td>
				<td>2010</td>
				<td>8.4</td>
			</tr>
			<tr>
				<td></td>
				<td>The Shawshank Redemption</td>
				<td>Movie</td>
				<td>Drama</td>
				<td>1994</td>
				<td>9.3</td>
			</tr>
			<tr>
				<td></td>
				<td>WALL-E</td>
				<td>Movie</td>
				<td>Adventure</td>
				<td>2008</td>
				<td>8.4</td>
			</tr>
			<tr>
				<td></td>
				<td>Up</td>
				<td>Movie</td>
				<td>Adventure</td>
				<td>2009</td>
				<td>8.3</td>
			</tr>
        </table>
        );
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));