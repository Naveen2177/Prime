import React from "react";
import '../styles/categories.css'

const Categories = () => {
  return (
    <div>
      <table>
        <tr>
          <th>
            Geners
          </th>
          <th>
            Featured collections
          </th>
        </tr>
        <tr>
            <td><a href="#">Action and adventures</a></td>
            <td><a href="#">Anime</a></td>
            <td><a href="#">English</a></td>
            <td><a href="#">Hindi</a></td>
        <tr>
            <td><a href="#">Comedy</a></td>
            <td><a href="#">Documentary</a></td>
            <td><a href="#">Telugu</a></td>
            <td><a href="#">Tamil</a></td>
        </tr>
        <tr>
            <td><a href="#">Drama</a></td>
            <td><a href="#">Fentasy</a></td>
            <td><a href="#">Malayalam</a></td>
            <td><a href="#">Kannada</a></td>
        </tr>
        <tr>
            <td><a href="#">Horror</a></td>
            <td><a href="#">International</a></td>
            <td><a href="#">Marathi</a></td>
            <td><a href="#">Punjabi</a></td>
        </tr>
        <tr>
            <td><a href="#">kids</a></td>
            <td><a href="#">Music videos and concerts</a></td>
            <td><a href="#">Gujarati</a></td>
            <td><a href="#">Bengali</a></td>
        </tr>
        <tr>
            <td><a href="#">Mystery and thrillers</a></td>
            <td><a href="#">Romance</a></td>
        </tr>
        </tr>
      </table>
    </div>
  );
};

export default Categories;
