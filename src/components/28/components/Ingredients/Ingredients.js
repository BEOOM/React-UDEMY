import React, { useEffect, useCallback, useReducer, useMemo } from "react";
import ErrorModal from "../UI/ErrorModal";
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";
import useHttp from "../../hooks/http";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("should not get here");
  }
};

function Ingredients() {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const { isLoading, data, error, sendRequest } = useHttp();

  // const [userIngredients, setUserIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState();

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    // setUserIngredients(filteredIngredients);
    dispatch({ type: "SET", ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = useCallback((ingredient) => {
    // dispatchHttp({ type: "SEND" });
    // fetch("https://task-7c074-default-rtdb.firebaseio.com/ingredients.json", {
    //   method: "POST",
    //   body: JSON.stringify(ingredient),
    //   headers: {
    //     "Content-Type": "appication/json",
    //   },
    // })
    //   .then((response) => {
    //     dispatchHttp({ type: "RESPONSE" });
    //     return response.json();
    //   })
    //   .then((responseData) => {
    //     dispatch({
    //       type: "ADD",
    //       ingredient: { id: responseData.name, ...ingredient },
    //     });
    //   });
  }, []);

  const removeIngredientHandler = useCallback(
    (ingredientId) => {
      // setIsLoading(true);
      sendRequest(
        `https://task-7c074-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`,
        `DELETE`
      );
    },
    [sendRequest]
  );

  const clearError = useCallback(() => {
    // setError(null);
    // dispatchHttp({ type: "CLEAR" });
  }, []);

  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={removeIngredientHandler}
      />
    );
  }, [userIngredients, removeIngredientHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
