export default function EventRegistration() {
  return (
    <div>
      <fieldset>
        <legend>Details of event</legend>
        <label>Event you would like to attend:</label>
        <select>
          <option>Event 1</option>
          <option>Event 2</option>
          <option>Event 3</option>
          <option>Event 4</option>
        </select>
        <label>Please choose date and time:</label>
        <select>
          <option>Date and time1</option>
          <option>Date and time2</option>
          <option>Date and time3</option>
          <option>Date and time4</option>
        </select>
        <label>Please specify your diet preferences</label>
        <label>
          <input type="radio" name="dietoption" /> Vegetarian
        </label>
        <label>
          <input type="radio" name="dietoption" /> Non-vegetarian
        </label>
        <label>
          <input type="radio" name="dietoption" /> Vegan
        </label>
      </fieldset>
      <button type="submit">Register</button>
    </div>
  );
}
