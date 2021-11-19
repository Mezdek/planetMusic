import categories from "../assets/categories";
import "./stylesheets/GenreSelectList.css";

function GenreSelectList({ setGenre }) {
  return (
    <div className="genre-select-list">
      <label htmlFor="genre-select"></label>
      <select
        id="genre-select"
        onChange={(e) => {
          setGenre(e.target.value);
        }}
      >
        <option value="">Select a genre</option>
        {categories.map((category, index) => (
          <option key={`genre${index}`} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default GenreSelectList;
