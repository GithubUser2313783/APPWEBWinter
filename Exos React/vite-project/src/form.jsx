function App() {

  function signUp(formData) { 
      const data = Object.fromEntries(formData)
      const ingredients = formData.getAll("ingredients")
      const allData = {
          ...data,
          ingredients
      }
  }

  return (
      <section className="container">
          <h2>Inscription</h2>
          
          <form action={signUp} className="form">
              
              <label htmlFor="email">Email :</label>
              <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="john-doe@exemple.com"
              />

              <label htmlFor="password">Mot de passe :</label>
              <input 
                  type="password" 
                  id="password" 
                  name="password"
              />
              
              
              <label htmlFor="description">Description :</label>
              <textarea id="description" name="description"></textarea>
              
              <fieldset>
              
                  <legend>Country :</legend>
                  
                  <label>
                      <input 
                          type="radio" 
                          name="country" 
                          value="unemployed" 
                      />
                      Greece
                  </label>
                  
                  <label>
                      <input 
                          type="radio" 
                          name="country" 
                          value="part-time" 
                      />
                      Italy
                  </label>
                  
                  <label>
                      <input 
                          type="radio" 
                          name="country"  
                          value="full-time" 
                      />
                      South Korea
                  </label>
              
              </fieldset>
              
              <p>
                  <form>
                      Choose a size: 
                      <select name="size">
                          <option value="family">Family</option>
                          <option value="couple">Couple</option>
                          <option value="trio">Trio</option>
                          <option value="lonely">Lonely</option>
                      </select>
                  </form>
              </p>

              <p>
                  <label>
                      How many passengers?
                  </label>
                  <input type="number" step="1" id="incrementInput" min="0" max="25" />
              </p>



              <fieldset>
                  
                  <legend>Items :</legend>
                  
                  <label>
                      <input 
                          type="checkbox" 
                          name="ingredients" 
                          value="handbag" 
                      />
                      Handbag
                  </label>
                  
                  <label>
                      <input 
                          type="checkbox" 
                          name="ingredients" 
                          value="luggage" 
                      />
                      Wrapped Luggage
                  </label>
                  
                  <label>
                      <input 
                          type="checkbox" 
                          name="ingredients"  
                          value="backpack" 
                      />
                      Backpack
                  </label>

                  <label>
                      <input 
                          type="checkbox" 
                          name="ingredients" 
                          value="duffelbag" 
                      />
                      Duffel Bag
                  </label>

                  <label>
                      <input 
                          type="checkbox" 
                          name="ingredients" 
                          value="chestbag" 
                      />
                      Chest Bag
                  </label>
              
              </fieldset>

              

              <button className="submit-btn">Inscription</button>
          </form>
      </section>
  )
}export default App